import wallet from "../cluster1/wallet/Turbin3-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { 
    createMetadataAccountV3, 
    CreateMetadataAccountV3InstructionAccounts, 
    CreateMetadataAccountV3InstructionArgs,
    DataV2Args,
    getCreateMetadataAccountV3InstructionDataSerializer,
    //MPL_TOKEN_METADATA_PROGRAM_ID

} from "@metaplex-foundation/mpl-token-metadata";
import { createSignerFromKeypair, signerIdentity, publicKey } from "@metaplex-foundation/umi";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { PublicKey } from "@solana/web3.js";
//import { buffer } from "stream/consumers";

// Define our Mint address
const mint = publicKey("D6w5crAqa7PSbYg85iLFuY3yLNYiYh8q27LJhPunFNzv")

// Create a UMI connection
const umi = createUmi('https://api.devnet.solana.com');
const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

(async () => {
    try {
        // Start here
        let accounts: CreateMetadataAccountV3InstructionAccounts = {
        mint,
        mintAuthority: signer
        };

         let data: DataV2Args = {
            name: "Ayman",
            symbol: "AYF",
            uri: "https://aymanf.net",
            sellerFeeBasisPoints: 10,
            creators: null,
            collection: null,
            uses: null
         }
         let args: CreateMetadataAccountV3InstructionArgs = {
            data,
            isMutable: true,

            collectionDetails: null
          }

        let tx = createMetadataAccountV3(
        umi,
            {

                ...accounts,
                ...args
            }
            

        )
         let result = await tx.sendAndConfirm(umi);
        console.log(bs58.encode(result.signature));
    }
    catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }

})();