import React, { useState } from 'react';
import { ImageBackground, Button, Text, View, TextInput, Modal, Pressable } from 'react-native';
import { AuthContext } from '../utils/authContext';
import styles from '../screens/ScreenStyles';

const Location = () => {
    return (
    <ImageBackground source={require('../../public/images/background.jpg')} style={styles.image}>
    <View style={styles.card}>
      <Text style={styles.heading}>Find this location!</Text>
      <Text>blah blah blah</Text>
      <Button 
        title="Submit"
        onPress={console.log('nothing')}
      />
      <Button 
        title="Hint"
        onPress={console.log('nothing')}
      />
    </View>
    </ImageBackground>
  );
}

export default Location;