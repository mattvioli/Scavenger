import React, { useContext, useEffect, useState, useRef } from 'react';
import { ImageBackground, Button, Text, View, TouchableOpacity, Modal, Dimensions, Pressable  } from 'react-native';
import { AuthContext } from '../utils/authContext';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';

import styles from '../screens/ScreenStyles';

const Clarifai = require('clarifai');

// oold key stuff
// const clarifai = new Clarifai.App({
//   apiKey: 'fe0f2a71799343cbbc31616f970fce97'
// });
// https://sdk.clarifai.com/js/latest/index.html

const clarifai = new Clarifai.App({
  apiKey: '851f7efad90241fc807252f3da705d6d'
});
process.nextTick = setImmediate;

let camera;

const ImageRecognition = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ page, setPage ] = useContext(AuthContext)
  const [ hasCameraPermission, setHasCameraPermission ] = useState(null)
  const [ predictions, setPredictions ] = useState()
  const [ capturedImage, setCapturedImage ] = useState(null)
  const [ answer, setAnswer ] = useState("Mug")


  const dimensions = useRef(Dimensions.get("window"));
  const screenWidth = dimensions.current.width;
  const height = Math.round((screenWidth * 16) / 27);

  const modalPress = () => {
    setModalVisible(!modalVisible)
    setPage('main')
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const capturePhoto = async () => {
    const photo = await camera.takePictureAsync()
    // console.log(photo)
    setCapturedImage(photo)
  }

  const resize = async photo => {
    try {

      let manipulatedImage = await ImageManipulator.manipulateAsync(
        photo,
        [{ resize: { height: 300, width: 300 } }],
        { base64: true }
        );
        return manipulatedImage.base64;
      } catch (error) {
        console.log(error)
      }
  };

  const predict = async image => {
    try {
      let predictions = await clarifai.models.predict(
        { id: '9f54c0342741574068ec696ddbebd699',
          version: '3df9e7b5c0f74a369919f6c0227afa08'
      },
        image
        );
        return predictions;
      } catch (error) {
        console.log(error)
      }
  };

  const objectDetection = async () => {

    capturePhoto();
    let resized = await resize(capturedImage.uri);
    // console.log(resized)
    let prediction = await predict(resized);
    // console.log(prediction)
    setPredictions(prediction.outputs[0].data.regions[0].data.concepts[0].name);
    checkObject()
  };

  const checkObject = () => {
    if(predictions === answer) {
      setModalVisible(true)
    }
  }

  return (
    <ImageBackground source={require('../../public/images/background.jpg')} style={styles.image}>
    <View style={styles.card}>
      <Text style={styles.heading}>Find this object!</Text>
      <Text>You drink coffee and tea from it!</Text>
      <Camera              
        ref={(r) => {camera = r}}
        ratio="1:1"
        style={{ 
        height: height,
        width: "100%",
        }}>
          <View
            style={{
            position: 'absolute',
            left: '5%',
            top: '10%',
            flexDirection: 'column',
            justifyContent: 'space-between'
            }}>
            <TouchableOpacity
              onPress={objectDetection}
              style={{
                width: 70,
                height: 70,
                bottom: 0,
                borderRadius: 50,
                backgroundColor: '#fff'
            }}/>      
        </View>       
      </Camera>
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
              <Text style={styles.textStyle}>You've finished the hunt!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    </ImageBackground>

  );
}

export default ImageRecognition;