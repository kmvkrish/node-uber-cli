#!/usr/bin/env node

import commander from 'commander';
import axios from 'axios';
import BuildUI from './ui/buildUI.js';


const buildTimeEstimates = async (pickup) => {
  const response = await axios.get(`https://uber-cli-server.herokuapp.com/api/estimates/time?address=${pickup}`);
  const { times } = response.data;
  const estimates = times.map(row => {
    return {
      vehicleName: row["display_name"],
      duration: (row["estimate"]/60)
    }
  });
  console.log(BuildUI.buildTimeEstimates(estimates));
};

commander.description("Get time estimates for pickup location.").arguments("<pickup>").action((pickup) => {
    buildTimeEstimates(pickup).catch(err => console.log(err.data));
}).parse(process.argv);
