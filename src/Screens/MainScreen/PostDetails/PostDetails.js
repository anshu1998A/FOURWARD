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
  const profile = route?.params?.postDetail;
  const bg = profile.userName;

  console.log("route?.params", route?.params)
  return (
  
      <ImageBackground source={profile?.postImage} style={styles.postImage} resizeMode='stretch'>
        <View style={styles.postDetails}>
          <View style={styles.headerView}>
            <View>
              <Image source={profile?.userProfile} style={styles.profileImage} />
            </View>
            <View style={{ flex: 0.8 }}>
              <Text style={{color:colors.white}}>{profile?.userName}</Text>
              <Text style={{color:colors.white}}>{profile?.location}</Text>
            </View>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>

              <Image source={imagePaths.cross}  />
            </TouchableOpacity>
          </View>

          <View style={{paddingVertical: 20}}>
            <Text style={{color:colors.white, fontSize:textScale(15)}}>{profile?.postDetail}</Text>
            <Text  style={{color:colors.white, fontSize:textScale(13)}}>{profile?.postTime}</Text>
            <ButtonComponent buttonText={strings.MAP}
              textColor={colors.white} />
          </View>
        </View>

      </ImageBackground>
  
  )
}

export default PostDetails