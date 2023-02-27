const { ethers } = require("hardhat")


async function main() {

  // This function will first deploy then call the functions of the contract

  const SampleContractFactory = await ethers.getContractFactory("SampleContract")

  console.log("Deploying contract...")
  const sampleContract = await SampleContractFactory.deploy()
  await sampleContract.deployed()

  console.log(`Deployed contract to: ${sampleContract.address}`)
  // The contract is deployed to haradhat localhost

  const currentValue = await sampleContract.readNumber()
  console.log(`Current value of your favourite number is: ${currentValue}`)

  //Updating the current value of favourite number

  const functionResponse = await sampleContract.writeNumber(19946)
  await functionResponse.wait(4) // wait for 4 block confirmations
  const updatedValue = await sampleContract.readNumber()

  console.log(`Updated value of your favourite number is: ${updatedValue}`)

}

// calling the main function

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })