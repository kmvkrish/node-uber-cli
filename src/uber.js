#!/usr/bin/env node

const commander = require('commander');
const pkg = require('../package.json');

commander.version(pkg.version).description(pkg.description)
.command("price", "Get Price-to-Drop estimates")
.command("time", "Get Time-to-Pickup estimates")
.parse(process.argv);
