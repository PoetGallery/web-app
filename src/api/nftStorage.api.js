import { NFTStorage, File } from 'nft.storage'

const client = new NFTStorage({ token: process.env.REACT_APP_NFT_STORAGE_KEY })

export async function storeMetadata(json) {
  const metadata = await client.store(json);
  return `https://ipfs.io/ipfs/${metadata.ipnft}/metadata.json`;
}