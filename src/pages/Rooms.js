import React from 'react';
import NavAndSideBar from '../components/Layout/NavAndSideBar';
import {Box, Button, Heading, Paragraph} from 'grommet';
import Room from '../components/Room';

function Rooms() {
  return (
      <NavAndSideBar>
        <Box fill="horizontal" flex="grow" direction="row-responsive">
          <Box basis="1/2">
            <Heading level={2} margin="small">Poet Rooms</Heading>
            <Heading level={3} margin="small">The Lover</Heading>
            <hr/>
            <Paragraph fill={true} margin="small">Join a Room, or create your own - and start your Collective Poem!</Paragraph>
          </Box>
          <Box basis="1/2" alignContent="center" justify="center">
            <Button margin="xlarge" size="large" label="Create Room" />
          </Box>
        </Box>
        <Box wrap={true} fill="horizontal" direction="row-responsive" basis="full">
          <Room name="Room name" id={1234234} capacity="3/5"/>
          <Room name="Room name" id={1234234} capacity="3/5"/>
          <Room name="Room name" id={1234234} capacity="3/5"/>
          <Room name="Room name" id={1234234} capacity="3/5"/>
          <Room name="Room name" id={1234234} capacity="3/5"/>
          <Room name="Room name" id={1234234} capacity="3/5"/>
          <Room name="Room name" id={1234234} capacity="3/5"/>
          <Room name="Room name" id={1234234} capacity="3/5"/>
        </Box>
      </NavAndSideBar>
  );
}

export default Rooms;
