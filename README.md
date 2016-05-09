# webpack-lab

Lab on the basic capabilities of Webpack.

## Usage

Install a local web server, such as `live-server`:

```sh
npm install -g live-server
```

Or use one that's shipped with most UNIX-like systems:

```sh
python -m SimpleHTTPServer 8080
```

For every lab directory you want to test:

```sh
cd <directory>
npm install
npm run build
live-server
```

If you went with `live-server`, you can substitute the last two commands with:

```sh
npm start
```

Build results will be located in the `/build` directory.

## Results

Verify the following in each lab build directory:

### `01-bundle`

Verify that a bundle has been created.

### `02-bundle-with-es2015`

Verify that a bundle has been created and that code has been transpiled into
ECMAScript 5 (i.e. `const` has been converted into `var`).

### `03-bundle-with-css`

Verify that a bundle has been created and that CSS is included in that bundle.

Note how this quite dramatically increased the bundle size with various
boilerplate code.
