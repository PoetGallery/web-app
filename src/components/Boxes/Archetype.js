import React from 'react';
import {Box, Image, Text} from 'grommet';

function Archetype(props) {
  return (
      <Box>
        <Box margin="medium" round="medium" border={{color: 'brand', size: 'small', side: 'all'}} align="center" background={props.selected?"brand":"white"}>
          <Box margin="medium" round="medium" width="small" height="medium" background="#ecf0f1" border={{color: 'brand', size: 'small', side: 'all'}}>
            <Image fit="contain" src={props.image} onClick={props.onClick} key={props.id}/>
          </Box>
          <Box margin="small">
            <Text>{props.name}</Text>
          </Box>
        </Box>
      </Box>
  );
}

export default Archetype;
