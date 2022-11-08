// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const {
    BUY_TOKEN,
    ADMIN_ADDRESS
} = process.env;


async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    const Crowdsale = await hre.ethers.getContractFactory("Crowdsale");
    const crowdsale = await Crowdsale.deploy(BUY_TOKEN, ADMIN_ADDRESS);

    await crowdsale.deployed();

    setTimeout(() => {}, 60000);

    await verifyCrowdsale(crowdsale, BUY_TOKEN, ADMIN_ADDRESS);

    console.log("Crowdsale deployed to:", crowdsale.address);
}

async function verifyCrowdsale(crowdsale, TOKEN, ADMIN) {
    await hre.run("verify:verify", {
        address: crowdsale.address,
        constructorArguments: [
            TOKEN,
            ADMIN
        ]
    })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
