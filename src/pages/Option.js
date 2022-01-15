import React from 'react';
import {Box, Button, Paragraph} from 'grommet';

function Option() {
  return (
      <Box direction="row" flex="grow" height="100vh">
        <Box flex="grow" basis="1/2" align="center" alignSelf="center" border={{color: 'white', side: 'right'}}>
          <Box pad="large" background={{color: 'white'}} alignSelf="center" margin="xlarge">
            <Paragraph margin="medium" responsive={true} fill={true} alignSelf="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum velit lacus, lobortis pharetra arcu pellentesque eget. Pellentesque eu nibh sed ipsum aliquet luctus. Suspendisse blandit leo et velit dapibus imperdiet. Sed sed cursus sem, eget egestas massa. Curabitur nibh tortor, tincidunt ut magna ut, tristique congue eros. Curabitur et dui leo. Nunc odio elit, interdum eu facilisis consequat, ultrices eget dolor. Donec ac mauris ac turpis volutpat dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dapibus blandit. Fusce porttitor erat urna, non sagittis turpis rutrum ut. Suspendisse eu tortor risus. Sed mollis, ante nec ultricies bibendum, elit enim laoreet enim, vel aliquet ipsum massa in augue. Fusce condimentum arcu eu sollicitudin pellentesque. Ut nunc nisl, consequat eget lobortis sed, vehicula id augue. Sed eleifend tempus augue non facilisis.
            </Paragraph>
          </Box>
          <Box pad="medium" alignSelf="center" margin="medium">
            <Button href="/signup/artist" fill="horizontal" primary color="white" reverse label="I'M AN ARTIST" size="large"/>
          </Box>
        </Box>
        <Box flex="grow" basis="1/2" align="center" alignSelf="center" border={{color: 'white', side: 'right'}}>
          <Box pad="large" background={{color: 'white'}} alignSelf="center" margin="xlarge">
            <Paragraph margin="medium" responsive={true} fill={true} alignSelf="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum velit lacus, lobortis pharetra arcu pellentesque eget. Pellentesque eu nibh sed ipsum aliquet luctus. Suspendisse blandit leo et velit dapibus imperdiet. Sed sed cursus sem, eget egestas massa. Curabitur nibh tortor, tincidunt ut magna ut, tristique congue eros. Curabitur et dui leo. Nunc odio elit, interdum eu facilisis consequat, ultrices eget dolor. Donec ac mauris ac turpis volutpat dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dapibus blandit. Fusce porttitor erat urna, non sagittis turpis rutrum ut. Suspendisse eu tortor risus. Sed mollis, ante nec ultricies bibendum, elit enim laoreet enim, vel aliquet ipsum massa in augue. Fusce condimentum arcu eu sollicitudin pellentesque. Ut nunc nisl, consequat eget lobortis sed, vehicula id augue. Sed eleifend tempus augue non facilisis.
            </Paragraph>
          </Box>
          <Box pad="medium" alignSelf="center" margin="medium">
            <Button href="/signup/poet" fill="horizontal" primary color="white" reverse label="I'M A POET" size="large"/>
          </Box>
        </Box>
      </Box>
  );
}

export default Option;
