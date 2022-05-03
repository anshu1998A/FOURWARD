
import { View, Text, Image } from 'react-native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import navigationString from './navigationString';
import { Home, Notification, Search } from '../Screens/MainScreen';
import imagePaths from '../constants/imagePaths';
import { moderateScale, moderateScaleVertical, width } from '../styles/responsiveSize';
import Post from '../Screens/MainScreen/Post/Post';
import Profile from '../Screens/MainScreen/Profile/Profile';
import colors from '../styles/colors';



const Tab = createBottomTabNavigator()

function BottomTabNAvigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.sliderBGColor,
         borderTopWidth: moderateScaleVertical(0),
        //  paddingVertical:0,
      },
      tabBarShowLabel: false ,
      
    }}>
      <Tab.Screen
        name={navigationString.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.HOME}
              style={{
                height: moderateScale(width / 18),
                width: moderateScale(width / 18),
                resizeMode: 'contain',
                marginTop: moderateScale(8),
                tintColor: focused ? 'red' : 'white',
              }}
            />
          ),
        }}
      />
      <Tab.Screen name={navigationString.SEARCH} component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.SEARCH}
              style={{
                height: moderateScale(width / 18),
                width: moderateScale(width / 18),
                resizeMode: 'contain',
                marginTop: moderateScale(8),
                tintColor: focused ? 'red' : 'white',
              }}
            />
          ),
        }} />

      <Tab.Screen name={navigationString.ADD_POST} component={Post}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.ADD_POST}
              style={{
                height: moderateScale(width / 18),
                width: moderateScale(width / 18),
                resizeMode: 'contain',
                marginTop: moderateScale(8),
                tintColor: focused ? 'red' : 'white',
              }}
            />
          ),
        }} />


      <Tab.Screen name={navigationString.NOTIFICATION} component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.NOTIFICATION}
              style={{
                height: moderateScale(width / 18),
                width: moderateScale(width / 18),
                resizeMode: 'contain',
                marginTop: moderateScale(8),
                tintColor: focused ? 'red' : 'white',
              }}
            />
          ),
        }} />

      <Tab.Screen name={navigationString.PROFILE} 
      component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.PROFILE}
              style={{
                height: moderateScale(width / 18),
                width: moderateScale(width / 18),
                resizeMode: 'contain',
                marginTop: moderateScale(8),
                tintColor: focused ? 'red' : 'white',
              }}
            />
          ),
        }} />


    </Tab.Navigator>

  )
}

export default BottomTabNAvigation
