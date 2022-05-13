import React, { useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from 'react-native'
import ImageCropPicker from 'react-native-image-crop-picker'
import { useSelector } from 'react-redux'
import ButtonComponent from '../../../Component/Button'
import CountryCodePicker from '../../../Component/CountryCodePicker'
import HeadComp from '../../../Component/Header'
import TextInputComponent from '../../../Component/TextInput'
import WrapperContainer from '../../../Component/WrapperContainer'
import { UPLOAD_IMAGE, UPLOAD_POST } from '../../../config/urls'
import imagePaths from '../../../constants/imagePaths'
import strings from '../../../constants/lang'
import navigationString from '../../../navigation/navigationString'
import actions from '../../../redux/actions'
import colors from '../../../styles/colors'
import { moderateScaleVertical } from '../../../styles/responsiveSize'
import { apiPost } from '../../../utlis/utlis'
import styles from './styles'

const EditProfile = ({ navigation }) => {

  const userData = useSelector(state => state?.userStatus?.userData)
  console.log(userData, 'edit prof data');

  const [countryCode, setCountryCode] = useState('91');
  const [countryFlag, setCountryFlag] = useState('IN');

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profileImage: '',
    imageType: null,
  });
  const { firstName, lastName, email, phone, profileImage, imageType } = state;
  const changeHandler = data => setState(state => ({ ...state, ...data }));
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (userData) {
      setState({
        email: userData?.email,
        phone: userData?.phone,
        firstName: userData?.first_name,
        lastName: userData?.last_name,
        profileImage: userData?.profile,
      });
    }
  }, [userData]);

  const uploadImage = () => {
    ImageCropPicker.openPicker({
    }).then(image => {
      console.log("user Image:", image);
      _imageUpload(image);

    })
      .catch(e => {
        console.log(e, "error raised*********")
      })
  }

  const onEditProfile = () => {
    console.log(profileImage, "submitEditProfileData")
    let form = new FormData();
    form.append('first_name', firstName);
    form.append('last_name', lastName);
    form.append('email', email);
    form.append('image', {
      uri: profileImage,
      name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
      type: imageType,
    });

    actions
      .editDetails(form, { 'Content-Type': 'multipart/form-data' })
      .then(res => {
        console.log('editProfile api res_+++++', res);
        alert('profile updated');

        navigation.goBack();
      })
      .catch(err => {
        console.log(err, 'err');
        alert(err?.message);
      });
  };

  const _imageUpload = data => {
    console.log('data>>>', data);
    let image = data.sourceURL
    console.log("SELCTE PROFILE IMAGE+++++", image)
    // setIsLoading(true);
    const form = new FormData();
    form.append('image', {
      uri: image,
      name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
      type: 'image/jpeg',
    });
    let header = { 'Content-Type': 'multipart/form-data' }
    apiPost(UPLOAD_IMAGE, form, header).then(res => {
      console.log(res);
      changeHandler({ profileImage: res.data })
    }).catch(err => {
      alert(err)
    })

  };




  return (
    <WrapperContainer isLoading={isLoading} withModal={isLoading}>
      <HeadComp
        leftImage={true}
        leftImageIcon={imagePaths.back_Arrow}
        leftText={true}
        leftTextTitle={strings.EDIT_PROFILE}
        leftTextStyle={styles.headerTextStyle}
        onPress={() => navigation.navigate(navigationString.PROFILE)} />
      <ScrollView >
        < View style={styles.imageView} >
          <Image source={{ uri: profileImage }} style={styles.imageStyle} resizeMode="cover" />
          {/* 
          source={profileImage ? { uri: profileImage } : profileImage}  */}
          {/* <TouchableOpacity
            onPress={uploadImage}

            style={styles.imagePickerStyle}>
            {!!image && image !== "" ? (
              <Image
                source={{ uri: image }}
              />

            ) : (
              <Image
                style={styles.defaultImage}
                source={imagePaths.edit_image}
              />
            )}

          </TouchableOpacity> */}
          <TouchableOpacity style={styles.imagePickerStyle} onPress={uploadImage} >

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
                  onChangetext={(firstName) => changeHandler({ firstName })}
                  value={firstName}
                />
              </View>
              <View style={{ flex: 0.48 }}>

                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={strings.LAST_NAME}
                  placeholderTextColor={colors.sub_Text}
                  onChangetext={(lastName) => changeHandler({ lastName })}
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
            <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
              <View style={{ flex: 0.38, }}>
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
        behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View style={{
          paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20)
        }}>
          <ButtonComponent buttonText={strings.SAVE_CHANGES} textColor={colors.white} onPress={onEditProfile} />
        </View>
      </KeyboardAvoidingView>


      {/* <Modal isVisible={modalVisible}>
        <SafeAreaView style={{ backgroundColor: 'white', height: moderateScale(400)}}>
          <TouchableOpacity onPress={() => takePhotoFromLibrary()}>
            <View style={{backgroundColor:colors.sub_theme, height: height/20, margin: moderateScale(20), justifyContent:'center'}} >
              <Text >Take Image from gallery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => takePhotoFromCamera()}>
            <View  style={{backgroundColor:colors.sub_theme, height: height/20, margin: moderateScale(20), justifyContent:'center'}} >
              <Text>Take photo with Camera </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => takePhotoFromCamera()}>
            <View  style={{backgroundColor:colors.sub_theme, height: height/20, margin: moderateScale(20), justifyContent:'center'}} >
              <Text>Take photo with Camera </Text>
            </View>
          </TouchableOpacity >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View  style={{backgroundColor:colors.sub_theme, height: height/20, margin: moderateScale(20), justifyContent:'center'}} >
              <Text>HIDE OPTIONS</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>

      </Modal> */}
    </WrapperContainer>
  )
}

export default EditProfile









