# Boilerplate TS- Frontend

This version of the application introduces functionality for customers with limited technology skillsets so that they can easily control specific aspects (Color scheme, number of items on a given page or section, text elements, graphics and text, video etc.) of platform UX and content.

## Dependency List

 @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-proposal-private-methods @babel/plugin-transform-modules-commonjs @babel/plugin-transform-runtime @babel/preset-env @babel/preset-typescript @types/jest @types/node  babel-jest babel-loader commitizen css-loader cz-conventional-changelog dotenv-webpack file-loader file-replace-loader html-loader-jest html-loader html-webpack-plugin husky jest-environment-jsdom jest-serializer-html jest mini-css-extract-plugin sass-loader@ sass standard-version style-loader ts-jest ts-node typescript webpack-cli webpack-dev-server webpack

## What’s in the repo

This repo includes the source code of Bioscape Digital. The app has the following structure:

```
helpers         // Console helpers *for you* that validate
                // a few things during the build.
                // Just don’t care about them.

dist          // Static public files (HTML and CSS files)
           // Results of the webpack build (JS and SVG files)
scss       // Files to edit CSS Stylesheets
src
|- api         // The API module that makes requests to GitHub API
|- components  // Components that get rendered into the page.
               // Just plain JS, no frameworks (see “How components work”
               // below for additional info)
|- templates   // Templates of HTML pages
|- utils       // Additional utilities

|- App.ts    // The entry point. Renders the application
.gitignore
.babelrc
index.html
Jest.config.js
package.json
package-lock.json
README.md
style.css // Auto Generated file. Do not make edits here. They will be overwritten.
tsconfig.json
webpack.config.js // ↑ The webpack config file
webpack.config.prod.js // Webpack config file for production
```

## Installation

1\. Clone the repository:

```bash
git clone 'FROM WHATEVER REPOSITORY'
```

### Development Mode

For those who want to run the code locally.
The page will reload if you make edits.
You will also see any errors in the console.

### Docker

This project is also Dockerized ONLY for development. This is by far the easiest way to run the project. Dependencies will not need to be manually installed. Download the [Docker App](https://docs.docker.com/get-docker/) and run it. In Terminal navigate the project folder and run `docker up`. To quit run `docker down`.

Open [localhost:8080](http://localhost:8080) to see the live app.

### NPM or YARN

This uses NPM or Yarn Package Managers to run/build projects so you will need to make sure you have them installed unless you use the Docker route explained above. You will also have to Launch the Backend(if applicable to the project) before the Frontend.


#### 1\. Install the dependencies

```bash
cd frontend
npm install
```

#### 2\. Run the development server

```bash
npm run start
```

### **Launch the app**

Runs the FRONTEND app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Testing
In Terminal navigate the project folder/frontend and run `npm test`/`yarn test`.
Launches the test runner in the interactive watch mode.

#### 4\. Test Runner

```bash
npm run test
```
