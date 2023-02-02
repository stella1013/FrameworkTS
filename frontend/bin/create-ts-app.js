#! /usr/bin/env node

'use strict';

const path = require('path');
const util = require('util');
const packageJson = require('../package.json');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);

async function runCmd(command) {
  try {
    const { stdout, stderr } = await exec(command);
    console.log(stdout);
    console.log(stderr);
  } catch {
    (error) => {
      console.log('\x1b[31m', error, '\x1b[0m');
    };
  }
}

if (process.argv.length < 3) {
  console.log('\x1b[31m', 'You have to provide name to your app.');
  console.log('For example:');
  console.log('    npx create-ts-app my-app', '\x1b[0m');
  process.exit(1);
}

const ownPath = process.cwd();
const folderName = process.argv[2];
const appPath = path.join(ownPath, folderName);
const repo = 'https://github.com/stella1013/Boilerplate-Frontend-TS-Vanilla.git';

try {
  fs.mkdirSync(appPath);
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log(
      '\x1b[31m',
      `The file ${appName} already exist in the current directory, please give it another name.`,
      '\x1b[0m'
    );
  } else {
    console.log(err);
  }
  process.exit(1);
}

async function setup() {
  try {
    console.log('\x1b[33m', 'Downloading the project structure...', '\x1b[0m');
    await runCmd(`git clone --depth 1 ${repo} ${folderName}`);

    process.chdir(appPath);

    console.log('\x1b[34m', 'Installing dependencies...', '\x1b[0m');
    await runCmd('npm install');
    console.log();

    await runCmd('npx rimraf ./.git');

    fs.unlinkSync(path.join(appPath, 'LICENSE.MD'));
    fs.rmdirSync(path.join(appPath, 'bin'), { recursive: true });
    fs.unlinkSync(path.join(appPath, 'package.json'));

    buildPackageJson(packageJson, folderName);

    console.log(
      '\x1b[32m',
      'The installation is done, this is ready to use !',
      '\x1b[0m'
    );
    console.log();

    console.log('\x1b[34m', 'You can start by typing:');
    console.log(`    cd ${folderName}`);
    console.log('    npm start', '\x1b[0m');
    console.log();
    console.log('Check Readme.md for more informations');
    console.log();
  } catch (error) {
    console.log(error);
  }
}

setup();

function buildPackageJson(packageJson, folderName) {
  const {
    bin,
    keywords,
    license,
    homepage,
    repository,
    bugs,
    ...newPackage
  } = packageJson;

  Object.assign(newPackage, {
    name: '@stella1013/' + folderName,
    version: '1.0.0',
    description: '',
  author: "Veronica Preston <relativelydarling@gmail.com> (http://www.veronicapreston@gmail.com)",
  license: "ISC",
  repository: {
    type: "git",
    url: "https://github.com/stella1013/Boilerplate-Frontend-TS-Vanilla.git"
  },
  scripts: {
    test: "jest --watch",
    watch: "webpack --watch",
    start: "webpack serve --env ENVIRONMENT=development --config webpack.config.dev.js",
    ['build-staging']: "webpack --env ENVIRONMENT=staging  --config webpack.config.staging.js",
    build: "webpack --env ENVIRONMENT=production  --config webpack.config.prod.js",
    commit: "cz",
    lint: "eslint src/**",
    ['styleguide-build']: "...",
    ['prettier-check']: "prettier --check 'src/**/*.{js,mdx}'",
    validate: "run-s test lint prettier:check",
    prerelease: "git checkout master && git pull origin master && npm i && run-s validate styleguide:build && git-authors-cli && git add .",
    postrelease: "run-s release:*",
    release: "standard-version -a",
    ['ci-validate']: "rm -rf node_modules && npm ci && npm run validate",
    prepublishOnly: "npm run ci:validate && npm run build",
    ['watch-sass']: "node-sass sass/main.scss src/style.css -w",
    ['refresh-link']: "npm link /Volumes/Sammy/Documents/portal-dashboard-frontend/bsdui_lib"
      },
    
  devDependencies: {
    ['@babel/core']: "^7.15.0",
    ['@babel/plugin-proposal-class-properties']: "^7.14.5",
    ['@babel/plugin-proposal-decorators']: "^7.14.5",
    ['@babel/plugin-proposal-private-methods']: "^7.14.5",
    ['@babel/preset-env']: "^7.15.0",
    ['@babel/preset-typescript']: "^7.15.0",
    ['@types/jest']: "^27.0.0",
    ['@types/node']: "^14.0.27",
    ['babel-jest']: "^27.0.6",
    ['babel-loader']: "^8.2.3",
    ['commitizen']: "^4.2.4",
    ['css-loader']: "^5.0.2",
    ['cz-conventional-changelog']: "^3.3.0",
    ['dotenv-webpack']: "^6.0.2",
    ['file-loader']: "^6.2.0",
    ['file-replace-loader']: "^1.3.2",
    ['html-webpack-plugin']: "^5.2.0",
    ['husky']: "^7.0.1",
    jest: "^27.4.7",
    ['jest-serializer-html']: "^7.1.0",
    ['mini-css-extract-plugin']: "^1.3.8",
    sass: "^1.32.8",
    ['sass-loader']: "^11.0.1",
    ['standard-version']: "^9.3.1",
    ['style-loader']: "^2.0.0",
    ['ts-jest']: "^27.1.2",
    ['ts-node']: "^8.10.2",
    typescript: "^4.1.5",
    webpack: "^5.65.0",
    ['webpack-cli']: "^4.5.0",
    ['webpack-dev-server']: "^3.11.2"
      },
      dependencies: {
        bulma: "^0.9.2"
      },
      config: {
        commitizen: {
          path: "cz-conventional-changelog"
        }
      }
  });

  fs.writeFileSync(
    `${process.cwd()}/package.json`,
    JSON.stringify(newPackage, null, 2),
    'utf8'
  );
}