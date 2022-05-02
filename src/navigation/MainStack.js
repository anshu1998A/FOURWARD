import React from 'react'
import Home from '../Screens/Home/Home';
import OtpScreen from '../Screens/OTP/OtpScreen';
import navigationString from './navigationString';

export default function MainStack(Stack) {
  return (
    <>
    <Stack.Screen name={navigationString.HOME} component={Home}/>
    </>
  )
}