import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Component/WrapperContainer'
import HeadComp from '../../Component/Header'
import imagePaths from '../../constants/imagePaths'
import strings from '../../constants/lang'
import styles from './styles'
import navigationString from '../../navigation/navigationString'
import TextInputComponent from '../../Component/TextInput'
import colors from '../../styles/colors'
import CountryCodePicker from '../../Component/CountryCodePicker'
import { height, moderateScale } from '../../styles/responsiveSize'

const EditProfile = ({ navigation }) => {

  const [allValues, setAllValues] = useState({
    fisrt_name: '',
    last_name: '',
    email: '',
    phone: '',
    device_type: '',
  });
  const { fisrt_name, last_name, email, phone } = allValues
  const changeHandler = (val) => {
    setAllValues({ ...allValues, ...val })
  }
  return (
    <WrapperContainer>
      <HeadComp
        leftImage={true}
        leftImageIcon={imagePaths.BACK_ARROW}
        leftText={true}
        leftTextTitle={strings.EDIT_PROFILE}
        leftTextStyle={styles.headerTextStyle}
        onPress={() => navigation.navigate(navigationString.PROFILE)} />
      <View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={imagePaths.PROFILE_IMAGE1} style={{ borderRadius: height / 2 }} />
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{ marginHorizontal: moderateScale(24), flex:0.48 }}>
            <TextInputComponent />
          </View>
          <View style={{  flex:0.48  }}>
            <TextInputComponent />
          </View>
        </View>
      </View>
      {/* <View> </View>
        <View></View>
        <View></View>
        <View></View> */}
    </WrapperContainer>
  )
}

export default EditProfile