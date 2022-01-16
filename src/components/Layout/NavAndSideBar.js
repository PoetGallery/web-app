import React from 'react';
import {Avatar, Box, Header, Heading, Sidebar, Text} from 'grommet';
import MetamaskButton from '../Buttons/MetamaskButton'

function NavAndSideBar(props) {
  return (
      <Box>
        <Header align="center" alignContent="center" direction="row" pad="medium" background="brand">
          <Heading margin="small" level={2}>Poet Gallery</Heading>
          <Box gap="medium" align="center" direction="row">
            <Avatar size="medium" fit="cover" src="alex.jpg" />
            <Text>Jabyl</Text>
            <MetamaskButton />
          </Box>
        </Header>
        <Box direction="row" >
          <Sidebar basis="medium" background="brand">
            <p>test</p>
            <p>test</p>
          </Sidebar>
          <Box pad="medium" basis="full" background="white">
            {props.children}
          </Box>
        </Box>
      </Box>
  );
}

export default NavAndSideBar;
