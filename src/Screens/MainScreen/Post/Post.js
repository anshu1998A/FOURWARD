import CameraRoll from "@react-native-community/cameraroll";
import React, { useEffect, useState } from 'react';
import { FlatList, Image, PermissionsAndroid, Text, TouchableOpacity, View } from 'react-native';
import ImageCropPicker from "react-native-image-crop-picker";
import HeadComp from '../../../Component/Header';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import strings from '../../../constants/lang';
import styles from './styles';


const Post = () => {
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
      <FlatList data={photos}
        scrollEnabled={true}
        renderItem={(element) => {
          console.log("element", element)
          return (
            <>
              <Image source={{ uri: element.item.node.image.uri }}
                style={styles.galleryPhoto} />
            </>
          )
        }}
        numColumns={3}
      />
      <TouchableOpacity onPress={launchCamera} >
      <Image source={imagePaths.camera} style={styles.cameraIcon} />
      </TouchableOpacity>
    </WrapperContainer>
  )
}

export default Post