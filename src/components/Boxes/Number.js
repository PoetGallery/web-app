import React from 'react';
import {Box, Text} from 'grommet';

function Number(props) {
  return (
      <Box basis="1/3" onClick={props.onClick}>
        <Box justify="center" height="small" margin="medium" round="medium" border={{color: 'brand', size: 'small', side: 'all'}} align="center" background={props.selected ? 'brand' : 'white'}>
          <Text size="6xl">{props.value}</Text>
        </Box>
      </Box>
  );
}

export default Number;
