import { View, Text, Image } from 'react-native'
import React from 'react'
import WrapperContainer from '../../../Component/WrapperContainer'
import HeadComp from '../../../Component/Header'
import strings from '../../../constants/lang'
import styles from './styles'

const Profile = () => {
  return (
   <WrapperContainer>
    
      <HeadComp 
      leftText={true}
      leftTextTitle={strings.PROFILE}
      leftTextStyle ={styles.leftTextStyle}
     />

     <View>

     </View>

   </WrapperContainer>
  )
}

export default Profile