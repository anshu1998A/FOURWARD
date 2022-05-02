import React from 'react'
import AppIntroSlide from '../Screens/AuthScreens/AppIntroSlider/AppIntroSlide';
import navigationString from './navigationString';

const IntroSlider = (Stack) => {
  return (
    <>
    <Stack.Screen  name ={navigationString.INTRO_SCREEN} component={AppIntroSlide} />
    </>
  )
}
export default IntroSlider