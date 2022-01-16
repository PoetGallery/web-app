import React, { useState, useEffect } from 'react';
import { Button } from 'grommet';
import { changeNetwork } from '../../api/web3.provider';

function MetamaskButton(props) {
  const [disabled, setDisabled] = useState(false);
  const { ethereum } = window;

  useEffect(() => {
    setDisabled(window.ethereum.selectedAddress !== undefined);
  }, []);

  async function connectMetamask(e) {
    await changeNetwork();
    await ethereum.request({ method: 'eth_requestAccounts' });
    setDisabled(window.ethereum.selectedAddress !== undefined);
  }

  return (
    <Button disabled={disabled} primary color="white" alignSelf={props.alignRight? "end": "center"} label="Connect Metamask" onClick={connectMetamask} />
  );
}

export default MetamaskButton;
