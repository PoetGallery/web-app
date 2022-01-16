import React, { useEffect, useState } from 'react';
import NavAndSideBar from '../components/Layout/NavAndSideBar';
import User from '../components/Boxes/User';
import { Box, Button, Clock, Heading, Sidebar, TextInput } from 'grommet';
import { useParams } from 'react-router-dom';
import Line from '../components/Line';
import { getPoem, getRoomTotalParticipantsAmount, startPoem, getRoomCurrentParticipantsAmount, continuePoem } from '../api/smart-contracts.api';
import { pushJSONDocument, storeNFTMetadata } from '../api/nftStorage.api';
import axios from "axios";

function Poem() {
  const { roomAddress } = useParams();
  const numberOfLines = 12;
  const title = 'A Monkey Brain in the Void of the World';
  const [lastLine, setLastLine] = useState(title);
  const [run, setRun] = useState('backward');
  const [disabled, setDisabled] = useState(false);
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [currentParticipants, setCurrentParticipants] = useState(0);
  const emptyLines = [];

  for (let i = 1; i < numberOfLines; i++) {
    emptyLines.push(<li></li>);
  }

  function tick(time) {
    if (time === 'T0:0:0') {
      // time is up!
      setDisabled(true);
      alert("Time is up!");
      setRun(false);
    }
  }

  useEffect(() => {
    async function populateData() {
      const current = await getRoomCurrentParticipantsAmount(roomAddress);
      const total = await getRoomTotalParticipantsAmount(roomAddress);

      setTotalParticipants(total);
      setCurrentParticipants(current);

      const poem = await getPoem(roomAddress);
      if (poem.uri != '') {
        let metadata = await axios.get(poem.uri);
        const lines = metadata.data.poem.split("\n");
        setLastLine(lines[lines.length - 1]);
      }
    }
    populateData();
  }, [])

  async function addLines() {
    // if is started => continue, otherwise start
    // need room address

    // const metadata = await storeNFTMetadata({
    //   name: "Poem Name",
    //   description: "This is a poem",
    //   image: avatar
    // });


    // if(totalParticipants == currentParticipants) {
    //   await startPoem(roomAddress, uri)
    // }

    const poem = await getPoem(roomAddress);
    console.log(poem);
    if (poem.uri == '') {
      const metadata = await pushJSONDocument({
        name: "A Monkey Brain in the Void of the World",
        poem: `${line1}\n${line2}\n${line3}`,
        linesAmount: 3
      });

      console.log(metadata);
      await startPoem(roomAddress, metadata);
    } else {
      let metadata = (await axios.get(poem.uri)).data;
      metadata.poem = metadata.poem.concat(`\n${line1}\n${line2}\n${line3}`);
      metadata.linesAmount += 3;
      const newMetadata = await pushJSONDocument(metadata);
      await continuePoem(roomAddress, newMetadata)
    }
  }
  return (
    <NavAndSideBar>
      <Box fill="horizontal" flex="grow" direction="row-responsive">
        <Box basis="medium" direction="row">
          <Sidebar gap="medium" basis="medium" background="brand">
            <User name={localStorage.getItem('username')} avatar={localStorage.getItem('avatar')} />
            <User name="Jabyl" avatar="/alex.jpg" />
            <hr align="left" width="100%" />
            <Heading margin="xlarge" size="small" textAlign="center" alignSelf="center">{currentParticipants}/{totalParticipants} joined!</Heading>
          </Sidebar>
        </Box>
        <Box basis="full" margin="medium">
          <Heading>{title}</Heading>
          <Line />
          <Box fill="horizontal" flex="grow" direction="row-responsive">
            <Box fill="horizontal">
              <ol>
                {emptyLines}
                <li>{lastLine}</li>
                <li>
                  <TextInput
                    placeholder="Add your line"
                    value={line1}
                    onChange={event => setLine1(event.target.value)}
                  />
                </li>
                <li>
                  <TextInput
                    placeholder="Add your line"
                    value={line2}
                    onChange={event => setLine2(event.target.value)}
                  />
                </li>
                <li>
                  <TextInput
                    placeholder="Add your line"
                    value={line3}
                    onChange={event => setLine3(event.target.value)}
                  />
                </li>
              </ol>
            </Box>
            <Box basis="small">
              <Clock run={run} time="T00:05:00" type="digital" onChange={tick} />
            </Box>
          </Box>
          <Button disabled={disabled} primary margin="small" size="large" align="center" alignSelf="center" label="Add your Lines!" onClick={addLines} />
        </Box>
      </Box>
    </NavAndSideBar>
  );
}

export default Poem;
