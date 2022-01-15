import React from 'react';
import {Box, Button, Heading, Paragraph} from 'grommet';
import {Archive, Edit} from 'grommet-icons';
import MetamaskButton from '../components/Buttons/MetamaskButton';

function Home() {
  return (
      <Box direction="row" flex="grow" background={{color: '#5867a8'}} height="100vh">
        <Box flex="grow" basis="1/2" align="center" alignSelf="center" border={{color: "white", side: "right"}}>
          <Heading alignSelf="center">PoetGallery</Heading>
          <Box pad="large" background={{color: 'white'}} alignSelf="center" margin="xlarge">
            <Paragraph margin="medium" responsive={true} fill={true} alignSelf="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum velit lacus, lobortis pharetra arcu pellentesque eget. Pellentesque eu nibh sed ipsum aliquet luctus. Suspendisse blandit leo et velit dapibus imperdiet. Sed sed cursus sem, eget egestas massa. Curabitur nibh tortor, tincidunt ut magna ut, tristique congue eros. Curabitur et dui leo. Nunc odio elit, interdum eu facilisis consequat, ultrices eget dolor. Donec ac mauris ac turpis volutpat dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dapibus blandit. Fusce porttitor erat urna, non sagittis turpis rutrum ut. Suspendisse eu tortor risus. Sed mollis, ante nec ultricies bibendum, elit enim laoreet enim, vel aliquet ipsum massa in augue. Fusce condimentum arcu eu sollicitudin pellentesque. Ut nunc nisl, consequat eget lobortis sed, vehicula id augue. Sed eleifend tempus augue non facilisis.
            </Paragraph>
          </Box>
        </Box>
        <Box direction="column" basis="1/2" pad="xlarge">
          <Box basis="small">
            <MetamaskButton />
          </Box>

          <Box flex="grow" align="center" alignSelf="center" alignContent="center" gap="medium" justify="center">
            <Button fill="horizontal" primary color="white" reverse label="Start Creating" size="large" icon={<Edit />} />
            <Button fill="horizontal" primary color="white" reverse label="Explore Marketplace" size="large" icon={<Archive />} />
          </Box>

        </Box>
      </Box>
  );
}

export default Home;
