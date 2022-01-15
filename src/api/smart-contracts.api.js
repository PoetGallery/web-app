import { Web3ContractProvider } from './web3.provider';
import ContractABI from './abis/ContractABI.json';

// TODO: replace with correct function calls
export const smartContractCall = async (
    contractAddress,
    param
) => {
  const contract = await Web3ContractProvider(contractAddress, ContractABI);

  const createTx = await contract.functionName(
      param
  );

  const result = await createTx.wait();
  const { events } = result;
  const event = events.find((e) => e.event === 'EventName');

  if (event) {
    return 'Success'
  } else {
    return 'Fail'
  }
};


// TODO: replace with correct function calls
export const queryContract = async (contractAddress) => {
  const contract = await Web3ContractProvider(contractAddress, ContractABI);
  const result = await contract.queryFunctionName();
  return result;
};
