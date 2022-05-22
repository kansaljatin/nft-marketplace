require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const fs = require("fs");

const polygonMumbaiURL = process.env.ALCHEMY_POLYGON_MUMBAI_RPC_URL;
const privateKey = process.env.METAMASK_PRIVATE_KEY;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: polygonMumbaiURL,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
