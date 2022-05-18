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
  const image = route?.params?.image;
  const data = route?.params?.item;

  console.log("route params", image )
  return (

    <ImageBackground source={{ uri: image }} style={styles.postImage}>
      <View style={styles.postDetails}>
          
        <View style={styles.headerView}>
            <View>
              <Image source={{ uri: data?.item?.user?.profile }} style={styles.profileImage} />
            </View>
            <View style={{ flex: 0.8 }}>
              <View style={{flexDirection:'row'}}>
              <Text style={{color:colors.white}}>{data?.item?.user?.first_name}</Text>
              <Text style={{color:colors.white}}>{data?.item?.user?.last_name}</Text>
              </View>
              <Text style={{color:colors.white}}>{data?.item?.location_name}</Text>
            </View>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>

              <Image source={imagePaths.cross}  />
            </TouchableOpacity>
          </View>

        <View style={{paddingVertical: 20}}>
            <Text style={{color:colors.white, fontSize:textScale(15)}}>{data?.item?.description}</Text>
            <Text  style={{color:colors.white, fontSize:textScale(13)}}>{data?.item?.time_ago}</Text>
            <ButtonComponent buttonText={strings.MAP}
              textColor={colors.white} />
          </View>
      </View>

    </ImageBackground>

  )
}

export default PostDetails