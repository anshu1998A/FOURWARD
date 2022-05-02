import { View, Text } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Component/WrapperContainer'
import ButtonComponent from '../../Component/Button'
import strings from '../../constants/lang'
import colors from '../../styles/colors'
import actions from '../../redux/actions'
import { GoogleSignin } from '@react-native-google-signin/google-signin'


const Home = () => {


  const signOut =async() =>{
    try {
      await GoogleSignin.signOut();
      actions.Logout()
    } catch (error) {
      
    }
  }
  return (
    <WrapperContainer>
      <ButtonComponent buttonText={strings.SIGN_OUT} textColor={colors.white} onpress={signOut}/>
    </WrapperContainer>
  )
}

export default Home