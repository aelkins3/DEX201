//SPDX-License-Identifier: MIT

const Dex = artifacts.require('Dex');
const Link = artifacts.require('Link');
const truffleAssert = require('truffle-assertions');

contract('Dex', (accounts) => {
  let linkInstance;
  let dexInstance;

  //set contracts instances
  before(async function() {
    // Deploy tokens to testnet
    linkInstance = await Link.new();
    dexInstance = await Dex.new();
  });

  describe('Dex', () => {
    it('should only be possible for owner to add tokens', async () => {
      //   let dex = await Dex.deployed();
      //   let link = await Link.deployed();
      let dex = dexInstance;
      let link = linkInstance;

      await truffleAssert.passes(
        dex.addToken(web3.utils.fromUtf8('LINK'), link.address, {
          from: accounts[0],
        })
      );
      //   await truffleAssert.passes(
      //     dex.addToken(web3.utils.fromUtf8('LINK'), link.address, {
      //       from: accounts[1],
      //     })
      //   );
    });
  });
});
