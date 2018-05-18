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
        "excerpt":"Now that you’re familiar with the principles of Redux, let’s dive deeper. We’re going to look at the technical implementation of those principles. Once you’ve got a basic of the concepts below, you’ll be ready to move on to some code in next chapter. The store holds the application state...","categories": [],
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
        "teaser":null},{
        "title": "Installation",
        "excerpt":"Create React App doesn’t prescribe a specific routing solution, but React Router is the most popular one. Open up your terminal and run: npm install --save react-router-domTo try it, delete all the code in src/App.js and replace it with any of the examples on its website. The Basic Example is...","categories": [],
        "tags": [],
        "url": "/install-router",
        "teaser":null},{
        "title": "Adding a Router",
        "excerpt":"We will use React to build a very simple app. Installing Crate React APP To get React projects up and running quickly with Create React App, get a look the previous chapter. Installing React Redux Open up your terminal and run: npm install --save react-router-domNow, we will add routes to...","categories": [],
        "tags": [],
        "url": "/add-a-router",
        "teaser":null},{
        "title": "Adding a Stylesheet",
        "excerpt":"This project setup uses Webpack for handling all assets. Webpack offers a custom way of “extending” the concept of import beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to import the CSS from the JavaScript file: Button.css .Button { padding: 20px;}Button.js import React,...","categories": [],
        "tags": [],
        "url": "/add-a-stylesheet",
        "teaser":null},{
        "title": "Adding Bootstrap",
        "excerpt":"You don’t have to use React Bootstrap together with React but it is a popular library for integrating Bootstrap with React apps. If you need it, you can integrate it with Create React App by following these steps: Install React Bootstrap and Bootstrap from npm. React Bootstrap does not include...","categories": [],
        "tags": [],
        "url": "/add-bootstrap",
        "teaser":null},{
        "title": "Adding a CSS Preprocessor (Sass, Less etc.)",
        "excerpt":"Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition. You can, however, integrate a CSS preprocessor if you find it valuable. In this walkthrough, we will be using Sass, but you can also use Less, or another alternative. First,...","categories": [],
        "tags": [],
        "url": "/add-a-css-preprocessor",
        "teaser":null},{
        "title": "Fetching Data with AJAX Requests",
        "excerpt":"React doesn’t prescribe a specific approach to data fetching, but people commonly use either a library like axios or the fetch() API provided by the browser. Conveniently, Create React App includes a polyfill for fetch() so you can use it without worrying about the browser support. The global fetch function...","categories": [],
        "tags": [],
        "url": "/fetch-data-with-ajax-request",
        "teaser":null},{
        "title": "AJAX and APIs",
        "excerpt":"You can use any AJAX library you like with React. Some popular ones are axios and the browser built-in fetch. You should populate data with AJAX calls in the componentDidMount lifecycle method. This is so you can use setState to update your component when the data is retrieved. Using AJAX...","categories": [],
        "tags": [],
        "url": "/ajax-and-apis",
        "teaser":null},{
        "title": "Proxying API Requests in Development",
        "excerpt":"People often serve the front-end React app from the same host and port as their backend implementation.For example, a production setup might look like this after the app is deployed: / - static server returns index.html with React app/todos - static server returns index.html with React app/api/todos - server handles...","categories": [],
        "tags": [],
        "url": "/proxying-api-request",
        "teaser":null},{
        "title": "Using HTTPS in Development",
        "excerpt":"You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using the “proxy” feature to proxy requests to an API server when that API server is itself serving HTTPS. To do this, set the HTTPS environment variable to true,...","categories": [],
        "tags": [],
        "url": "/use-https-in-development",
        "teaser":null},{
        "title": "Adding Material UI",
        "excerpt":"You don’t have to use Material UI together with React but it is a popular library for integrating Material UI with React apps. If you need it, you can integrate it with Create React App by following these steps: Install Material UI npm: npm install --save @material-ui/coreImport MuiThemeProvider component in...","categories": [],
        "tags": [],
        "url": "/add-material-ui",
        "teaser":null},{
        "title": "Generating Dynamic meta Tags on the Server",
        "excerpt":"Since Create React App doesn’t support server rendering, you might be wondering how to make &lt;meta&gt; tags dynamic and reflect the current URL. To solve this, we recommend to add placeholders into the HTML, like this: &lt;!doctype html&gt;&lt;html lang=\"en\"&gt; &lt;head&gt; &lt;meta property=\"og:title\" content=\"__OG_TITLE__\"&gt; &lt;meta property=\"og:description\" content=\"__OG_DESCRIPTION__\"&gt;Then, on the server, regardless...","categories": [],
        "tags": [],
        "url": "/generate-dynamic-meta-tags-on-the-server",
        "teaser":null},{
        "title": "Pre-Rendering into Static HTML Files",
        "excerpt":"If you’re hosting your build with a static hosting provider you can use react-snapshot or react-snap to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or “hydrated”, when the JavaScript bundle has loaded. There are also opportunities to use...","categories": [],
        "tags": [],
        "url": "/pre-render-into-static-html-files",
        "teaser":null},{
        "title": "Injecting Data from the Server into the Page",
        "excerpt":"Similarly to the next section, you can leave some placeholders in the HTML that inject global variables, for example: &lt;!doctype html&gt;&lt;html lang=\"en\"&gt; &lt;head&gt; &lt;script&gt; window.SERVER_DATA = __SERVER_DATA__; &lt;/script&gt;Then, on the server, you can replace __SERVER_DATA__ with a JSON of real data right before sending the response. The client code can...","categories": [],
        "tags": [],
        "url": "/inject-data-from-the-server-into-the-page",
        "teaser":null},{
        "title": "Using Global Variables",
        "excerpt":"When you include a script in the HTML file that defines global variables and try to use one of these variables in the code, the linter will complain because it cannot see the definition of the variable. You can avoid this by reading the global variable explicitly from the window...","categories": [],
        "tags": [],
        "url": "/use-global-variables",
        "teaser":null},]
