import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, FileInput, FormField, Heading, Paragraph, TextInput } from 'grommet';
import { storeMetadata } from '../api/nftStorage.api';
import { createUser } from '../api/smart-contracts.api';
import { changeNetwork } from '../api/web3.provider';

function SignUp() {
  const { type } = useParams();
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState(null);

  async function signup() {

    await changeNetwork();
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    const metadata = await storeMetadata({
      name: nickname,
      description: "This is a user profile json",
      image: avatar
    });

    await createUser(`https://ipfs.io/ipfs/${metadata.ipnft}/metadata.json`, type === 'poet' ? 2 : 1);

    localStorage.setItem('role', type === 'poet' ? 2 : 1)
    localStorage.setItem('username', nickname);
    localStorage.setItem('avatar', `https://ipfs.io/ipfs/${metadata.data.image.pathname.replace('//', '').replace(' ', '%20')}`);

    window.location = "/archetypes";
  }

  return (
    <Box direction="row" flex="grow" height="100vh" background="brand">
      <Box flex="grow" basis="1/2" align="center" alignSelf="center" border={{ color: 'white', side: 'right' }}>
        <Heading alignSelf="center">Welcome, {type === 'poet' ? 'poet' : 'artist'}</Heading>
        <Box pad="large" background={{ color: 'white' }} alignSelf="center" margin="xlarge">
          {type === 'poet' ?
            <Paragraph margin="medium" responsive={true} fill={true} alignSelf="center">
              <br />
              PoetGallery is collaborative, community-owned Poetry Marketplace built on the Zora Protocol.
              <br />
              <br />
              It powers the first Poetry Marketplace using NFT standards, it’s built on the Polygon Network to minimize fees and latency time, and uses Native Web3-tools such as Superfluid, Covalent and IPFS to enforce Creator’s ownership and permanence of each step of the creative process.
              <br />
              <br />
              Minting is available both on Ethereum & Polygon, and distribution is available in secondary markets such as OpenSea and Rarible, to maximize Creators visibility, and power a fully decentralized, profit-sharing network for Poets and Poetry connoisseurs.                </Paragraph>
            : <Paragraph margin="medium" responsive={true} fill={true} alignSelf="center">
              PoetGallery is collaborative, community-owned Poetry Marketplace built on the Zora Protocol.
              <br />
              <br />
              It powers the first Poetry Marketplace using NFT standards, it’s built on the Polygon Network to minimize fees and latency time, and uses Native Web3-tools such as Superfluid, Covalent and IPFS to enforce Creator’s ownership and permanence of each step of the creative process.
              <br />
              <br />
              Minting is available both on Ethereum & Polygon, and distribution is available in secondary markets such as OpenSea and Rarible, to maximize Creators visibility, and power a fully decentralized, profit-sharing network for Poets and Poetry connoisseurs.                </Paragraph>
          }
        </Box>
      </Box>
      <Box flex="grow" direction="column" basis="1/2" pad="large" alignSelf="center">
        <Heading level={3}>Tell us about you</Heading>
        <Paragraph fill={true}>This is your {type === 'poet' ? 'Poet' : 'Artist'} profile. It is free, pseudonymous, and unique. <br /> It will belong to you, and you only. Forever</Paragraph>
        <FormField label="Nickname" help="What would you like your community to call you?">
          <TextInput value={nickname} onChange={event => setNickname(event.target.value)} />
        </FormField>
        <FormField label="Avatar" help="A public image- that's how others will see you.">
          <FileInput
            name="avatar"
            multiple={false}
            onChange={event => {
              const fileList = event.target.files;
              setAvatar(fileList[0]);
            }}
          />
        </FormField>
        <Button disabled={nickname === '' || avatar == null} onClick={signup} fill="horizontal" primary color="white" reverse label="Go to creative factory" size="large" />
      </Box>
    </Box>
  );
}

export default SignUp;
