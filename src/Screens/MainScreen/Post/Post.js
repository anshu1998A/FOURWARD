import CameraRoll from "@react-native-community/cameraroll";
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, ImageBackground, PermissionsAndroid, Text, TouchableOpacity, View } from 'react-native';
import ImageCropPicker from "react-native-image-crop-picker";
import HeadComp from '../../../Component/Header';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import strings from '../../../constants/lang';
import actions from "../../../redux/actions";
import { height, width } from "../../../styles/responsiveSize";
import styles from './styles';

const Post = ({ navigation, route }) => {
  const [state, setState] = useState({
    photos: '',
    selctedImaged: ''
  });
  const { photos, selctedImaged } = state;
  const updateState = data => setState(state => ({ ...state, ...data }));

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

  const imagesData = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermissions())) {
      return;
    }
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then(r => {
        updateState({ photos: r.edges })
        // console.log("rtwddsfv", r)
        updateState({ selctedImaged: r.edges[0].node.image.uri });
      })
      .catch(err => {
        console.log('error raised:', err);
      });
  }

  // console.log("selctedImagedselctedImaged", selctedImaged)
  useEffect(() => {
    imagesData()
  }, []);
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


    const uploadImage = () =>{
      const imageData = new FormData();

        imageData.append('image', {
         uri: selctedImaged,
         name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
        //  type: imageType, 
        })
        console.log("selected image ++++++++++++++++++++",imageData);
        actions.addPost(imageData)
        .then(res =>{
            console.log("tdgxsgrdes",res)
            // updateState(res)
        })
        .catch(error => {
            console.log(error);
          });
    }
useEffect(() =>{
uploadImage()
},[])
  const selectImg = element => {
    console.log('selcted image data', element);
    updateState({ selctedImaged: element.item.node.image.uri });
    // updateState({selctedImaged: element.item.node.image.uri});

  }
  return (
    <WrapperContainer>
      <HeadComp leftText={true}
        leftTextTitle={strings.SELECT_PHOTO}
        leftTextStyle={styles.headTextStyle}
        rightImage={true}
        rightImageIcon={imagePaths.add_Post}
        rightIconPress={uploadImage}
      />
      <ImageBackground
        source={{ uri: selctedImaged }}
        style={{ height: height / 2, width: width, resizeMode: 'cover', justifyContent: "flex-end" }}>
        <Image />
      </ImageBackground>

      <View style={{ flex: 1 }}>
        <View style={styles.detailsView}>
          <View>
            <Text style={styles.headTextStyle}>{strings.GALLERY}</Text>
          </View>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View>
              <Text style={styles.headTextStyle}>{strings.RECENT}</Text>
            </View>
            <View >
              <Image source={imagePaths.drop_Down} />
            </View>
          </TouchableOpacity>
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