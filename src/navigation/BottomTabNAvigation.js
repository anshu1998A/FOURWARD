
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import imagePaths from '../constants/imagePaths';
import { Home, Notification, Post, Profile, Search } from '../Screens/MainScreen';
import colors from '../styles/colors';
import { moderateScale, width } from '../styles/responsiveSize';
import navigationString from './navigationString';




const Tab = createBottomTabNavigator()

function BottomTabNAvigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        backgroundColor: colors.sliderBGColor,
        height: moderateScale(60),
        borderTopLeftRadius: moderateScale(8),
        borderTopRightRadius: moderateScale(8),
        borderTopWidth: moderateScale(0),
        alignSelf: 'center',
        justifyContent: 'center',
      },


    }}>
      <Tab.Screen
        name={navigationString.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePaths.home}
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
              source={imagePaths.search}
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
              source={imagePaths.add_Post}
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
              source={imagePaths.notification}
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
              source={imagePaths.profile}
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
