import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Contact from '../screens/Contact'
const Navigator = () => { 

    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName='Home' >
       <Stack.Screen name='Home' component={Home} />
       <Stack.Screen name='Contact' component={Contact} />
   </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default Navigator

