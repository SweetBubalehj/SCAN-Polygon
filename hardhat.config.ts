// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";

// const config: HardhatUserConfig = {
//   solidity: "0.8.17",
// };

// export default config;

import "@nomicfoundation/hardhat-toolbox";

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: 'https://polygon-mainnet.g.alchemy.com/v2/1umSo1e_922UF-vN7reBqg5K9rEIyTJn',
      accounts: ['PRIVATE_KEY'],
    }
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}