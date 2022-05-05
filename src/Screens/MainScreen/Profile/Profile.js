import { GoogleSignin } from '@react-native-google-signin/google-signin'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import HeadComp from '../../../Component/Header'
import WrapperContainer from '../../../Component/WrapperContainer'
import imagePaths from '../../../constants/imagePaths'
import strings from '../../../constants/lang'
import navigationString from '../../../navigation/navigationString'
import actions from '../../../redux/actions'
import { height } from '../../../styles/responsiveSize'
import styles from './styles'

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
  navigation.navigate(navigationString.CAHNGE_PASSWORD)
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
            <Image source={imagePaths.user_Profile} />
          </View>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.optionTextStyle}>{strings.EDIT_PROFILE}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionAMinViewStyle} onPress={changePassword}>
          <View style={{ flex: 0.1 }}>
            <Image source={imagePaths.change_Password} />
          </View>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.optionTextStyle}>{strings.CHANGE_PASSWORD}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionAMinViewStyle} onPress={signOut} >
          <View style={{ flex: 0.1 }}>
            <Image source={imagePaths.signout} />
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