import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import EditProfile from '../Screens/EditProfile/EditProfile';
import BottomTabNAvigation from './BottomTabNAvigation'
import navigationString from './navigationString'


const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={navigationString.BOTTOM}
        component={BottomTabNAvigation}
      />
      <Stack.Screen
        name={navigationString.EDIT_PROFILE}
        component={EditProfile}
      />
    
    </Stack.Navigator>
  )
}

export default HomeStack
