---
title: "Structure"
permalink: /create-react-app-structure
excerpt: ""
last_modified_at: 2018-05-14T15:58:49-04:00
---

Change directories into the app you just created. If you list the contents of the directory including hidden files (ls -la), you should see the following structure:

![Create React App Structure](/assets/images/create-react-app-structure.png)

create-react-app has taken care of setting up the main structure of the application as well as a couple of developer settings. Most of what you see will not be visible to the visitor of your web app. React uses a tool called webpack which transforms the directories and files here into static assets. Visitors to your site are served those static assets.

## .gitignore

This is the standard file used by the source control tool git to determine which files and directories to ignore when committing code. While this file exists, create-react-app did not create a git repo within this folder. If you take a look at the file, it has taken care of ignoring a number of items.

![Create React App .gitignore](/assets/images/create-react-app-gitignore.png)

## package.json

![Create React App package-json](/assets/images/create-react-app-package-json.png)

This file outlines all the settings for the Create React App.

* `name` is the name of your app

* `version` is the current version

* `"private": true` true is a failsafe setting to avoid accidentally publishing your app as a public package within the npm ecosystem

* `dependencies` contains all the required node modules and versions required for the application. Here, it contains two dependencies, which allow us to use `react` and `react-dom` in our JavaScript. In the screenshot above, the react version specified is `^16.3.2`. This means that npm will install the most recent major version matching 16.x.x. In contrast, you may also see something like `~1.2.3` in ***package.json***, which will only install the most recent minor version matching 1.2.x.

* `devDependencies` contains useful node modules and versions for using the React app in a development environment. Here, it contains one dependency, `react-scripts`, which provides a set of useful development scripts for working with React.

* `scripts` specifies aliases that you can use to access some of the react-scripts commands in a more efficient manner. For example running `npm test` in your command line will run `react-scripts test --env=jsdom` behind the scenes.

## node_modules

This directory contains dependencies and sub-dependencies of packages used by the current React app, as specified by ***package.json***. If you take a look, you may be surprised by how many there are.

Running `ls -1 | wc -l` within the ***node_modules/*** directory will yield more than 800 subfolders. This folder is automatically added to the ***.gitignore*** for good reason! Don’t worry, even with all these dependencies, the basic app will only be around 50 KB after being minified and compressed for production.

## package-lock.json

This file contains the exact dependency tree installed in ***node_modules/***. This provides a way for teams working on private apps to ensure that they have the same version of dependencies and sub-dependencies. It also contains a history of changes to package.json, so you can quickly look back at dependency changes.

## public

This directory contains assets that will be served directly without additional processing by webpack. ***index.html*** provides the entry point for the web app. You will also see a favicon (header icon) and a ***manifest.json***.

The manifest file configures how your web app will behave if it is added to an Android user’s home screen (Android users can “shortcut” web apps and load them directly from the Android UI). You can read more about it [here](https://developers.google.com/web/fundamentals/web-app-manifest/).

## src

This contains the JavaScript that will be processed by webpack and is the heart of the React app. Browsing this folder, you see the main App JavaScript component (***App.js***), its associated styles (***App.css***), and test suite (***App.test.js***). index.js and its styles (***index.css***) provide an entry into the App and also kicks off the ***registerServiceWorker.js***. This service worker takes care of caching and updating files for the end-user. It allows for offline capability and faster page loads after the initial visit. More on this methodology is available [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app).

As your React app grows, it is common to add a ***components/*** directory to organize components and component-related files and a views directory to organize React views and view-related files.