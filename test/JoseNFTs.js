const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  it("sample", async function () {
    const [ owner, { address: other } ] = await ethers.getSigners();

    const JoseNFTs = await ethers.getContractFactory("JoseNFTs");

    const hardhatToken = await JoseNFTs.deploy();

    await expect(hardhatToken.mint(other))
      .to.emit(hardhatToken, 'Transfer')
      .withArgs(ethers.constants.AddressZero, other, 1);

  });
});
