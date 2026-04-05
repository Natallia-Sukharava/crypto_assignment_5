const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("GreeterModule", (m) => {
  const greeter = m.contract("Greeter", ["N_____a"]);

  return { greeter };
});
