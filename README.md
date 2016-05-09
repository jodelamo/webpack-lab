# webpack-lab

Lab on the basic capabilities of Webpack. Requires a
[node.js](https://nodejs.org/en/) version of `>= 4.0.0`.

## Install

Install a local web server, such as `live-server`:

```sh
npm install -g live-server
```

Install all dependencies in one fell swoop:

```sh
./install.js
```

## Build

For every lab directory you want to test:

```sh
cd <directory>
npm run build
live-server
```

Build results will be located in the `/build` directory.

## Results

Verify the following expected results by running `live-server` from each
directory.

### `01-bundle`

Verify that a bundle has been created and that there is a `<h1>` element
present.

### `02-bundle-with-es2015`

Verify that a bundle has been created, that code has been transpiled into
ECMAScript 5 (i.e. `const` has been converted into `var`) and that there is
a `<h1>` element present.

### `03-bundle-with-css`

Verify that a bundle has been created, that CSS is included in that bundle and
that there is a **tomato** colored `<h1>` element present.

Note how `style-loader` and `css-loader` dramatically increase the bundle size
with boilerplate code.

### `04-bundle-with-external-css`

Verify that a bundle has been created, that a seperate CSS file has been
created alongside with it and that there is a **chocolate** colored `<h1>`
element present.

Note how `ExtractTextPlugin` removes the boilerplate code previously
introduced.

### `05-bundle-with-html`

Verify that a bundle has been created, that HTML is included in that bundle and
that there is a `<h1>` element present.
