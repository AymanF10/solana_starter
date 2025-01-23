import wallet from "../cluster1/wallet/Turbin3-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createGenericFile, createSignerFromKeypair, signerIdentity } from "@metaplex-foundation/umi"
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys"

// Create a devnet connection
const umi = createUmi('https://api.devnet.solana.com');

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(irysUploader());
umi.use(signerIdentity(signer));

(async () => {
    try {
        // Follow this JSON structure
        // https://docs.metaplex.com/programs/token-metadata/changelog/v1.0#json-structure

        const image = " https://devnet.irys.xyz/Esi437bcWEWaQasskuyY6q2zHEzuF8SN3WDpcAeoY5mY"; //URL of the image created in nft_image
        const metadata = {
        name: "Aymans Rug",
        symbol: "AYF",
        description: "Firt rug of turbin3",
        image,
        attributes: [
            {trait_type: '?', value: '?'}
           ],
        properties: {
        files: [
                {
                       type: "image/jpg",
                        uri: image
                  },
                ]
            },
             creators: []
         };
        const myUri = await umi.uploader.uploadJson(metadata);
        console.log("Your metadata URI: ", myUri);
    }
    catch(error) {
        console.log("Oops.. Something went wrong", error);
    }
})();