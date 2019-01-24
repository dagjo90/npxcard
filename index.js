#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const options = {
  padding: 1,
  margin: 1
}

const data = {
  name : chalk.blue.bold('Dan Gjonaj'),
  pseudo : chalk.green.bold('dagjo'),
  work : chalk.blue.bold("            Junior Web Developper") + chalk.green.bold(' @ Becode Liège'),
  website : chalk.white.bold("https://dagjo90.github.io/") + chalk.green.bold("dagjo"),
  github : chalk.white.bold("https://github.com/") + chalk.green.bold('dagjo90'),
  npm : chalk.white.bold("https://www.npmjs.com/") +chalk.green.bold('~dagjo'),
  linkedin : chalk.white.bold("https://www.linkedin.com/in/") + chalk.green.bold('dan-gjonaj-224105136'),
  instagram : chalk.white.bold("https://www.instagram.com/") + chalk.green.bold('da_gjo/'),
}

 const output = "                    " + data.name + " / " + data.pseudo +
 "\n\n" + data.work +
 "\n\n" + chalk.yellow.bold("  Website : ") + data.website +
 "\n" + chalk.yellow.bold("   Github : ")  + data.github +
 "\n" + chalk.yellow.bold("      NPM : ") + data.npm +
 "\n" + chalk.yellow.bold(" Linkedin : ") + data.linkedin +
 "\n" + chalk.yellow.bold("Instagram : ") + data.instagram ;


console.log(chalk.yellow(boxen(output,options)));
