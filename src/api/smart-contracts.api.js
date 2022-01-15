import { Web3ContractProvider } from './web3.provider';
import PoetGalleryUserAbi from './abis/PoetGalleryUser.json';

export const createUser = async (
  uri,
  role
) => {
  const contract = await Web3ContractProvider(provess.env.REACT_APP_POET_GALLERY_USER_ADDRESS, PoetGalleryUserAbi);

  const createTx = await contract.createUser(
    uri,
    role
  );

  const result = await createTx.wait();
  const { events } = result;
  const event = events.find((e) => e.event === 'UserCreated');

  if (event) {
    return
  } else {
    throw Error('Something went wrong!');
  }
};


export const isRegistered = async (userAddress) => {
  const contract = await Web3ContractProvider(provess.env.REACT_APP_POET_GALLERY_USER_ADDRESS, PoetGalleryUserAbi);
  const result = await contract.isUser(userAddress);
  return result;
};
