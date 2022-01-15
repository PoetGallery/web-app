import React from 'react';
import { Box, Button, Paragraph } from 'grommet';

function Option() {
  return (
    <Box direction="row" flex="grow" height="100vh">
      <Box flex="grow" basis="1/2" align="center" alignSelf="center" border={{ color: 'white', side: 'right' }}>
        <Box pad="large" background={{ color: 'white' }} alignSelf="center" margin="xlarge">
          <Paragraph margin="medium" responsive={true} fill={true} alignSelf="center">
            Artist can create Artworks & Covers for surrealist Poetry Collections
            <br />
            <br />
            1. You choose an Archetype and a line of poetry that represents your Artwork
            <br />
            2. You upload Artwork + brief description
            <br />
            3. Poets can select your Artwork as the cover of the Poetry Collection
            <br />
            4. Every time your Artwork is selected and the Collection is sold, you get royalties. Forever.
            <br />

          </Paragraph>
        </Box>
        <Box pad="medium" alignSelf="center" margin="medium">
          <Button href="/signup/artist" fill="horizontal" primary color="white" reverse label="I'M AN ARTIST" size="large" />
        </Box>
      </Box>
      <Box flex="grow" basis="1/2" align="center" alignSelf="center" border={{ color: 'white', side: 'right' }}>
        <Box pad="large" background={{ color: 'white' }} alignSelf="center" margin="xlarge">
          <Paragraph margin="medium" responsive={true} fill={true} alignSelf="center">

            Poet can create collective Poems & Poetry collections based on a theme.
            <br />
            <br />
            1. Join an Open Room, or create your own.
            <br />

            2. You choose Archetype & cover.
            <br />
            3. Each participant writes 3 lines.
            <br />
            4. Once the Room is closed, the poem added to a unique collection.
            <br />
            5. You and the other poets receive an equal amount of profit for each Collection Sale. Forever.
          </Paragraph>
        </Box>
        <Box pad="medium" alignSelf="center" margin="medium">
          <Button href="/signup/poet" fill="horizontal" primary color="white" reverse label="I'M A POET" size="large" />
        </Box>
      </Box>
    </Box>
  );
}

export default Option;
