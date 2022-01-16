import React from 'react';
import {Avatar, Box, Text} from 'grommet';

function User(props) {
  return (
      <Box margin="small" align="center" direction="row">
        <Avatar margin="small" size="medium" fit="cover" src={props.avatar}/>
        <Text>{props.name}</Text>
      </Box>
  );
}

export default User;
