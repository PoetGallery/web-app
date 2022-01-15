import React from 'react';
import {Button} from 'grommet';
import {useMetamask} from 'use-metamask';
import {ethers} from 'ethers';

function MetamaskButton() {
  const {connect, metaState} = useMetamask();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  function connectMetamask(e){
    if (metaState.isAvailable && !metaState.isConnected) {
      (async () => {
        try {
          await connect(ethers.providers.Web3Provider, 'any');
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }

  return (
      <Button disabled={metaState.isConnected} primary color="white" alignSelf="end" label="Connect Metamask" onClick={connectMetamask}/>
  );
}

export default MetamaskButton;
