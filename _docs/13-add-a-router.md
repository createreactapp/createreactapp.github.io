---
title: "Adding a Router"
permalink: /add-a-router
excerpt: ""
last_modified_at: 2018-05-17T15:58:49-04:00
---

We will use React to build a very simple app.

## Installing Crate React APP

To get React projects up and running quickly with Create React App, get a look the [previous chapter](/install-create-react-app).

## Installing React Router

Open up your terminal and run:

```
npm install --save react-router-dom
```

Now, we will add routes to the app. Instead of rendering App element. Add more files in `src` folder and named as `Home.js` and `Login.js`.

`App.js`

```
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
           <h2>Welcome to React Router</h2>
           <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/Login'}>Login</Link></li>
           </ul>
           <hr />
           
           <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Login' component={Login} />
           </Switch>
        </div>
     </Router>
    );
  }
}

export default App;
```

`Home.js`

```
import React, { Component } from 'react';

class Home extends Component {
   render() {
      return (
         <div>
            <h2>Home</h2>
         </div>
      );
   }
}

export default Home;
```

`Login.js`

```
import React, { Component } from 'react';

class Login extends Component {
   render() {
      return (
         <div>
            <h2>Login</h2>
         </div>
      );
   }
}

export default Login;
```