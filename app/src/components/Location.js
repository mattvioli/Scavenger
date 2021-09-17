import React, { useState, useContext } from 'react';
import { ImageBackground, Button, Text, View, TextInput, Modal, Pressable } from 'react-native';
import { AuthContext } from '../utils/authContext';
import styles from '../screens/ScreenStyles';
import * as Location from 'expo-location';


const Geolocation = () => {
  const [location, setLocation] = useState(null);
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] =  useState(null)
  const [errorMsg, setErrorMsg] = useState(null);
  const [goalLatitude, setGoalLatitude] = useState(-37.754000)
  const [goalLongitude, setGoalLongitude] =  useState(145.690606)
  const [modalVisible, setModalVisible] = useState(false);
  const [ page, setPage ] = useContext(AuthContext)

  const modalPress = () => {
    setModalVisible(!modalVisible)
    setPage('image')
  }

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
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);

      setLocation(location.coords);
      console.log('after await')
      if((longitude > goalLongitude - 0.01 && longitude < goalLongitude + 0.01 ) && (latitude > goalLatitude - 0.01 && latitude < goalLatitude + 0.01 )) {
        setModalVisible(true)

      }
    }    

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `long ${longitude} + lat ${latitude}`
  }

    return (
    <ImageBackground source={require('../../public/images/background.jpg')} style={styles.image}>
    <View style={styles.card}>
      <Text style={styles.heading}>Find this location!</Text>
      <Text>Hint: It's famous for it's california redwood forest.</Text>
      <Text>{text}</Text>
      <Button 
        title="Submit"
        onPress={onPress}
      />
      <Button 
        title="Hint"
        onPress={() => alert(`the yarra also runs through it.`)}
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

export default Geolocation;