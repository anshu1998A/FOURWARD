import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import BottomTabNAvigation from './BottomTabNAvigation'
import navigationString from './navigationString'


const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false }}>
      <Stack.Screen 
      name={navigationString.HOME}
      component={BottomTabNAvigation}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
