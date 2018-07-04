#!/usr/bin/env node

import commander from 'commander';
import axios from 'axios';
import BuildUI from './ui/buildUI.js';

const buildPriceEstimates = async (pickup, drop) => {
  const response = await axios.get(`https://uber-cli-server.herokuapp.com/api/estimates/price?pickup=${pickup}&drop=${drop}`);
  const { prices } = response.data;
  const estimates = prices.map(row => {
    return {
      vehicleName: row.display_name,
      price: row.currency_code + " " + row.estimate,
      distance: row.distance,
      duration: row.duration/60,
      surge: row.surge_multiplier
    };
  });
  console.log(BuildUI.buildPriceEstimates(estimates));
};

commander.option("-p, --pickup <pickup>", "specify pickup location")
.option("-d, --drop <drop>", "specify drop location")
.parse(process.argv);

const { pickup, drop } = commander;

if (pickup == undefined) {
    console.log("Please specify pickup location.");
    console.log("uber price -p <pickup location> -d <drop location>");
} else if (drop == undefined) {
    console.log("Please specify drop location");
    console.log("uber price -p <pickup location> -d <drop location>");
} else {
    buildPriceEstimates(pickup, drop).catch(err => console.log(err.data));
}
