---
title: "Organize Folder Structure"
permalink: /organize-folder-structure
excerpt: ""
last_modified_at: 2018-05-16T15:58:49-04:00
---

There are numerous ways to organize a react app using redux and you can spend a lot of time reading about them. We want to introduce you to one, the one we use. It's only one way and we've found it to work over time and stay simple to understand and scalable.

```
create-react-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── assets
    └── config
    └── constants
    └── containers
    └── components
    └── actions
    └── reducers
    └── routers
    ├── views
    │   └── layouts
    └── utils
    └── index.js
    └── registerServiceWorker.js
```

Inside of the `src` folder is where all of our app logic will be going. Let’s cover each one.

## assets

CSS, JavaScript, images, fonts, and so on – are all in `assets`.

## config

configureStore.js, configureTheme, and so on – all configure files are in `config`.

## constants

All constants files and variables are in 'constants'.

## containers

All container components (or known as stateful component) are in 'containers'.

## components

All presentational component (or known as functional stateless component) are in 'components'.

## actions

## reducers

## routers:

## views

## utils

## index.js
