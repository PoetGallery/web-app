import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box, Button, FileInput, FormField, Heading, Paragraph, TextInput} from 'grommet';

function SignUp() {
  const {type} = useParams();
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState(null);

  async function signup() {

    await changeNetwork();
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    
    const metadata = await storeMetadata({
      name: nickname,
      description: "This is a user profile json",
      image: avatar
    });

    await createUser(`https://ipfs.io/ipfs/${metadata.ipnft}/metadata.json`, type == 'poet' ? 2 : 1);

    localStorage.setItem('role', type == 'poet' ? 2 : 1)
    localStorage.setItem('username', nickname);
    localStorage.setItem('avatar', `https://ipfs.io/ipfs/${metadata.data.image.pathname.replace('//', '')}`);
  }

  return (
      <Box direction="row" flex="grow" height="100vh">
        <Box flex="grow" basis="1/2" align="center" alignSelf="center" border={{color: 'white', side: 'right'}}>
          <Heading alignSelf="center">Welcome, {type === 'poet' ? 'poet' : 'artist'}</Heading>
          <Box pad="large" background={{color: 'white'}} alignSelf="center" margin="xlarge">
            {type === 'poet' ?
                <Paragraph margin="medium" responsive={true} fill={true} alignSelf="center">
                  Poet ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum velit lacus, lobortis pharetra arcu pellentesque eget. Pellentesque eu nibh sed ipsum aliquet luctus. Suspendisse blandit leo et velit dapibus imperdiet. Sed sed cursus sem, eget egestas massa. Curabitur nibh tortor, tincidunt ut magna ut, tristique congue eros. Curabitur et dui leo. Nunc odio elit, interdum eu facilisis consequat, ultrices eget dolor. Donec ac mauris ac turpis volutpat dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dapibus blandit. Fusce porttitor erat urna, non sagittis turpis rutrum ut. Suspendisse eu tortor risus. Sed mollis, ante nec ultricies bibendum, elit enim laoreet enim, vel aliquet ipsum massa in augue. Fusce condimentum arcu eu sollicitudin pellentesque. Ut nunc nisl, consequat eget lobortis sed, vehicula id augue. Sed eleifend tempus augue non facilisis.
                </Paragraph>
                : <Paragraph margin="medium" responsive={true} fill={true} alignSelf="center">
                  Artist ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum velit lacus, lobortis pharetra arcu pellentesque eget. Pellentesque eu nibh sed ipsum aliquet luctus. Suspendisse blandit leo et velit dapibus imperdiet. Sed sed cursus sem, eget egestas massa. Curabitur nibh tortor, tincidunt ut magna ut, tristique congue eros. Curabitur et dui leo. Nunc odio elit, interdum eu facilisis consequat, ultrices eget dolor. Donec ac mauris ac turpis volutpat dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dapibus blandit. Fusce porttitor erat urna, non sagittis turpis rutrum ut. Suspendisse eu tortor risus. Sed mollis, ante nec ultricies bibendum, elit enim laoreet enim, vel aliquet ipsum massa in augue. Fusce condimentum arcu eu sollicitudin pellentesque. Ut nunc nisl, consequat eget lobortis sed, vehicula id augue. Sed eleifend tempus augue non facilisis.
                </Paragraph>
            }
          </Box>
        </Box>
        <Box flex="grow" direction="column" basis="1/2" pad="large" alignSelf="center">
          <Heading level={3}>Tell us about you</Heading>
          <Paragraph fill={true}>This is your {type === 'poet' ? 'Poet' : 'Artist'} profile. It is free, pseudonymous, and unique. <br/> It will belong to you, and you only. Forever</Paragraph>
          <FormField label="Nickname" help="What would you like your community to call you?">
            <TextInput value={nickname} onChange={event => setNickname(event.target.value)}/>
          </FormField>
          <FormField label="Avatar" help="A public image- that's how others will see you.">
            <FileInput
                name="avatar"
                multiple={false}
                onChange={event => {
                  const fileList = event.target.files;
                  for (let i = 0; i < fileList.length; i += 1) {
                    setAvatar(fileList[i]);
                  }
                }}
            />
          </FormField>
          <Button disabled={nickname === '' || avatar == null} onClick={signup} fill="horizontal" primary color="white" reverse label="Go to creative factory" size="large"/>
        </Box>
      </Box>
  );
}

export default SignUp;
