# Base Framework

This is the application framework. This base will do a lot of repeatable tasks that we can abstract away and not have a lot of code cluttering the specific functionality  of the Application.

## Base.ts

This is the root component of an application. The application component is in charge of the initialization of all the internal components of the framework (eventEmitter, router, and dispatcher).

## EventEmitter.ts

The EventEmitter is in charge of the communication between all the other components in the application.

## Application Events

 Application events are used to send information from one component to another. An application event is identified by an identifier known as a topic. The components can publish application events as well as subscribe and unsubscribe to application events.

## Router

The router observes the changes in the browser URL and creates instances of the Route class that are then sent to the Dispatcher using an application event.

## Routes

These are used to represent a URL. The URLs use naming conventions that can be used to identify which presenter and action should be invoked.

## Dispatcher

The dispatcher receives instances of the Route class, which are used to identify the required presenter. The dispatcher can then dispose the previous presenter and create a new presenter instance if necessary. Once the presenter has been initialized, the dispatcher passes the execution flow to the presenter using an application event.

## Presenters

The presenter acts upon the model and the view. It retrieves data from repositories (the model), and formats it for display in the view. Presenters are used to initialize views and models. Once the views and models are initialized, the Presenter passes the execution flow to one or more models using an application event.

## Models

Models are in charge of the interaction with the HTTP API as well as data manipulation in memory. This involves data formatting as well as operations such as the addition or deletion of data. Once the Model has finished manipulating the data, it is passed to one or more presenters using an application event.

## Views

Views are a passive interface that displays data (the model) and routes user commands (events) to the presenter to act upon that data. Views are in charge of the load and compilation of templates. Once the template has been loaded, the views wait for data to be sent by the models. When the data is received, it is combined with the templates to generate HTML code, which is appended to the DOM. Views are also in charge of the binding and unbinding of UI events (click, focus, and so on).
