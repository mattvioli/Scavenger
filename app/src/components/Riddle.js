import React, { useState, useContext } from 'react';
import { ImageBackground, Button, Text, View, TextInput, Modal, Pressable } from 'react-native';
import { AuthContext } from '../utils/authContext';
import styles from '../screens/ScreenStyles';

const Riddle = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ guess, setGuess ] = useState('');
  const [ page, setPage ] = useContext(AuthContext)
  const answer = 'yarra';
  const clue = 'it runs through Melbourne'

  // the answer should check with a contains incase they say 'the yarra river' or 'the yarra' ect.
  const checkGuess = () => {
    if(guess.includes(answer)) {
    setModalVisible(true)
    } else {
      alert('try again')
    }
  }

  const modalPress = () => {
    setModalVisible(!modalVisible)
    setPage('location')
  }
  
    return (
    <ImageBackground source={require('../../public/images/background.jpg')} style={styles.image}>
    <View style={styles.card}>
      <Text style={styles.heading}>Riddle Time!</Text>
      <Text>What is the river that runs parallel to Warburton main street?</Text>
      <TextInput style={styles.input} placeholder="Guess" onChangeText={setGuess}></TextInput>
      <Button 
        title="Submit"
        onPress={checkGuess}
      />
      <Button 
        title="Hint"
        onPress={() => alert(clue)}
      />
    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>That is correct!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={modalPress}
            >
              <Text style={styles.textStyle}>Next Riddle!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ImageBackground>

  );
}

export default Riddle;