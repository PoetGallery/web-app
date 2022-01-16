import React from 'react'
import NavAndSideBar from '../components/Layout/NavAndSideBar'
import { Box, Button, Heading, Paragraph } from 'grommet'
import Archetype from '../components/Boxes/Archetype'
import { ArchetypesList } from '../api/constants'
function Archetypes() {
  const chooseArchetype = (id) => {
    localStorage.setItem('selectedArchetype', id)
  }
  return (
    <NavAndSideBar>
      <Box fill="horizontal" flex="grow" direction="row-responsive">
        <Box>
          <Heading level={2} margin="small">
            Create Factory
          </Heading>
          <Heading level={3} margin="small">
            where everything happens
          </Heading>
          <hr />
          <Paragraph fill={true} margin="small">
            Join a Room, or create your own - and start your Collective Poem!
          </Paragraph>
        </Box>
      </Box>
      <Box
        wrap={true}
        fill="horizontal"
        direction="row-responsive"
        basis="full"
      >
        {Object.entries(ArchetypesList).map((el, key) => {
          const element = el[1];
          return <Archetype
            name={element.name}
            id={key}
            description={element.description}
            image={element.image}
            onClick={() => chooseArchetype(el[1].id)}
          />
        })}
      </Box>
      <Button
        href="/rooms"
        primary
        margin="small"
        size="large"
        align="center"
        alignSelf="center"
        label="Next: Join a room"
      />
    </NavAndSideBar>
  )
}

export default Archetypes
