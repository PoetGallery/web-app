import React from 'react';
import {Avatar, Box, Header, Image, Sidebar, Text} from 'grommet';
import MetamaskButton from '../Buttons/MetamaskButton';

function NavAndSideBar(props) {
  return (
      <Box>
        <Header align="center" alignContent="center" direction="row" pad="medium" background="brand">
          <Box height="xxsmall" width="xxsmall">
            <Image
                fit="contain"
                src="/logo.png"
            />
          </Box>

          <Box gap="medium" align="center" direction="row">
            <Avatar size="medium" fit="cover" src={localStorage.getItem("avatar")}/>
            <Text>{localStorage.getItem("username")}</Text>
            <MetamaskButton/>
          </Box>
        </Header>
        <Box direction="row">
          {/*<Sidebar basis="medium" background="brand">*/}
          {/*  <p>test</p>*/}
          {/*  <p>test</p>*/}
          {/*</Sidebar>*/}
          <Box basis="full" background="white">
            {props.children}
          </Box>
        </Box>
      </Box>
  );
}

export default NavAndSideBar;
