import React, { useEffect } from 'react';
import Route from './src/navigation/route';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import actions from './src/redux/actions';
import { getItem } from './src/utlis/utlis';



const App = () => {


  useEffect(() => {
    getItem('intro').then((res)=>{
      console.log(res,"getItem>>>res");
      if(res != null){
        actions.Intro()
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
    <Provider store={store}>
      <Route />
    </Provider>

  )
}

export default App