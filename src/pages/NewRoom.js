import React, {useState} from 'react';
import NavAndSideBar from '../components/Layout/NavAndSideBar';
import {Box, Carousel, FormField, Heading, TextInput, Image, Button} from 'grommet';
import Number from '../components/Boxes/Number';

function NewRoom() {
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState();
  return (
      <NavAndSideBar>
        <Box fill="horizontal" flex="grow" direction="row-responsive">
          <Box basis="full">
            <Heading level={2} margin="small">New Poet Room</Heading>
            <Heading level={3} margin="small">create your world - reality is yet to be invented</Heading>
            <hr/>
          </Box>

        </Box>
        <Box direction="row-responsive">
          <Box basis="1/2">
            <FormField label="Room name" help="Something simple, inspiring or self-explanatory that will attracht the right people.">
              <TextInput value={name} onChange={event => setName(event.target.value)}/>
            </FormField>

            <FormField label="Participants" help="This is a collective Poem. The less participants, the faster your Room will fill - the more, the more unique the Poem. Choice is yours.">
              <Box direction="row">
                <Number value={2} selected={participants == 2} onClick={() => setParticipants(2)}/>
                <Number value={4} selected={participants == 4} onClick={() => setParticipants(4)}/>
                <Number value={6} selected={participants == 6} onClick={() => setParticipants(6)}/>
              </Box>
            </FormField>
          </Box>
          <Box basis="1/2">
            <FormField label="Your cover" help="Choose the Artwork you'd like to have as a Cover of your Collection. Once all poems have been written, the Collection will have the Artwork that received more votes.">
              {/*<Box height="small" width="medium" overflow="hidden">*/}
                <Carousel height="400px">
                  <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
                  <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                  <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
                </Carousel>
              {/*</Box>*/}
            </FormField>
          </Box>
        </Box>
        <Button href="/rooms" primary margin="small" size="large" align="center" alignSelf="center" label="Create your Room"/>
      </NavAndSideBar>
  );
}

export default NewRoom;
