# webpack-lab

Lab on the basic capabilities of Webpack. Requires a
[node.js](https://nodejs.org/en/) version of `>= 4.0.0`.

## Install

Each directory is its own example project. You can install dependencies for all
of them in one fell swoop:

```sh
./install.js
```

## Usage

For every lab directory you want to test:

```sh
cd <directory>
npm start
```

This will build the project and launch a browser window. Build results will be
located in the `/build` directory.

## Results

Verify the expected results by examining the generated content in the
respective `/build` directories. Take note of the loaders and plugins involved
in each example.

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
introduced, as it is no longer necessary.

### `05-bundle-with-html`

Verify that a bundle has been created, that HTML is included in that bundle and
that there is a `<h1>` element present.

### `06-bundle-with-css-and-hmr`

Verify that by changing CSS or JavaScript, it will be immediately reflected
in the browser window through hot module replacement (HMR).

Note that this requires a different setup than previous examples, such as
`index.html` needing to be present in the directory pointed out by
`--content-base`.

### `07-bundle-with-code-splitting`

Verify that when clicking the "Add paragraph" button, the generated file
`2.2.js` (created from `paragraph.js`) is lazy loaded and a paragraph is
appended to the DOM.

Note that this requires setting the `output.publicPath` configuration setting
in order for split chunks to know which directory to load relative from.

## Exercise

Create a project of your own (e.g. by copying `/01-bundle` as a starting point)
and create a simple layout with a header, body and footer area. Each area
should be contained in separate templates and stylesheets.

Remember that your project needs a single point of entry, such as
`src/index.js`.

### Example templates

Header:

```html
<div role="banner">
  <h1>Webpack</h1>
</div>
```

Body:

```html
<div role="main">
  <p>Possibly the greatest bundler in the world.</p>
</div>
```

Footer:

```html
<div role="contentinfo">
  <p>© Jayway</p>
</div>
```
