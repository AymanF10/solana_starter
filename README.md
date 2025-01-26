## Overview
This project is designed to facilitate the creation, minting, and management of tokens and NFTs on the Solana blockchain. Utilizing TypeScript, the project leverages the Solana Web3.js library and Metaplex's UMI framework to interact with the blockchain. The primary functionalities include minting SPL tokens, transferring tokens, creating and minting NFTs, and managing metadata.

## Table of Contents
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
  - [Token Minting (`spl_mint.ts`)](#token-minting-spl_mintts)
  - [Token Transfer (`spl_transfer.ts`)](#token-transfer-spl_transferts)
  - [Metadata Creation (`spl_metadata.ts`)](#metadata-creation-spl_metadatats)
  - [Token Initialization (`spl_init.ts`)](#token-initialization-spl_initts)
  - [NFT Minting (`nft_mint.ts`)](#nft-minting-nft_mintts)
  - [NFT Metadata Upload (`nft_metadata.ts`)](#nft-metadata-upload-nft_metadatats)
  - [Image Upload for NFTs (`nft_image.ts`)](#image-upload-for-nfts-nft_imagets)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/solana-token-nft-management.git
   cd solana-token-nft-management
   ```

2. Install the required packages:
   ```bash
   npm install --force
   ```

3. Ensure your wallet private key is added to the local environment. Update your `.gitignore` to prevent wallet files from being tracked.

4. Initialize TypeScript configuration:
   ```bash
   npx tsc --init
   ```

## Project Structure
The project consists of several TypeScript files, each serving a specific purpose:

| File                | Description                                                   |
|---------------------|---------------------------------------------------------------|
| `spl_mint.ts`       | Mints SPL tokens to an associated token account (ATA).       |
| `spl_transfer.ts`   | Transfers SPL tokens from one account to another.            |
| `spl_metadata.ts`   | Creates metadata for a token using Metaplex's UMI framework. |
| `spl_init.ts`       | Initializes a new SPL token mint.                            |
| `nft_mint.ts`       | Mints an NFT with specified metadata.                        |
| `nft_metadata.ts`   | Uploads NFT metadata to a server and retrieves its URI.     |
| `nft_image.ts`      | Uploads an image file for use in an NFT.                    |

## Scripts

### Token Minting (`spl_mint.ts`)
This script mints a specified amount of SPL tokens to an associated token account (ATA).

#### Key Functions:
- **getOrCreateAssociatedTokenAccount**: Ensures that an ATA exists for the wallet.
- **mintTo**: Mints tokens to the specified ATA.

### Token Transfer (`spl_transfer.ts`)
This script transfers SPL tokens from one wallet to another.

#### Key Functions:
- **getOrCreateAssociatedTokenAccount**: Retrieves or creates ATAs for both sender and recipient.
- **transfer**: Executes the transfer of tokens.

### Metadata Creation (`spl_metadata.ts`)
This script creates metadata for a token using Metaplex's UMI framework.

#### Key Functions:
- **createMetadataAccountV3**: Creates a new metadata account with specified attributes.

### Token Initialization (`spl_init.ts`)
This script initializes a new SPL token mint on the Solana blockchain.

#### Key Functions:
- **createMint**: Creates a new mint with specified decimals.

### NFT Minting (`nft_mint.ts`)
This script mints an NFT with specified metadata including name, symbol, and URI.

#### Key Functions:
- **createNft**: Mints an NFT with the provided attributes.

### NFT Metadata Upload (`nft_metadata.ts`)
This script uploads metadata for an NFT to a server and retrieves its URI.

#### Key Functions:
- **uploadJson**: Uploads JSON metadata and returns its URI.

### Image Upload for NFTs (`nft_image.ts`)
This script uploads an image file for use in an NFT.

#### Key Functions:
- **upload**: Uploads image files and retrieves their URIs.

## Usage
To run any TypeScript file, use:
```bash
npm run {script_name}
```
For example:
```bash
npm run spl_mint
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
