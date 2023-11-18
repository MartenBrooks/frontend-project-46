#!/usr/bin/env node
import { program } from 'commander';
import { getDiff } from './getdiff.js';

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format <type>', 'output format')
    .arguments('<first> <second>')
    .action((first, second) => console.log(getDiff(first, second)));
program.parse();
