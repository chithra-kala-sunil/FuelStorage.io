import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {
 
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppContextProvider} from './context/AppContext';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import NotesList from './screens/NotesList';
import NotesCreate from './screens/NotesCreate';
import {fireDB} from './firebase';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <AppContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Notes"
              component={NotesList}
              options={{
                title: 'Fuel Details',
              }}
            />
            <Stack.Screen
              name="NotesCreate"
              component={NotesCreate}
              options={{
                title: 'Add Fuel Items',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

