---
title: "Principles of Redux"
permalink: /principles-of-redux
excerpt: ""
last_modified_at: 2018-05-16T15:58:49-04:00
toc: true
---

Redux can be described in three fundamental principles:

## Single Source of Truth

> The state of your whole application is stored in an object tree within a single store.

The state of all the components (pieces) of your application depends on one root object tree within a single store.

This makes your application easier to look at as a whole. Debugging becomes easier too. This also makes it easy to write the state locally (or on a server) and rehydrate it later.

## State is Read Only

>  The only way to change the state is to emit an action, an object describing what happened.

***Views cannot change the state directly!***

In Redux, you dispatch actions, these actions tell a function (called reducer) to update the state. Redux docs also recommend not mutating the state. Each action instructs the reducer to replace the existing state with a new version.

## Changes are Made with Pure Functions

> To specify how the state tree is transformed by actions, you write pure reducers.

A reducer is a pure function. This function takes the current state and an action, and return a new state [Remember to return new state objects]. It DOES NOT mutate the state.

You can start with a single reducer, and as your app grows, split it off into smaller reducers that manage specific parts of the state tree. Because reducers are just functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination.