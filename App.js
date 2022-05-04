import React, { useEffect } from 'react';
import Route from './src/navigation/Route';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import actions from './src/redux/actions';
import { getItem } from './src/utlis/utlis';
import FlashMessage from "react-native-flash-message";


const App = () => {

  useEffect(() => {
    getItem('introdata').then((res)=>{
      console.log(res,"getItem>>>res");
      if(res != null){
        actions.Intro(res)
      }
    })

    

    getItem('login').then((res)=>{
      if(!!res){
        console.log("res",res)
        actions.logIN(res)
      }
    })
  
   
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