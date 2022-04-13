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
    .action(() => {
        return console.log(chalk.red(`
        display:flex;
        align-items:center;
        justify-content:center;
        Gostaria de agradeçer a DevMedia Por ter Disponibilizado
        `))
    })
program
    .command("node")
    .description(Lista.nomes.lista.node)
    .action(() => {
        return console.log(chalk.green(`
        Runtime For JavaScript run at V8 Engine (Not run TypeScript Native)
        `))
    })
program
    .command("NPM")
    .description(Lista.nomes.lista.NPM)
    .action(() => {
        console.log(chalk.blue(` 
 Npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components:

the website
the Command Line Interface (CLI)
the registry
Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.

The CLI runs from a terminal, and is how most developers interact with npm.

The registry is a large public database of JavaScript software and the meta-information surrounding it.
        `))
        console.log(chalk.red(`
        Commands: npm install <your package> 
          npm link 
          npm init
          npm init -y (run npm init automaticy)
          npm version
          `))
    })
program
    .command("yarn")
    .description(Lista.nomes.lista.Yarn)
    .action(() => {
        console.log(chalk.blue(`
        Yarn is a package manager for your code. It allows you to use and share code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don't ever have to worry.

        Yarn allows you to use other developers' solutions to different problems, making it easier for you to develop your software. If you have problems, you can report issues or contribute back on GitHub, and when the problem is fixed, you can use Yarn to keep it all up to date.

        Code is shared through something called a package. A package contains all the code being shared as well as a package.json file (called a manifest) which describes the package.
        `))
    })
    
program.parse(process.argv);