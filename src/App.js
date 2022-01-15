import React from 'react';
import {Box, Grommet} from 'grommet';
import theme from './theme';

function App() {
  return (
    <Grommet theme={theme}>
      <Box align="center" alignContent="center" alignSelf="center" pad="large">
      <h1>Poet Gallery</h1>
    </Box>
    </Grommet>
  );
}

export default App;
