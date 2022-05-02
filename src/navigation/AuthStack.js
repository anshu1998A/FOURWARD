import React from 'react';
import LogIn from '../Screens/AuthScreens/LogIn/LogIn';
import OtpScreen from '../Screens/AuthScreens/OTP/OtpScreen';
import PhoneLogIn from '../Screens/AuthScreens/PhoneLogIn/PhoneLogIn';
import SignUp from '../Screens/AuthScreens/SignUp/SignUp';

import navigationString from './navigationString';
export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen name={navigationString.LOGIN} component={LogIn} />
      <Stack.Screen name={navigationString.SIGNUP} component={SignUp} />
      <Stack.Screen name={navigationString.PHONE_LOGIN} component={PhoneLogIn}/>     
      <Stack.Screen name={navigationString.OTP} component={OtpScreen}/>
     
    </>
  )
}