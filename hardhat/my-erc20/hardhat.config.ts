import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

function mnemonic() {
  return process.env.PRIVATE_KEY_ADMIN;
}

const config: HardhatUserConfig = {
  solidity: "0.8.18",
    networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [mnemonic()]
    }
  }
};

export default config;
