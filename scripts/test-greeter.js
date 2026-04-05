const hre = require("hardhat");

async function main() {
  const greeter = await hre.ethers.getContractAt(
    "Greeter",
    "0xC465a74cBEF7781cc7D10e5d1b0aC65AE680BB25",
  );

  const message = await greeter.greet();
  console.log("Greet:", message);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
