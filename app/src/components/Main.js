import React, { useContext } from 'react';
import { ImageBackground, Button, Text, View } from 'react-native';
import { AuthContext } from '../utils/authContext';
import styles from '../screens/ScreenStyles';

const Main = () => {
  const [ page, setPage ] = useContext(AuthContext)

  return (
    <ImageBackground source={require('../../public/images/background.jpg')} style={styles.image}>
    <View style={styles.card}>
      <Text style={styles.heading}>Home Screen</Text>
      <Text>Hello! Welcome to the grand adventure!</Text>
      <Text>Take your time, click start you're ready.</Text>
      <Button 
        title="Start"
        onPress={() => setPage('riddle')}
      />
    </View>
    </ImageBackground>

  );
}

export default Main;