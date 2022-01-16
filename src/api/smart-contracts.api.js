import { Web3ContractProvider } from './web3.provider';
import PoetGalleryUserAbi from './abis/PoetGalleryUser.json';
import RoomFactoryAbi from './abis/RoomFactory.json';
import RoomAbi from './abis/Room.json';

export const createUser = async (
  uri,
  role
) => {
  const contract = await Web3ContractProvider(process.env.REACT_APP_POET_GALLERY_USER_ADDRESS, PoetGalleryUserAbi);

  const createTx = await contract.createUser(
    uri,
    role
  );

  const result = await createTx.wait();
  const { events } = result;
  const event = events.find((e) => e.event === 'UserCreated');

  if (event) {
    return;
  } else {
    throw Error('Something went wrong!');
  }
};


export const isRegistered = async (userAddress) => {
  const contract = await Web3ContractProvider(process.env.REACT_APP_POET_GALLERY_USER_ADDRESS, PoetGalleryUserAbi);
  const result = await contract.isUser(userAddress);
  return result;
};

export const getUri = async (userAddress) => {
  const contract = await Web3ContractProvider(process.env.REACT_APP_POET_GALLERY_USER_ADDRESS, PoetGalleryUserAbi);
  const result = await contract.memberToUri(userAddress);
  return result;
};
export const createRoom = async (archetype, totalParticipants) => {
  const contract = await Web3ContractProvider(process.env.REACT_APP_ROOM_FACTORY_ADDRESS, RoomFactoryAbi);

  const createTx = await contract.deployRoom(
    archetype,
    totalParticipants
  );

  const result = await createTx.wait();
  const { events } = result;
  const event = events.find((e) => e.event === 'RoomCreated');

  if (event) {
    return
  } else {
    throw Error('Something went wrong!');
  }

}

export const getRooms = async () => {
  const contract = await Web3ContractProvider(process.env.REACT_APP_ROOM_FACTORY_ADDRESS, RoomFactoryAbi);
  const rooms = await contract.getAllRooms();
  return rooms;
};

export const getRoomTotalParticipantsAmount = async (roomAddress) => {
  const contract = await Web3ContractProvider(roomAddress, RoomAbi);
  return (await contract.totalParticipants()).toString();
}

export const getRoomCurrentParticipantsAmount = async (roomAddress) => {
  const contract = await Web3ContractProvider(roomAddress, RoomAbi);
  return (await contract.currentParticipantsAmount()).toString();

}

export const getRoomArchetype = async (roomAddress) => {
  const contract = await Web3ContractProvider(roomAddress, RoomAbi);
  return (await contract.archetype()).toString();

}