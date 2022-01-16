import React from 'react';
import {Box} from 'grommet';
import {joinRoom} from '../../api/smart-contracts.api';

function Room(props) {

  console.log(props.address);
  async function join() {
    console.log(props)
    console.log(props.address);
    // await joinRoom(props.address);
    window.location = `/poem/${props.address}`;
  }
  return (
      <Box basis="small" onClick={join}>
        <Box height="small" margin="small" round="medium" border={{color: 'brand', size: 'small', side: 'all'}} align="center">
          <p>{props.name}</p>
          <p>#{props.id}</p>
          <p>{props.currentParticipants}/{props.totalParticipants} Poets</p>
        </Box>
      </Box>
  );
}

export default Room;
