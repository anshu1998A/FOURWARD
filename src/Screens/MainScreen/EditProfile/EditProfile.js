import React, { useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View, SafeAreaView, Text } from 'react-native'
import { useSelector } from 'react-redux'
import ButtonComponent from '../../../Component/Button'
import CountryCodePicker from '../../../Component/CountryCodePicker'
import HeadComp from '../../../Component/Header'
import TextInputComponent from '../../../Component/TextInput'
import WrapperContainer from '../../../Component/WrapperContainer'
import imagePaths from '../../../constants/imagePaths'
import strings from '../../../constants/lang'
import navigationString from '../../../navigation/navigationString'
import actions from '../../../redux/actions'
import colors from '../../../styles/colors'
import { height, moderateScale, moderateScaleVertical } from '../../../styles/responsiveSize'
import styles from './styles'
import Modal from 'react-native-modal'
import ImageCropPicker from 'react-native-image-crop-picker'
import { setItem } from '../../../utlis/utlis'

const EditProfile = ({ navigation }) => {

  const userData = useSelector(state => state?.userStatus?.userData)
  console.log(userData, 'edit prof data');

  const [countryCode, setCountryCode] = useState('91');
  const [countryFlag, setCountryFlag] = useState('IN');
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState("")

  const [state, setState] = useState({
    firstName: userData?.first_name,
    lastName: userData?.last_name,
    email: userData?.email,
    phone: userData?.phone,
    profileImage: '',
    imageType: null,
  });
  const { firstName, lastName, email, phone, profileImage } = state;
  const changeHandler = data => setState(state => ({ ...state, ...data }));

  useEffect(() => {
    if (userData) {
      setState({
        email: userData?.email,
        phone: userData?.phone,
        firstName: userData?.first_name,
        lastName: userData?.last_name,
        profileImage: userData?.profileImage,
      });
    }
  }, [userData]);


  const onEditProfile = async () => {
    let apiData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
    }

    actions
      .editDetails(apiData)
      .then(res => {
        console.log('editProfile api res_+++++', res);
        alert('profile updated')
        navigation.goBack();
      }).catch(err => {
        console.log(err, 'err');
        alert(err?.message);
      });
  }

  // const takePhotoFromCamera = async () => {
  //   // const permissionStatus = await androidCameraPermission();
  //   // if (permissionStatus) {
  //   ImageCropPicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //     multiple: false,
  //   }).then((image) => {
  //     console.log(image, "image from camera");
  //     imageUpload(image.path);
  //     setModalVisible(!modalVisible);
  //   });
  //   // }
  // };



  // const imageUpload = async (imagePath) => {
  //   const imgData = new FormData();
  //   imgData.append("image", {
  //     uri: imagePath,
  //     name: "image.png",
  //     fileName: "image",
  //     type: "image/png",
  //   });
  //   setImage(imgData?._parts[0][1]?.uri, "IMAGE")
  //   .then(image => {
  //         console.log("user Image:", image);
  //         changeHandler({
  //           profileImage: image?.sourceURL || image?.path,
  //           imageType: image?.mime,
  //         })

  //       })
  //         .catch(e => {
  //           console.log(e, "error raised*********")
  //         })
  // };

  const takePhotoFromLibrary = async () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: false,
    }).then((image) => {
      console.log(image, "image from library");
      uploadImage(image.path);
      setModalVisible(!modalVisible);
    });
    // }
  };


  const uploadImage = () => 
  {
    ImageCropPicker.openPicker({
    }).then(image => {
      console.log("user Image:", image);
      changeHandler({
        profileImage: image?.sourceURL || image?.path,
        imageType: image?.mime,
      })

    })
      .catch(e => {
        console.log(e, "error raised*********")
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
          <Image source={profileImage ? { uri: profileImage } : imagePaths.profile_Image1} style={styles.imageStyle} resizeMode="cover" />


          <TouchableOpacity
            // onPress={() => setModalVisible(true)}
            onPress={takePhotoFromLibrary}

            style={styles.imagePickerStyle}>
            {!!image && image !== "" ? (
              <Image
                source={{ uri: image }}
              // style={styles.defaultImage}
              />
              // <Image source={{ uri: profileImage }} style={styles.imageStyle} resizeMode="cover" />
            ) : (
              <Image
                style={styles.defaultImage}
                source={imagePaths.edit_image}
              />
            )}


            {/* <Image
              source={imagePaths.edit_image}
            /> */}
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









