import React from 'react';
import {Box} from 'grommet';

function Room(props) {
  return (
      <Box basis="small">
        <Box height="small" margin="small" round="medium" border={{color: 'brand', size: 'small', side: 'all'}} align="center">
          <p>{props.name}</p>
          <p>#{props.id}</p>
          <p>{props.currentParticipants}/{props.totalParticipants} Poets</p>
        </Box>
      </Box>
  );
}

export default Room;
