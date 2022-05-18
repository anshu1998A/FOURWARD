import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { Comments } from '../Screens/MainScreen';
import AddInfo from '../Screens/MainScreen/AddInfo/AddInfo';
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

      <Stack.Screen
        name={navigationString.ADD_INFO}
        component={AddInfo}
      />

      <Stack.Screen 
      name={navigationString.COMMENTS}
      component={Comments}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
