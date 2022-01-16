import React, { useState, useEffect } from 'react';
import { Button } from 'grommet';
import { changeNetwork } from '../../api/web3.provider';
import axios from "axios";
import { isRegistered, getUri } from '../../api/smart-contracts.api';

function MetamaskButton(props) {
  const [disabled, setDisabled] = useState(false);
  const { ethereum } = window;

  useEffect(() => {
    setDisabled(window.ethereum.selectedAddress != undefined);
  }, []);

  async function connectMetamask(e) {
    localStorage.clear();
    await changeNetwork();
    await ethereum.request({ method: 'eth_requestAccounts' });
    setDisabled(window.ethereum.selectedAddress != undefined);
    const isReg = await isRegistered(window.ethereum.selectedAddress);
    if (isReg) {
      const uri = await getUri(window.ethereum.selectedAddress);
      let userDetails = await axios.get(uri);

      localStorage.setItem('username', userDetails.data.name);
      localStorage.setItem('avatar', `https://ipfs.io/ipfs/${userDetails.data.image.replace('//', '').replace(' ', '%20').replace('ipfs:', '')}`);

      window.location = '/archetypes';
    }
  }

  return (
    <Button disabled={disabled} primary color="white" alignSelf={props.alignRight ? "end" : "center"} label="Connect Metamask" onClick={connectMetamask} />
  );
}

export default MetamaskButton;
