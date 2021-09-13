import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthScreen } from './src/screens';
import MainScreen from './src/screens/MainScreen';
import { AuthContext } from './src/utils/authContext';

const Tab = createBottomTabNavigator();


export default function App() {
  const [ loggedIn, setLoggedIn ] = useState('false');


  return (
    <NavigationContainer>
      <AuthContext.Provider value={[loggedIn, setLoggedIn]}>
        <Tab.Navigator>
          {loggedIn == 'false' ? (
            <Tab.Screen name="SignIn" component={AuthScreen} />
            ) : (
              <Tab.Screen name="Main" component={MainScreen} />
          )}
        </Tab.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//what I am doing.
// trying to use SecureStore to store if the user is logged in, and the username.
// if they are logged in, it will show the main page instead of login/sign up.
// https://docs.expo.dev/versions/latest/sdk/securestore/
// https://reactnavigation.org/docs/auth-flow
// https://reactnative.dev/docs/navigation