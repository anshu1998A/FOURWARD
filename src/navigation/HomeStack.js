import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import ChangePassword from '../Screens/MainScreen/ChangePassword/ChangePassword';
import EditProfile from '../Screens/MainScreen/EditProfile/EditProfile';
import PostDetails from '../Screens/MainScreen/PostDetails/PostDetails';
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

      <Stack.Screen 
      name={navigationString.CAHNGE_PASSWORD} 
      component={ChangePassword}
      />

      
<Stack.Screen 
      name={navigationString.POST_DETAILS} 
      component={PostDetails}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
