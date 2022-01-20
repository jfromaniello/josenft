I am learning about WEb3 and this is just an example NFT contract.

The contract is in [contracts/JoseNFTs.sol](contracts/JoseNFTs.sol).

In order to deploy you need to create a `.env` file with the following variables:

```
# This is the private key of the owner of the contract.
# You can get this from your ethereum wallet.
PRIVATE_KEY=

# Create a free project on alchemy and get the key:
# https://www.alchemyapi.io/
ALCHEMY_API_KEY=


# In order to verify the smart contract you need an ehterscan api key
ETHERSCAN_API_KEY=
```


Then, deploy the contract as follow:

```
npm deploy
```

By default it will deploy to the rinkby network.
