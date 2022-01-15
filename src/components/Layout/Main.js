import React from 'react';
import theme from '../../theme';
import {Grommet, Main} from 'grommet';

function MainLayout(props) {
  return (
      <Grommet theme={theme}>
        <Main background={{color: '#5867a8'}}>
          {props.children}
        </Main>
      </Grommet>
  );
}

export default MainLayout;
