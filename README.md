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

## Verify results

Verify the following in each lab build directory:

### `01-bundle`

Verify that a bundle has been created.

### `02-bundle-with-es2015`

Verify that a bundle has been created and that code has been transpiled into
ECMAScript 5 (i.e. `const` has been converted into `var`).

### `03-bundle-with-css`

Verify that a bundle has been created and that CSS is included in that bundle.
Note how `style-loader` and `css-loader` dramatically increase the bundle size
with various boilerplate code.

### `04-bundle-with-external-css`

Verify that a bundle has been created and that a seperate CSS file has been
created alongside with it. Note how `ExtractTextPlugin` removes the boilerplate
code previously introduced.

### `05-bundle-with-html`

Verify that a bundle has been created and that HTML is included in that bundle.
