import React, { useState, useEffect } from 'react';
import { ImageBackground, Button, Text, View, TextInput, Modal, Pressable } from 'react-native';
import { AuthContext } from '../utils/authContext';
import styles from '../screens/ScreenStyles';
import * as Location from 'expo-location';


const Geolocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: 6,
      });
      setLocation(location);
    })();
  }, []);

  const onPress = async () => {
    console.log('before await')
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: 6,
      });
      setLocation(location);
      console.log('after await')
    }    

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

    return (
    <ImageBackground source={require('../../public/images/background.jpg')} style={styles.image}>
    <View style={styles.card}>
      <Text style={styles.heading}>Find this location!</Text>
      <Text>{text}</Text>
      <Button 
        title="Submit"
        onPress={onPress}
      />
      <Button 
        title="Hint"
        onPress={console.log('nothing')}
      />
    </View>
    </ImageBackground>
  );
}

export default Geolocation;