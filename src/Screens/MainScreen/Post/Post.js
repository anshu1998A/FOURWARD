import { View, Text } from 'react-native'
import React from 'react';
// import CameraRoll from "@react-native-community/cameraroll";
import WrapperContainer from '../../../Component/WrapperContainer'
import ButtonComponent from '../../../Component/Button'

const Post = () => {

  // const uploadImage = () => {
  //   ImageCropPicker.openPicker({
  //   }).then(image => {
  //     console.log("user Image:", image);
  //     imageUpload(image.path)
  //     changeHandler({
  //       profileImage: image?.sourceURL || image?.path,
  //       imageType: image?.mime,
  //     })

  //   })
  //     .catch(e => {
  //       console.log(e, "sedrftgyhujk")
  //     })
  // }
  return (
    <WrapperContainer>
      <ButtonComponent  />
    </WrapperContainer>
  )
}

export default Post