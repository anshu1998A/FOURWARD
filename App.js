import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react';
// import Route from './src/navigation/route';
import Route from './src/navigation/Route'
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import actions from './src/redux/actions';
import { getItem } from './src/utlis/utlis';



const App = () => {
  useEffect(() => {
    getItem('data').then((res) => {
      if (!!res) {
        actions.Intro()
      }
    })


    GoogleSignin.configure()
    getItem('login').then((res) => {
      
      if (!!res) {
        console.log("res", res)
        actions.login(res)
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