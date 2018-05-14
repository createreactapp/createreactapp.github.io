---
title: "Installation"
permalink: /install-create-react-app
excerpt: "It is possible to manually create a React app, but Facebook has created a node module create-react-app to generate a boilerplate version of a React application."
last_modified_at: 2018-05-14T15:58:49-04:00
---

It is possible to manually create a React app, but Facebook has created a node module `create-react-app` to generate a boilerplate version of a React application.

Besides providing something that works out-of-the-box, this has the added benefit of providing a consistent structure for React apps that you will recognize as you move between React projects. It also provides an out-of-the-box build script and development server.

We will use npm to install the `create-react-app` command line interface (CLI) globally (-g).

Open up your terminal and run:

```
npm install -g create-react-app
```

Now that you have the CLI available for use, navigate to the parent directory that you would like to place the application within. Then, run `create-react-app` with the name you would like to use for your project (just no capital letters ):

```
create-react-app <name-of-app>
```

Upon completion, you will get some quick tips on how to use the application:

![Install Create React App](/assets/images/install-create-react-app.png)