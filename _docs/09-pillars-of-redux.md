---
title: "Pillars of Redux"
permalink: /pillars-of-redux
excerpt: ""
last_modified_at: 2018-05-16T15:58:49-04:00
toc: true
---

Now that you're familiar with the principles of Redux, let’s dive deeper.

We're going to look at the technical implementation of those principles. Once you've got a basic of the concepts below, you'll be ready to move on to some code in next chapter.

The store holds the application state and gives access to some useful methods.

## Action

Actions are plain JavaScript objects. They usually have a payload and always have a type.

**Note:** Redux does not have explicit rules for how you should structure actions. In fact, Redux doesn’t have any strict rules other than the three principles.
{: .notice--warning}

Redux recommends that you give each action a type and that’s a good idea. I also recommend using payload to store any more information related to the action. This keeps everything consistent.

```
const action = {
  type: 'TOGGLE_TODO',
  payload: { id: 7 }
};
```

## Dispatch

This dispatches an action. It is the only way to update the application state.

```
const action = {
  type: 'TOGGLE_TODO',
  payload: { id: 9 }
};

store.dispatch(action);
```

## Reducers

Reducers are the pure functions. They know what to do with an action and its information (payload).

They take in the current state and an action, and return a new state.

Unlike Flux, Redux has a single store. Your entire applications state is in one object. That means using a single reducer function is not practical. We'd end up with a 1000 lines file that nobody would want to read.

Redux gives us the ability to split these reducers into separate files. We aren't going to dive into reducer composition in this chapter. We'll cover that in upcoming chapter.

## Store

The store is the soul of Redux. The store is the single source of truth for the application (mentioned in [previous chapter](/principles-of-redux)).

```
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
```