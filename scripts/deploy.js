const hre = require("hardhat");

async function main() {
    const initialSupply = hre.ethers.parseUnits("1000", 18);
    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy(initialSupply);

    await token.waitForDeployment();
    console.log("Token deployed to:", await token.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
