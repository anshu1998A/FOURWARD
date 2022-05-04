import { StyleSheet, ImageBackground, Text } from 'react-native'
import React from 'react'
import WrapperContainer from '../../../Component/WrapperContainer'
import imagePaths from '../../../constants/imagePaths';
import { height, width } from '../../../styles/responsiveSize';

const PostDetails = ({navigation, route}) => {
    const profile = route?.params?.postDetail;
    const bg = profile.userName;

    console.log("profileb",bg)
  return (
   <WrapperContainer>
       <ImageBackground  source={imagePaths.PROFILE_IMAGE2} style={{height:height, width:width}} resizeMode='stretch'>
         
         <Text>{bg}</Text>
       </ImageBackground>
   </WrapperContainer>
  )
}

export default PostDetails

const styles = StyleSheet.create({})