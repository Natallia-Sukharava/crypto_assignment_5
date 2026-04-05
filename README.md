# Hardhat Greeter Project

This project is a simple Hardhat setup for deploying and interacting with a smart contract on the Sepolia testnet.

## Description

The Greeter contract stores a name provided during deployment and returns a greeting message using the greet() function.

## Setup

1. Install dependencies:
   npm install

2. Create a .env file:
   SEPOLIA_RPC_URL=your_rpc_url
   PRIVATE_KEY=your_private_key

## Compile

npx hardhat compile

## Deploy

npx hardhat ignition deploy ignition/modules/Greeter.js --network sepolia

## Interaction

Run script:
npx hardhat run scripts/test-greeter.js --network sepolia

## Result

The greet() function returns:
Hello, name
