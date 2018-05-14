---
title: "Starting the Create React App Development Server"
permalink: /starting-the-create-react-app-development-server
excerpt: ""
last_modified_at: 2018-05-14T15:58:49-04:00
---

As was stated in the success message when you ran create-react-app, you just need to run `npm start` in your app directory to begin serving the development server. It should auto-open a tab in your browser that points to `http://localhost:3000/` (if not, manually visit that address). You will be greeted with the React welcome banner:

![Create React App Demo](/assets/images/create-react-app-demo.png)

As stated, any changes to the source code will live-update here. Let’s see that in action.

Leave the current terminal tab running (it’s busy serving the React app) and open ***src/App.js*** in your favorite text editor. You’ll see what looks like a mashup of JavaScript and HTML. This is JSX, which is how React adds XML syntax to JavaScript. It provides an intuitive way to build React components and is compiled to JavaScript at runtime. We’ll delve deeper into this in other content, but for now, let’s make a simple edit and see the update in the browser.

Change the main paragraph text to read: Hello Create React App! in App.js and save the file.

![Create React App Demo](/assets/images/create-react-app-appjs.png)

If you left the terminal running, you should be able to switch over to your browser and see the update:

![Create React App Demo](/assets/images/create-react-app-demo-updated.png)

Congratulations! You’re now up and running with Create React App.