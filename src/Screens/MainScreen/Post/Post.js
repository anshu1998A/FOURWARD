import CameraRoll from "@react-native-community/cameraroll";
import React, { useEffect, useState } from 'react';
import { FlatList, Image, PermissionsAndroid, Text, TouchableOpacity, View, Alert } from 'react-native';
import ImageCropPicker from "react-native-image-crop-picker";
import HeadComp from '../../../Component/Header';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import strings from '../../../constants/lang';
import navigationString from "../../../navigation/navigationString";
import styles from './styles';

const Post = ({navigation, route}) => {
  const [state, setState] = useState({
    photos: []
  });
  const { photos } = state;

  useEffect(() => {
    hasGalleryPermissions()
  });
  // ***************************************************Android Permissions*************************************************
  const hasAndroidPermissions = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermissions = await PermissionsAndroid.check(permission);

    if (hasPermissions) {
      return true
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted'
  };

  const hasGalleryPermissions = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermissions())) {
      return;
    }
    CameraRoll.getPhotos({
      first: 200,
      assetType: 'Photos',
    })
      .then(r => {
        setState({ photos: r.edges });
        console.log("rtwddsfv", r)
      })
      .catch(err => {
        console.log('erre', err);
      });
  }
  // **************************************************************LAUNCH CAMERA****************************************

  const launchCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }

const launchGallery = () =>{
  ImageCropPicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
  });
}
  const selectImage = () =>
    Alert.alert(
      "Upload Image",
      "Choose an option",
      [
        {
          text: "Camera",
          onPress: launchCamera
        },
        {
          text: "Gallery",
          onPress: launchGallery,
          
        },
        { text: "Cancel", onPress: () => console.log("OK Pressed") ,style: "cancel"}
      ]
    );
  return (
    <WrapperContainer>
      <HeadComp leftText={true}
        leftTextTitle={strings.SELECT_PHOTO}
        leftTextStyle={styles.headTextStyle}
      />
      <View style={styles.detailsView}>
        <Text>{strings.GALLERY}</Text>
        <Text>{strings.RECENT}</Text>
      </View>
      <View style={{flex: 1}}>
      <FlatList data={photos}
        scrollEnabled={true}
        renderItem={(element) => {
          // console.log("element", element)
          let index = element.index
          // console.log("index of images is:", index)
          if (index == 0) {
            return (
              <View>
                <Image
                style={styles.firstImage}
                  key={index}
                  source={{ uri: element.item.node.image.uri }}
                />
              </View>
            )
          }
          else {
            return (
              <TouchableOpacity onPress={() => navigation.navigate(navigationString.ADD_INFO, {image:element.item.node.image})}>
              <Image
                key={index}
                source={{ uri: element.item.node.image.uri }}
                style={styles.galleryPhoto} />
                </TouchableOpacity>
            )
          }
        }}
        numColumns={3}
      />
      <TouchableOpacity onPress={selectImage} >
        <Image source={imagePaths.camera} style={styles.cameraIcon} />
      </TouchableOpacity>
      </View>
    </WrapperContainer>
  )
}

export default Post