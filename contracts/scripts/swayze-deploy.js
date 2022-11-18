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
    const Swayze = await hre.ethers.getContractFactory("Swayze");
    const swayze = await Swayze.deploy(BUY_TOKEN, ADMIN_ADDRESS);

    await swayze.deployed();

    setTimeout(() => {}, 60000);

    await verifySwayze(swayze, BUY_TOKEN, ADMIN_ADDRESS);

    console.log("Swayze deployed to:", swayze.address);
}

async function verifySwayze(swayze, TOKEN, ADMIN) {
    await hre.run("verify:verify", {
        address: swayze.address,
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
