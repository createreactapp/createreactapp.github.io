---
title: "Adding a CSS Preprocessor (Sass, Less etc.)"
permalink: /add-a-css-preprocessor
excerpt: ""
last_modified_at: 2018-05-17T15:58:49-04:00
---

Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition. You can, however, integrate a CSS preprocessor if you find it valuable. In this walkthrough, we will be using Sass, but you can also use Less, or another alternative.

First, let’s install the command-line interface for Sass:

```
npm install --save node-sass-chokidar
```

Then in `package.json`, add the following lines to scripts:

```
 "scripts": {
+   "build-css": "node-sass-chokidar src/ -o src/",
+   "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
```


**Note:** To use a different preprocessor, replace build-css and watch-css commands according to your preprocessor’s documentation.
{: .notice--warning}

Now you can rename `src/App.css` to `src/App.scss` and run `npm run watch-css`. The watcher will find every Sass file in `src` subdirectories, and create a corresponding CSS file next to it, in our case overwriting `src/App.css`. Since `src/App.js` still imports `src/App.css`, the styles become a part of your application. You can now edit `src/App.scss`, and `src/App.css` will be regenerated.

To share variables between Sass files, you can use Sass imports. For example, `src/App.scss` and other component style files could include `@import "./shared.scss";` with variable definitions.

To enable importing files without using relative paths, you can add the `--include-path` option to the command in `package.json`.

```
"build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
"watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
```

This will allow you to do imports like:

```
@import 'styles/_colors.scss'; // assuming a styles directory under src/
@import 'nprogress/nprogress'; // importing a css file from the nprogress node module
```

At this point you might want to remove all CSS files from the source control, and add `src/**/*.css` to your `.gitignore` file. It is generally a good practice to keep the build products outside of the source control.

As a final step, you may find it convenient to run `watch-css` automatically with `npm start`, and run `build-css` as a part of npm run build. You can use the `&&` operator to execute two scripts sequentially. However, there is no cross-platform way to run two scripts in parallel, so we will install a package for this:

```
npm install --save npm-run-all
```

Then we can change `start` and `build` scripts to include the CSS preprocessor commands:

```
 "scripts": {
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
-   "start": "react-scripts start",
-   "build": "react-scripts build",
+   "start-js": "react-scripts start",
+   "start": "npm-run-all -p watch-css start-js",
+   "build-js": "react-scripts build",
+   "build": "npm-run-all build-css build-js",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
   }
```

Now running `npm start` and `npm run build` also builds Sass files.

***Why node-sass-chokidar?***

`node-sass` has been reported as having the following issues:

* `node-sass --watch` has been reported to have performance issues in certain conditions when used in a virtual machine or with docker.
* Infinite styles compiling [1939](https://github.com/facebook/create-react-app/issues/1939)
* `node-sass` has been reported as having issues with detecting new files in a directory [1891](https://github.com/sass/node-sass/issues/1891)

`node-sass-chokidar` is used here as it addresses these issues.