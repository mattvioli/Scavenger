import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../utils/authContext';

const MainScreen = () => {

  const [loggedIn, setLoggedIn] = useContext(AuthContext)


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Log Out" onPress={() => setLoggedIn('false')} />
      <Button title="Get data" onPress={() =>  console.log(loggedIn)} />
    </View>
  );
}

export default MainScreen;