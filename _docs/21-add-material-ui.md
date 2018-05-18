---
title: "Adding Material UI"
permalink: /add-material-ui
excerpt: ""
last_modified_at: 2018-05-18T15:58:49-04:00
---

You don’t have to use [Material UI](https://material-ui.com/getting-started/installation) together with React but it is a popular library for integrating Material UI with React apps. If you need it, you can integrate it with Create React App by following these steps:

Install Material UI npm:

```
npm install --save @material-ui/core
```

Import `MuiThemeProvider` component in `src/index.js`, enclose the app div in `MuiThemeProvider` component:

```
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider } from '@material-ui/core/styles';

import { createMuiTheme } from '@material-ui/core/styles';

import blue from '@material-ui/core/colors/lightBlue';

import App from './App';

const theme = () => {
  return(createMuiTheme({
    palette: {
      primary: {
        ...blue,
        '500': '#01579B'
      }
    }
  }));
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
, document.getElementById('root'))

registerServiceWorker();
```

Import required Material UI components within `src/App.js` file or your custom component files:

```
import Button from '@material-ui/core/Button';
```

Now you are ready to use the imported Material UI components within your component hierarchy defined in the render method. Here is the [component demos](https://material-ui.com/demos/app-bar) using Material UI.
