import React from 'react';
import { Button, Text, View } from 'react-native';
import { getValueFor, save } from '../utils/secureStore';

const MainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Log Out" onPress={() => save('isLoggedIn', "false")} />
      <Button title="Get data" onPress={() => getValueFor('isLoggedIn')} />
    </View>
  );
}

export default MainScreen;