---
title: "Unidirectional Data Flow Architecture"
permalink: /unidirectional-data-flow-architecture
excerpt: ""
last_modified_at: 2018-05-16T15:58:49-04:00
---

Redux was inspired by [Flux](http://facebook.github.io/flux) and [Elm](http://elm-lang.org).

Facebook was facing problems with the MVC structure. The Model and View relationships can get tricky. This is especially true as your application starts to scale. You could be dealing with problems such as infinite loops.

That’s when Facebook introduced Flux. A unidirectional way of updating Views and handling user actions.

You can learn more about Flux and some of the challenges Facebook faced in this [video](https://www.youtube.com/watch?v=nYkdrAPrdcw&feature=youtu.be&list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&t=621).

Redux uses this concept of Unidirectional Data Flow:

* The application has a central / root state.
* A state change triggers View updates.
* Only special functions can change the state.
* A user interaction triggers these special, state changing functions.
* Only one change takes place at a time.

This means that the central state cannot trigger any further actions. Only a user input can trigger another action. This makes state much more manageable. It also makes it difficult to introduce infinite loops.

**Note:** We'll be talking more about async operations and action dispatchers later. For now, let’s assume that only user actions can dispatch actions.
{: .notice--warning}

Don't worry if you didn’t understand that in the first go. We’ll dive into these concepts further through this chepter.

All you need to remember is that a central source of truth (state) makes everything easier.
