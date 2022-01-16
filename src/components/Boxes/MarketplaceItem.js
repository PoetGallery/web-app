import React from 'react';
import {Box, Image, Text} from 'grommet';

function MarketplaceItem(props) {
  return (
      <Box>
        <Box overflow="hidden" margin="medium" background={props.selected?"brand":"white"}>
          <Text size="medium">{props.title}</Text>
          <Text size="small">{props.description}</Text>
          <Box margin={{top: "medium"}} width="medium" height="medium" align="center" background="#ecf0f1">
            <Image fit="cover" src={props.image} onClick={props.onClick} key={props.id}/>
          </Box>
          <Box margin="small">
            <Text>{props.name}</Text>
          </Box>
        </Box>
      </Box>
  );
}

export default MarketplaceItem;
