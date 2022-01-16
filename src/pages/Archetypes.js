import React from 'react';
import NavAndSideBar from '../components/Layout/NavAndSideBar';
import {Box, Button, Heading, Paragraph} from 'grommet';
import Archetype from '../components/Archetype';

function Archetypes() {
  return (
      <NavAndSideBar>
        <Box fill="horizontal" flex="grow" direction="row-responsive">
          <Box>
            <Heading level={2} margin="small">Create Factory</Heading>
            <Heading level={3} margin="small">where everything happens</Heading>
            <hr/>
            <Paragraph fill={true} margin="small">Join a Room, or create your own - and start your Collective Poem!</Paragraph>
          </Box>
        </Box>
        <Box wrap={true} fill="horizontal" direction="row-responsive" basis="full">
          <Archetype name="Archetype" id={1} description=""/>
          <Archetype name="Archetype" id={1} description=""/>
          <Archetype name="Archetype" id={1} description=""/>
          <Archetype name="Archetype" id={1} description=""/>
          <Archetype name="Archetype" id={1} description=""/>
          <Archetype name="Archetype" id={1} description=""/>
          <Archetype name="Archetype" id={1} description=""/>
          <Archetype name="Archetype" id={1} description=""/>
          <Archetype name="Archetype" id={1} description=""/>
          <Archetype name="Archetype" id={1} description=""/>
          <Archetype name="Archetype" id={1} description=""/>
          <Archetype name="Archetype" id={1} description=""/>
        </Box>
        <Button href="/rooms" primary margin="small" size="large" align="center" alignSelf="center" label="Next: Join a room"/>
      </NavAndSideBar>
  );
}

export default Archetypes;
