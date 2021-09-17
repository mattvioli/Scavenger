import React, { useState } from 'react';
import { ImageBackground, Button, Text, View } from 'react-native';
import { AuthContext } from '../utils/authContext';

import { Main, Riddle, Geolocation, ImageRecognition } from '../components/index'


const MainScreen = ({ navigation }) => {
  const [ page, setPage ] = useState('main')

  return (
    <AuthContext.Provider value={[page, setPage]}>
      {page === 'main' ? <Main /> :
      page === 'riddle' ? <Riddle /> :
      page === 'location' ? <Geolocation /> :
      page === 'image' ? <ImageRecognition /> : null
      }
    </AuthContext.Provider>
  );
}

export default MainScreen;