import { Web3ContractProvider } from './web3.provider';
import PoetGalleryUserAbi from './abis/PoetGalleryUser.json';
import RoomFactoryAbi from './abis/RoomFactory.json';
import RoomAbi from './abis/Room.json';
import PoemFactoryAbi from './abis/PoemFactory.json';

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


export const getPoem = async (roomAddress) => {

  const contract = await Web3ContractProvider(process.env.REACT_APP_POEM_FACTORY_ADDRESS, PoemFactoryAbi);
  const poemID = (await contract.poemsPerRoom(roomAddress)).toString();
  console.log(poemID);
  const poem = await contract.poems(poemID)
  console.log(poem);

  return {
    uri: poem[0],
    archetype: poem[1],
    isFinished: poem[2]
  }
}
export const startPoem = async (roomAddress, uri) => {
  const contract = await Web3ContractProvider(roomAddress, RoomAbi);

  const createTx = await contract.startPoem(
    uri
  );

  const result = await createTx.wait();
}


export const continuePoem = async (roomAddress, uri) => {
  const contract = await Web3ContractProvider(roomAddress, RoomAbi);

  const createTx = await contract.continuePoem(
    uri
  );

  const result = await createTx.wait();
}



export const getRooms = async () => {
  const contract = await Web3ContractProvider(process.env.REACT_APP_ROOM_FACTORY_ADDRESS, RoomFactoryAbi);
  const rooms = await contract.getAllRooms();
  return rooms;
};


export const getUri = async (address) => {
  const contract = await Web3ContractProvider(process.env.REACT_APP_POET_GALLERY_USER_ADDRESS, PoetGalleryUserAbi);
  const uri = await contract.memberToUri(address);
  return uri;
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


export const joinRoom = async (roomAddress) => {
  const contract = await Web3ContractProvider(roomAddress, RoomAbi);

  const createTx = await contract.join();

  const result = await createTx.wait();
  const { events } = result;
  const event = events.find((e) => e.event === 'ParticipantJoined');

  if (event) {
    return
  } else {
    throw Error('Something went wrong!');
  }
}