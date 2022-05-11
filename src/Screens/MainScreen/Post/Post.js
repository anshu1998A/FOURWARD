import CameraRoll from "@react-native-community/cameraroll";
import React, { useEffect, useState } from 'react';
import { FlatList, Image, PermissionsAndroid, Text, TouchableOpacity, View, Alert } from 'react-native';
import ImageCropPicker from "react-native-image-crop-picker";
import HeadComp from '../../../Component/Header';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import strings from '../../../constants/lang';
import navigationString from "../../../navigation/navigationString";
import { height, moderateScale, width } from "../../../styles/responsiveSize";
import styles from './styles';

const Post = ({ navigation, route }) => {
  const [state, setState] = useState({
    photos: '',
    imageSelect: ''
  });
  const { photos, imageSelect } = state;
  const updateState = data => setState(state => ({ ...state, ...data }));

  // useEffect(() => {
  //   hasGalleryPermissions()
  // });
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
      first: 20,
      assetType: 'Photos',
    })
      .then(r => {
        updateState({ photos: r.edges })
        console.log("rtwddsfv", r)
        updateState({ imageSelect: r.edges[0].node.image.uri });
      })
      .catch(err => {
        console.log('error raised:', err);
      });
  }

  console.log("imageSelectimageSelect",imageSelect)
  useEffect(() => {
    hasGalleryPermissions()
  },[]);
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

  const launchGallery = () => {
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
        { text: "Cancel", onPress: () => console.log("OK Pressed"), style: "cancel" }
      ]
    );

  const selectImg = element => {
    console.log('selcted image data', element);
    updateState({ imageSelect: element.item.node.image.uri });
    // updateState({imageSelect: element.item.node.image.uri});

  }
  return (
    <WrapperContainer>
      <HeadComp leftText={true}
        leftTextTitle={strings.SELECT_PHOTO}
        leftTextStyle={styles.headTextStyle}
      />
      <Image
        source={{ uri: imageSelect }}
        style={{ height: height/2, width: width, resizeMode: 'cover', justifyContent: "flex-end" }}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.detailsView}>
          <Text>{strings.GALLERY}</Text>
          <Text>{strings.RECENT}</Text>
        </View>
        <FlatList data={photos}
          renderItem={(element, index) => {
            return (
              <TouchableOpacity
                onPress={() => selectImg(element)}
              // onPress={() => navigation.navigate(navigationString.ADD_INFO, { image: element.item.node.image })}
              >
                <Image
                  key={index}
                  source={{ uri: element.item.node.image.uri }}
                  style={styles.galleryPhoto} />

              </TouchableOpacity>
            )

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