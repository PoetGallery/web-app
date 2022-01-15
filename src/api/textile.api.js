import { NFTStorage, File } from 'nft.storage'

const client = new NFTStorage({ token: process.env.REACT_APP_NFT_STORAGE_KEY })


// image should be byte array 
export async function storeMetadata(json, imageContent) {
  json.image = new File(imageContent, 'image.jpg', { type: 'image/jpg' });
  const metadata = await client.store({
    name: 'Pinpie',
    description: 'Pin is not delicious beef!',
    image: new File([/* data */], 'pinpie.jpg', { type: 'image/jpg' })
  });
  return metadata.url;
}