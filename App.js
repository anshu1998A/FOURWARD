import React, { useEffect } from 'react';
import Route from './src/navigation/Route';
import { Provider, useSelector } from 'react-redux';
import store from './src/redux/store';
import actions from './src/redux/actions';
import { getItem } from './src/utlis/utlis';
import FlashMessage from "react-native-flash-message";
import SplashScreen from 'react-native-splash-screen';


const App = () => {

  useEffect(() => {
    getItem('introdata').then((res)=>{
      console.log(res,"getItem>>>res");
      if(res != null){
        actions.Intro(res)
      }
    })

    getItem('userLogin').then(res => {
      console.log('store data------------', res);
      if (!!res) {
        actions.saveUserData(res);
      }
    });

    setTimeout(() => {
      SplashScreen.hide()
    }, 500);
  
  }, [])
  
  return (
    <>
    <FlashMessage position="top" />
    <Provider store={store}>
    <Route/>
    </Provider>
    </>

  )
}

export default App