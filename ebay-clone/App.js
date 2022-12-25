import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Notifications from './Notifications';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Cart';

const Drawer = createDrawerNavigator();
const StackDrawer = createNativeStackNavigator();

function AppDrawer(){
  return(<Drawer.Navigator useLegacyImplementation>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Notifications" component={Notifications} />
    <Drawer.Screen name='Cart' component={Cart} />
  </Drawer.Navigator>);
}

export default function App() {
  return (
    <NavigationContainer>
          <AppDrawer />
    </NavigationContainer>
  );
}
