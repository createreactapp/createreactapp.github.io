var store = [{
        "title": "What is Create React App?",
        "excerpt":"Create React App is a tool built by developers at Facebook to help you build React applications. It saves you from time-consuming setup and configuration. You simply run one command and create react app sets up the tools you need to start your React project.  ","categories": [],
        "tags": [],
        "url": "/",
        "teaser":null},{
        "title": "Installation",
        "excerpt":"It is possible to manually create a React app, but Facebook has created a node module create-react-app to generate a boilerplate version of a React application. Besides providing something that works out-of-the-box, this has the added benefit of providing a consistent structure for React apps that you will recognize as...","categories": [],
        "tags": [],
        "url": "/install-create-react-app",
        "teaser":null},{
        "title": "Structure",
        "excerpt":"Change directories into the app you just created. If you list the contents of the directory including hidden files (ls -la), you should see the following structure: create-react-app has taken care of setting up the main structure of the application as well as a couple of developer settings. Most of...","categories": [],
        "tags": [],
        "url": "/create-react-app-structure",
        "teaser":null},{
        "title": "Starting the Create React App Development Server",
        "excerpt":"As was stated in the success message when you ran create-react-app, you just need to run npm start in your app directory to begin serving the development server. It should auto-open a tab in your browser that points to http://localhost:3000/ (if not, manually visit that address). You will be greeted...","categories": [],
        "tags": [],
        "url": "/starting-the-create-react-app-development-server",
        "teaser":null},{
        "title": "What is Redux?",
        "excerpt":"Let’s see what the documentation says. Redux is a predictable state container for JavaScript apps. Redux makes it easy to manage the state of your application. Another way of looking at this it helps you manage the data you display and how you respond to user actions. – Credits go...","categories": [],
        "tags": [],
        "url": "/what-is-redux",
        "teaser":null},{
        "title": "Redux Inspiration",
        "excerpt":"Dan Abramov created Redux to make development more fun with better tooling. He’s the guy who’s written some amazing modules like create-react-app, react-hot-loader and react-dnd. He wanted a minimal API that improved the application structure and had better tools. Redux makes data management and debugging a whole lot easier. ","categories": [],
        "tags": [],
        "url": "/redux-inspiration",
        "teaser":null},{
        "title": "Unidirectional Data Flow Architecture",
        "excerpt":"Redux was inspired by Flux and Elm. Facebook was facing problems with the MVC structure. The Model and View relationships can get tricky. This is especially true as your application starts to scale. You could be dealing with problems such as infinite loops. That’s when Facebook introduced Flux. A unidirectional...","categories": [],
        "tags": [],
        "url": "/unidirectional-data-flow-architecture",
        "teaser":null},{
        "title": "Principles of Redux",
        "excerpt":"Redux can be described in three fundamental principles: Single Source of Truth The state of your whole application is stored in an object tree within a single store. The state of all the components (pieces) of your application depends on one root object tree within a single store. This makes...","categories": [],
        "tags": [],
        "url": "/principles-of-redux",
        "teaser":null},{
        "title": "Pillars of Redux",
        "excerpt":"Now that you’re familiar with the principles of Redux, let’s dive deeper. We’re going to look at the technical implementation of those principles. Once you’ve got a basic of the concepts below, you’ll be ready to move on to some code in next chepter. The store holds the application state...","categories": [],
        "tags": [],
        "url": "/pillars-of-redux",
        "teaser":null},{
        "title": "Usage with React",
        "excerpt":"From the very beginning, we need to stress that Redux has no relation to React. You can write Redux apps with React using Crate React App. That said, Redux works especially well with libraries like React because they let you describe UI as a function of state, and Redux emits...","categories": [],
        "tags": [],
        "url": "/usage-with-redux",
        "teaser":null},{
        "title": "Example Todo List",
        "excerpt":"This is the complete source code of the tiny todo app we built during the basics tutorial. Entry Point index.js import React from 'react'import { render } from 'react-dom'import { createStore } from 'redux'import { Provider } from 'react-redux'import App from './components/App'import rootReducer from './reducers'const store = createStore(rootReducer)render( &lt;Provider store={store}&gt;...","categories": [],
        "tags": [],
        "url": "/example-todo-list",
        "teaser":null},]
