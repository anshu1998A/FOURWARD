import { View, Text } from 'react-native'
import React from 'react'
import WrapperContainer from '../../../Component/WrapperContainer'
import strings from '../../../constants/lang'
import HeadComp from '../../../Component/Header'
import ButtonComponent from '../../../Component/Button'
import ImageCropPicker from 'react-native-image-crop-picker'

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