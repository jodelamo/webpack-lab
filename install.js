#!/usr/bin/env node

/**
 * Install dependencies in each subdirectory
 */

const readdir = require('fs').readdir;
const statSync = require('fs').statSync;
const execSync = require('child_process').execSync;

const exec = command => {
  execSync(command, { stdio: 'inherit' });
}

readdir('.', (err, files) => {
  if (err) {
    throw err;
  }

  files
    // Only include directories
    .filter(file => statSync(file).isDirectory())
    // Directory starts with two digits
    .filter(file => (/^\d{2}/).test(file))
    // Install all the things
    .forEach(dir => exec(`cd ${dir} && npm install`));
});
