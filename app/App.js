import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthScreen, MainScreen } from './src/screens';
import { AuthContext } from './src/utils/authContext';

const Stack = createNativeStackNavigator();


export default function App({ navigation }) {
  //this should be false, however because of
  const [ loggedIn, setLoggedIn ] = useState(false);
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <AuthContext.Provider value={[loggedIn, setLoggedIn]}>
        <Tab.Navigator>
          {loggedIn == false ? (
            <Tab.Group>
              <Tab.Screen name="Sign in" component={AuthScreen} />
            </Tab.Group>
            ) : (
              <Tab.Group>
                <Tab.Screen name="Main" component={MainScreen} />
                <Tab.Screen
                  name="Log Out"
                  component={MainScreen}
                  options={({ navigation }) => ({
                    tabBarButton: (props) => (
                      <TouchableOpacity onPress={() => setLoggedIn(false)}>
                        <Text>Log Out</Text>
                      </TouchableOpacity>
                    ),})}
                />    
              </Tab.Group>
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

//to do list:
//Create first challenge page
//Create