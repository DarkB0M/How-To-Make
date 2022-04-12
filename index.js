#!/usr/bin/env node

const { default: chalk } = require('chalk');
const program = require('commander');
const package = require('./package.json');
const Lista = require('./lista.json')
program.version(package.version);

program
    .command('tutorial')
    .description('Adiciona um to-do')
    .action(() => {
       return console.log(Lista.nomes.lista)
    });

program.parse(process.argv);