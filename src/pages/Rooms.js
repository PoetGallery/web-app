import React, { useEffect, useState } from 'react';
import NavAndSideBar from '../components/Layout/NavAndSideBar';
import { Box, Button, Heading, Paragraph } from 'grommet';
import Room from '../components/Boxes/Room';
import { getRooms, getRoomCurrentParticipantsAmount, getRoomTotalParticipantsAmount, getRoomArchetype } from "../api/smart-contracts.api";
import { ArchetypesList } from '../api/constants';
import Line from '../components/Line';

function Rooms() {

  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const populateData = async () => {
      const r = await getRooms();
      const roomDetails = await Promise.all(r.map(async roomAddress => {
        const arch = await getRoomArchetype(roomAddress);
        console.log('arch', arch);
        if (arch == localStorage.getItem('selectedArchetype')) {
          return {
            name: 'Name',
            id: 12321,
            totalParticipants: await getRoomTotalParticipantsAmount(roomAddress),
            currentParticipants: await getRoomCurrentParticipantsAmount(roomAddress),
            address: roomAddress
          }
        }
      }));

      console.log(roomDetails);
      setRooms(roomDetails);
    }
    populateData();

  }, []);


  return (
    <NavAndSideBar>
      <Box fill="horizontal" flex="grow" direction="row-responsive">
        <Box basis="1/2">
          <Heading level={2} margin="small">Poet Rooms</Heading>
          <Heading level={3} margin="small">{ArchetypesList[localStorage.getItem('selectedArchetype')].name}</Heading>
          <Line />
          <Paragraph fill={true} margin="small">Join a Room, or create your own - and start your Collective Poem!</Paragraph>
        </Box>
        <Box basis="1/2" alignContent="center" justify="center">
          <Button href="/rooms/new" margin="xlarge" size="large" label="Create Room" />
        </Box>
      </Box>
      <Box wrap={true} fill="horizontal" direction="row-responsive" basis="full">
        <Room name="test" id={1} currentParticipants={4} totalParticipants={6} />
        {
          rooms && rooms.map(room => {
            if (room)
              return (
                <Room name={room.name} id={room.id} currentParticipants={room.currentParticipants} totalParticipants={room.totalParticipants} roomAddress={room.address} />
              )
          })
        }
      </Box>
    </NavAndSideBar>
  );
}

export default Rooms;
