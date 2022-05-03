import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import WrapperContainer from '../../../Component/WrapperContainer'
import HeadComp from '../../../Component/Header'
import strings from '../../../constants/lang'
import styles from './styles'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../../styles/responsiveSize'
import imagePaths from '../../../constants/imagePaths'
import colors from '../../../styles/colors'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import actions from '../../../redux/actions'
import navigationString from '../../../navigation/navigationString'

const Profile = ({navigation}) => {

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      actions.Logout();
    } catch (error) {
      console.error(error);
    }
  };

  const editProfile = () =>{
    navigation.navigate(navigationString.EDIT_PROFILE)
  }
const changePassword = () => {
  navigation.navigate(navigationString.SET_PASSWORD)
}
  return (
    <WrapperContainer>
      <HeadComp
        leftText={true}
        leftTextTitle={strings.PROFILE}
        leftTextStyle={styles.leftTextStyle}
      />

      <View  style={{height:height,  flexDirection:'column'}}>

        <TouchableOpacity style={styles.optionAMinViewStyle} onPress={editProfile} >
          <View style={{ flex: 0.1 }}>
            <Image source={imagePaths.USER_PROFILE} />
          </View>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.optionTextStyle}>{strings.EDIT_PROFILE}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionAMinViewStyle} onPress={changePassword}>
          <View style={{ flex: 0.1 }}>
            <Image source={imagePaths.CHANGE_PASSWORD} />
          </View>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.optionTextStyle}>{strings.CHANGE_PASSWORD}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionAMinViewStyle} onPress={signOut} >
          <View style={{ flex: 0.1 }}>
            <Image source={imagePaths.SIGNOUT} />
          </View>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.optionTextStyle}>{strings.SIGN_OUT}</Text>
          </View>
        </TouchableOpacity>

      </View>



    </WrapperContainer>
  )
}

export default Profile