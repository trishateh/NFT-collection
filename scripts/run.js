
const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    let txn = await nftContract.makeAnEpicNFT()
    await txn.wait()
    txn = await nftContract.makeAnEpicNFT()
    await txn.wait()

    let totalNftsMinted = await nftContract.getTotalNFTsMinted();
    console.log("Number of NFTs:", parseInt(totalNftsMinted));
    
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();