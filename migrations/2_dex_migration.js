//SPDX-License-Identifier: MIT

const Dex = artifacts.require('Dex');

module.exports = function(deployer) {
  deployer.deploy(Dex);
};
