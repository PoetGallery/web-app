import React from 'react';
import {Box, Button, Heading, Paragraph} from 'grommet';
import {Archive, Edit} from 'grommet-icons';
import MetamaskButton from '../components/Buttons/MetamaskButton';

function Home() {
  return (
      <Box direction="row" flex="grow" height="100vh">
        <Box flex="grow" basis="1/2" align="center" alignSelf="center" border={{color: "white", side: "right"}}>
          <Heading alignSelf="center">PoetGallery</Heading>
          <Box pad="large" background={{color: 'white'}} alignSelf="center" margin="xlarge">
            <Paragraph margin="medium" responsive={true} fill={true} alignSelf="center">

            PoetGallery is the first decentralized NFT Marketplace for Collective Poetry.  
<br/>
<br/>
Artists and Poets co-create a shared Poetry Collection, of which they have full ownership, and whose royalties are shared amongst all the contributors.
<br/>
<br/>
Inspired by “Le Cadavre Exquisite” - it’s a creative experiment where each participant contributes to a collective poem, writing 3 lines of poetry, and reading only the last one before theirs, till the completion of the poem.
            </Paragraph>
          </Box>
        </Box>
        <Box direction="column" basis="1/2" pad="xlarge">
          <Box basis="small">
            <MetamaskButton />
          </Box>

          <Box flex="grow" align="center" alignSelf="center" alignContent="center" gap="medium" justify="center">
            <Button href="/option" fill="horizontal" primary color="white" reverse label="Start Creating" size="large" icon={<Edit />} />
            <Button fill="horizontal" primary color="white" reverse label="Explore Marketplace" size="large" icon={<Archive />} />
          </Box>

        </Box>
      </Box>
  );
}

export default Home;
