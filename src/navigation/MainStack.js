import React from 'react';
import HomeStack from './HomeStack'
import navigationString from './navigationString';

export default function MainStack(Stack) {
  return (
    <>

     <Stack.Screen name={navigationString.HOMESTACK} component={HomeStack} />
    </>
  )
}