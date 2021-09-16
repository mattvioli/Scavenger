import React, { useState } from 'react';
import { ImageBackground, Button, Text, View, TextInput } from 'react-native';
import { AuthContext } from '../utils/authContext';
import styles from '../screens/ScreenStyles';

const Riddle = () => {
const [ guess, setGuess ] = useState('');
const answer = 'yarra';
const clue = 'it runs through Melbrourne'
// the answer should check with a contains incase they say 'the yarra river' or 'the yarra' ect.

const checkGuess = () => {
  // if()
}
  return (
    <ImageBackground source={require('../../public/images/background.jpg')} style={styles.image}>
    <View style={styles.card}>
      <Text style={styles.heading}>Riddle Time!</Text>
      <Text>What is the river that runs parallel to Warburton main street?</Text>
      <TextInput style={styles.input} placeholder="Guess" onChangeText={setGuess}></TextInput>
      <Button 
        title="Submit"
        onPress={() => console.log(guess)}
      />
      <Button 
        title="Hint"
        onPress={() => alert(clue)}
      />
    </View>
    </ImageBackground>

  );
}

export default Riddle;