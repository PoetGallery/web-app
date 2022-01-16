import React from 'react';
import {Box, Image, Text} from 'grommet';

function Archetype(props) {
  return (
      <Box >
        <Box height="medium" margin="small" round="medium" border={{color: 'brand', size: 'small', side: 'all'}} align="center">
          <Box margin="small" width="small">
            <Image fit="contain" src="/archetypes/creator.png"/>
          </Box>
          <Text>{props.name}</Text>
        </Box>
      </Box>
  );
}

export default Archetype;
