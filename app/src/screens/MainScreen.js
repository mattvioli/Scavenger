import React, { useState } from 'react';
import { ImageBackground, Button, Text, View } from 'react-native';
import { AuthContext } from '../utils/authContext';

import styles from './ScreenStyles';
import Main from '../components/Main'
import Riddle from '../components/Riddle'
import Geolocation from '../components/Location';

const MainScreen = ({ navigation }) => {
  const [ page, setPage ] = useState('location')

  return (
    <AuthContext.Provider value={[page, setPage]}>
      {page === 'main' ? <Main /> :
      page === 'riddle' ? <Riddle /> :
      page === 'location' ? <Geolocation /> : null
      }
    </AuthContext.Provider>
  );
}

export default MainScreen;