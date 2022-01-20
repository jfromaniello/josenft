const hre = require('hardhat');
const sleep = (millis) => new Promise(resolve => setTimeout(resolve, millis));

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Contract = await ethers.getContractFactory("JoseNFTs");
  const contract = await Contract.deploy();
  await contract.deployed();
  console.log("Contract address:", contract.address);

  // verify fails if you call it immediately (????)
  await sleep(25000);

  await hre.run('verify:verify', {
    address: contract.address
  });

  console.log('Contract verified');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
