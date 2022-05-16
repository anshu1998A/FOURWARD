import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonComponent from '../../../Component/Button';
import imagePaths from '../../../constants/imagePaths';
import strings from '../../../constants/lang';
import colors from '../../../styles/colors';
import { textScale } from '../../../styles/responsiveSize';
import styles from './styles';


const PostDetails = ({ navigation, route }) => {
  const profile = route?.params?.postDetail?.item?.user?.profile;
  const firstName = route?.params?.postDetail?.item?.user?.first_name;
  const image = route?.params?.postDetail?.item?.images?.file[0];
  const description = route?.params?.postDetail?.item?.description;
  const lastName= route?.params?.postDetail?.item?.user?.last_name;
  const location = route?.params?.postDetail?.item?.location_name;
  const postTime = route?.params?.postDetail?.item?.time_ago;
  console.log("uploaded image++++++", image)
  console.log("route?.params", route?.params?.postDetail)
  return (
  
      <ImageBackground source={{uri:image}} style={styles.postImage}>
        <View style={styles.postDetails}>
          <View style={styles.headerView}>
            <View>
              <Image source={{uri:profile}} style={styles.profileImage} />
            </View>
            <View style={{ flex: 0.8 }}>
              <View style={{flexDirection:'row'}}>
              <Text style={{color:colors.white}}>{firstName}</Text>
              <Text style={{color:colors.white}}>{lastName}</Text>
              </View>
              <Text style={{color:colors.white}}>{location}</Text>
            </View>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>

              <Image source={imagePaths.cross}  />
            </TouchableOpacity>
          </View>

          <View style={{paddingVertical: 20}}>
            <Text style={{color:colors.white, fontSize:textScale(15)}}>{description}</Text>
            <Text  style={{color:colors.white, fontSize:textScale(13)}}>{postTime}</Text>
            <ButtonComponent buttonText={strings.MAP}
              textColor={colors.white} />
          </View>
        </View>

      </ImageBackground>
  
  )
}

export default PostDetails