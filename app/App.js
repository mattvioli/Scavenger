import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthScreen } from './src/screens';
import MainScreen from './src/screens/MainScreen';
import { AuthContext } from './src/utils/authContext';

const Tab = createBottomTabNavigator();


export default function App({ navigation }) {
  const [ loggedIn, setLoggedIn ] = useState('false');


  return (
    <NavigationContainer>
      <AuthContext.Provider value={[loggedIn, setLoggedIn]}>
        <Tab.Navigator>
          {loggedIn == 'false' ? (
            <>
              <Tab.Screen name="Sign in" component={AuthScreen} />
            </>
            ) : (
              <>
                <Tab.Screen name="Main" component={MainScreen} />
                <Tab.Screen
                  name="Log Out"
                  component={MainScreen}
                  options={({ navigation }) => ({
                    tabBarButton: (props) => (
                      <TouchableOpacity onPress={() => setLoggedIn('false')}>
                        <Text>Log Out</Text>
                      </TouchableOpacity>
                    ),})}
                />              
              </>
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

//To do list
// Log out button
// navigate to first challenge