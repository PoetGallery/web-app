import React, {useState} from 'react';
import NavAndSideBar from '../components/Layout/NavAndSideBar';
import {Box, Button, Heading, Image, Layer, Paragraph} from 'grommet';
import MarketplaceItem from '../components/Boxes/MarketplaceItem';
import {ArchetypesList} from '../api/constants';
import Line from '../components/Line';

function Marketplace() {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  function selectItem(item) {
    setSelectedItem(item);
    setModalVisible(true);
  }

  function mint() {
    setModalVisible(false);
    window.location = 'https://rarible.com/';
  }

  return (
      <NavAndSideBar>
        <Box fill="horizontal" flex="grow" direction="row-responsive">
          <Box>
            <Heading level={2} margin="small">
              Marketplace
            </Heading>
            <Line/>
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
            return <MarketplaceItem
                title={element.name}
                id={key}
                description="test"
                image={element.image}
                onClick={() => selectItem(element)}
            />;
          })}
        </Box>
        {modalVisible && (
            <Layer onEsc={() => setModalVisible(false)}
                   onClickOutside={() => setModalVisible(false)}>
              <Box pad="medium" width="large" background="brand" basis="large">
                <Box gap="medium" direction="row">
                  <Box basis="1/2">
                    <Image fit="cover" src={selectedItem.image}/>
                  </Box>
                  <Box basis="1/2">
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
                    <Button label="Mint Poetry Collection" onClick={() => mint()}/>
                  </Box>
                </Box>
              </Box>
            </Layer>
        )}
      </NavAndSideBar>
  );
}

export default Marketplace;
