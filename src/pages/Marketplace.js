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
              <Box pad="medium" width="large" background="brand">
                <Box gap="medium" direction="row">
                  <Box basis="1/2">
                    <MarketplaceItem
                        title={selectedItem.name}
                        description={selectedItem.description}
                        image={selectedItem.image}
                    />
                  </Box>
                  <Box basis="1/2" justify="center">
                    <Paragraph>
                      terrified again <br/>
                      of not loving <br/>
                      of loving and not you <br/>
                      of being loved and not by you <br/>
                      of knowing not knowing <br/>
                      pretending <br/>
                      I and all the others <br/>
                      that will love you <br/>
                      if they love you <br/>
                      unless they love you <br/>
                      <br/>
                      - S. Beckett, Cascando
                    </Paragraph>
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
