#!/usr/bin/env node

// polyfill for es6+ for typescript
import chalk from 'chalk';
import * as clear from 'clear';
import * as program from 'commander';
import 'core-js';
import * as figlet from 'figlet';
import { defaultCommand } from './commnads/defaultCommand';

clear();

program
  .version('0.0.1')
  .description('WM Baseline CLI');

console.log(
  chalk.green(
    figlet.textSync('WM-CLI', { horizontalLayout: 'full' }),
  ),
);
console.log(
  chalk.blue(
    'Welcome to the baseline CLI. Use this tool to generate React ' +
    'projects and dependencies which follow the baseline standards.',
  ),
);

// if invalid aliases are used show help
if (process.argv.slice(2).length && !process.argv.slice(2).some(arg => /[arudl]/.test(arg))) {
  program.outputHelp();
  process.exit();
}

// if no arguments show defaults
if (!process.argv.slice(2).length) {
  defaultCommand();
}

program.parse(process.argv);
