import React from 'react'
import AppIntroSlide from '../Screens/AppIntroSlider/AppIntroSlide';
import Home from '../Screens/Home/Home';
import LogIn from '../Screens/LogIn/LogIn';
import OtpScreen from '../Screens/OTP/OtpScreen';
import PhoneLogIn from '../Screens/PhoneLogIn/PhoneLogIn';
import SetPassword from '../Screens/SetPassword/SetPassword';
import SignUp from '../Screens/SignUp/SignUp';
import navigationString from './navigationString';
export default function authStack(Stack) {
  return (
    <>
      <Stack.Screen name={navigationString.LOGIN} component={LogIn} />
      <Stack.Screen name={navigationString.SIGNUP} component={SignUp} />
      <Stack.Screen name={navigationString.PHONE_LOGIN} component={PhoneLogIn}/>     
      <Stack.Screen name={navigationString.OTP} component={OtpScreen}/>
      <Stack.Screen name={navigationString.SET_PASSWORD} component={SetPassword}/>
     
    </>
  )
}