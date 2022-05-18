import React from 'react';
import { LogIn, OtpScreen, PhoneLogIn, SignUp } from '../Screens/AuthScreens';

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