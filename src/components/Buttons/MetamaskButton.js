import React, { useState, useEffect } from 'react';
import { Button } from 'grommet';
import { changeNetwork } from '../../api/web3.provider';
import { isRegistered, getUri } from '../../api/smart-contracts.api';
import axios from "axios";

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
    console.log(isReg);
    if (isReg) {
      const uri = await getUri(window.ethereum.selectedAddress);
      console.log(uri)
      let userDetails = await axios.get(uri);
      console.log(userDetails.data);

      localStorage.setItem('username', userDetails.data.name);
      localStorage.setItem('avatar', `https://ipfs.io/ipfs/${userDetails.data.image.replace('//', '').replace(' ', '%20')}`);

      window.location = '/archetypes';
    }
  }

  return (
    <Button disabled={disabled} primary color="white" alignSelf={props.alignRight ? "end" : "center"} label="Connect Metamask" onClick={connectMetamask} />
  );
}

export default MetamaskButton;
