import React, {useState} from 'react';
import NavAndSideBar from '../components/Layout/NavAndSideBar';
import {Box, Button, Heading, Image, Layer, Paragraph} from 'grommet';
import Archetype from '../components/Boxes/Archetype';
import {ArchetypesList} from '../api/constants';
import Line from '../components/Line';

function Archetypes() {
  const [archetype, setArchetype] = useState(localStorage.getItem('selectedArchetype') || 0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  function selectItem(item) {
    setSelectedItem(item);
    setModalVisible(true);
  }

  const chooseArchetype = (id) => {
    setModalVisible(false);
    setArchetype(id);
    localStorage.setItem('selectedArchetype', id);
  };
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
            <Line/>
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
                selected={archetype == element.id}
                onClick={() => selectItem(element)}
            />;
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
        {modalVisible && (
            <Layer onEsc={() => setModalVisible(false)}
                   onClickOutside={() => setModalVisible(false)}>
              <Box pad="medium" width="large" background="brand">
                <Box gap="medium" direction="row">
                  <Box basis="1/2">
                    <Archetype
                        name={selectedItem.name}
                        id={selectedItem.id}
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
                    <Button primary label="Use This Archetype" onClick={() => chooseArchetype(selectedItem.id)}/>
                  </Box>
                </Box>
              </Box>
            </Layer>
        )}
      </NavAndSideBar>
  );
}

export default Archetypes;
