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
    program
    .command("center")
    .description(Lista.nomes.lista.center)
    .action(()=>{
        return console.log(chalk.red(`
        display:flex;
        align-items:center;
        justify-content:center;
        Gostaria de agradeçer a DevMedia Por ter Disponibilizado
        `))
    })
program.parse(process.argv);