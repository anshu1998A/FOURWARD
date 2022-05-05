import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import ImagePicker from 'react-native-image-crop-picker'
import { useSelector } from 'react-redux'
import ButtonComponent from '../../../Component/Button'
import CountryCodePicker from '../../../Component/CountryCodePicker'
import HeadComp from '../../../Component/Header'
import TextInputComponent from '../../../Component/TextInput'
import WrapperContainer from '../../../Component/WrapperContainer'
import imagePaths from '../../../constants/imagePaths'
import strings from '../../../constants/lang'
import navigationString from '../../../navigation/navigationString'
import colors from '../../../styles/colors'
import { moderateScaleVertical } from '../../../styles/responsiveSize'
import styles from './styles'

const EditProfile = ({ navigation }) => {


 const userData = useSelector(state => state?.userStatus?.userData)
  console.log(userData, 'edit prof data');

  const [countryCode, setCountryCode] = useState('91');
  const [countryFlag, setCountryFlag] = useState('IN');

  console.log(DeviceInfo.getUniqueId())

  const [state, setState] = useState({
    firstName: userData?.first_name,
    lastName: userData?.last_name,
    email: userData?.email,
    phone: userData?.phone,
    profileImage:'',
    imageType:null,
  });
  const {firstName, lastName, email, phone, profileImage} = state;
  const changeHandler = data => setState(state => ({...state, ...data}));


  const uploadImage = () => {
    ImagePicker.openCamera({

    }). then(image =>{
      console.log("user Image:", image);
     
    })
    .catch(e =>{
      console.log("sedrftgyhujk")
    })
  }

  return (
    <WrapperContainer>
      <HeadComp
        leftImage={true}
        leftImageIcon={imagePaths.back_Arrow}
        leftText={true}
        leftTextTitle={strings.EDIT_PROFILE}
        leftTextStyle={styles.headerTextStyle}
        onPress={() => navigation.navigate(navigationString.PROFILE)} />
      <ScrollView >
        < View style={styles.imageView} >
          <Image source={imagePaths.profile_Image1} style={styles.imageStyle} resizeMode="cover" />


          <TouchableOpacity
            onPress={uploadImage}
            style={styles.imagePickerStyle}>

            <Image
              source={imagePaths.edit_image}
            />
          </TouchableOpacity>
        </View >
        <View style={styles.mainContainer}>
          <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flex: 0.48 }}>
                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={strings.FIRST_NAME}
                  placeholderTextColor={colors.sub_Text}
                  onChangetext={(fisrt_name) => changeHandler({ fisrt_name })}
                  value={firstName}
                />
              </View>
              <View style={{ flex: 0.48 }}>

                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={strings.LAST_NAME}
                  placeholderTextColor={colors.sub_Text}
                  onChangetext={(last_name) => changeHandler({ last_name })}
                  value={lastName}
                />
              </View>

            </View>
            <TextInputComponent
              viewstyle={styles.inputView}
              placeholder={strings.EMAIL}
              placeholderTextColor={colors.sub_Text}
              onChangetext={(email) => changeHandler({ email })}
              value={email}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flex: 0.38 }}>
                <CountryCodePicker
                  countryCode={countryCode}
                  countryFlag={countryFlag}
                  setCountryCode={setCountryCode}
                  setCountryFlag={setCountryFlag}
                />
              </View>
              <View style={{ flex: 0.57 }}>

                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={strings.MOBILE_NUMBER}
                  placeholderTextColor={colors.whiteOpacity50}
                  value={phone}

                  maxLength={10}
                  onChangetext={(phone) => changeHandler({ phone })}
                />
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
      <KeyboardAvoidingView enabled={true}
        behavior={Platform.OS == 'android' ? 'height' : 'padding'}
      >
        <View style={{
          paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20)
        }}>
          <ButtonComponent buttonText={strings.SAVE_CHANGES} textColor={colors.white} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default EditProfile









