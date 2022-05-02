
import { StackActions } from '@react-navigation/native'
import React from 'react'
import AppIntroSlide from '../Screens/AppIntroSlider/AppIntroSlide';
import navigationString from './navigationString';

const introSlider = (Stack) => {
  return (
    <>
    <Stack.Screen  name ={navigationString.INTRO_SCREEN} component={AppIntroSlide} />
    </>
  )
}
export default introSlider