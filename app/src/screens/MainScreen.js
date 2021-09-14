import React, { useContext } from 'react';
import { ImageBackground, Button, Text, View, StyleSheet } from 'react-native';
import { AuthContext } from '../utils/authContext';

const MainScreen = () => {

  const [loggedIn, setLoggedIn] = useContext(AuthContext)


  return (
    <ImageBackground source={require('../../public/images/background.jpg')} style={styles.image}>
    <View style={styles.card}>
      <Text style={styles.heading}>Home Screen</Text>
      <Text>Hello! Welcome to the grand adventure!</Text>
      <Text>Take your time, click start you're ready.</Text>
      {/* need to change below to a nav button. */}
      <Button 
        title="Start"
        onPress={() => navigation.navigate('Start')
      }/>
    </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  image: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
  },  
  card: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: '80%',
      marginTop: '40%',
      borderRadius: 20,
      maxHeight: 380,
      paddingBottom: '30%',
  },
  heading: {
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: '10%',
      marginTop: '5%',
      marginBottom: '30%',
      color: 'black',
  },
  form: {
      flex: 1,
      justifyContent: 'space-between',
      paddingBottom: '5%',
  },
  inputs: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '10%',
  },  
  input: {
      width: '80%',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      paddingTop: 10,
      fontSize: 16, 
      minHeight: 40,
  },
  button: {
      width: '80%',
      backgroundColor: 'black',
      height: 40,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
  },
  buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '400'
  },
  buttonAlt: {
      width: '80%',
      borderWidth: 1,
      height: 40,
      borderRadius: 50,
      borderColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
  },
  buttonAltText: {
      color: 'black',
      fontSize: 16,
      fontWeight: '400',
  },
  message: {
      fontSize: 16,
      marginVertical: '5%',
  },
});

export default MainScreen;