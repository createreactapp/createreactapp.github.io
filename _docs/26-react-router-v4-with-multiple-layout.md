---
title: "React Router v4 with Multiple Layouts"
permalink: /react-router-v4-with-multiple-layout
excerpt: ""
last_modified_at: 2018-05-18T15:58:49-04:00
---

We will use React to build a very simple app with two layouts, `login` layout and `app` layout.

## Installing Crate React APP

To get React projects up and running quickly with Create React App, get a look the [previous chapter](/install-create-react-app).

## Installing React Router Dom

Open up your terminal and run:

```
npm install --save react-router-dom
```

## Creating the Layout

React router offers a render prop which will be called when the route matches:

```
// Using the render prop allows a more manual setup
<Route path="/" render={matchProps => <SomeComponent {...matchProps} />} />
```

This is useful because we can wrap a component around the `<Route />` and control where our component is rendered whilst allowing all the usual props to be `Route` get passed through:

```
// Login layout

const LoginLayout = ({ children }) => (                       
  <div>
    <p>Login Layout</p>
    {children}                                     
  </div>
);  

const LoginLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
        <Component {...matchProps} />
      </LoginLayout>
    )} />
  )
};

// App layout

const AppLayout = ({ children }) => (                       
  <div>
    <p>App Layout</p>
    {children}                                          
  </div>           
);

const AppLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <AppLayout>
        <Component {...matchProps} />
      </AppLayout>
    )} />
  )
};
```

The `rest` parameter will contain every prop passed to `LoginLayoutRoute` except component so it allows us to `forward` them on to the underlying Route component as usual.

Providing a `render` prop to the `Route` we can control where the `component` prop is rendered. In this case we wrap it in `AppLayout` component as a children. The `matchProps` are what usually get passed to a component rendered by `Route`.


## Implementing the Layout

Now, we will add routes to the app. Instead of rendering App element.

`App.js`

```
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// Login layout

const LoginLayout = ({ children }) => (                       
  <div>
    <p>Login Layout</p>
    {children}                                     
  </div>
);  

const LoginLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
        <Component {...matchProps} />
      </LoginLayout>
    )} />
  )
};

// App layout

const AppLayout = ({ children }) => (                       
  <div>
    <p>App Layout</p>
    {children}                                          
  </div>           
);

const AppLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <AppLayout>
        <Component {...matchProps} />
      </AppLayout>
    )} />
  )
};

// Pages

const LoginPage = ({  classes }) => {
  return (
    <div>
      Login Page
    </div>
  );
};

const HomePage = ({  classes }) => {
  return (
    <div>
      Home Page
    </div>
  );
};

const UserPage = ({  classes }) => {
  return (
    <div>
      User Page
    </div>
  );
};

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/signin" />
      </Route>

      <LoginLayoutRoute path="/signin" component={LoginPage} />
      
      <AppLayoutRoute path="/homes" component={HomePage} />

      <AppLayoutRoute path="/users" component={UserPage} />
    </Switch>
  </BrowserRouter>
);
```
