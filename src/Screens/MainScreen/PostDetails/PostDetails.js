import { StyleSheet, ImageBackground, Text, Image, View, Platform, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import ButtonComponent from '../../../Component/Button';
import imagePaths from '../../../constants/imagePaths';
import strings from '../../../constants/lang';
import colors from '../../../styles/colors';
import styles from './styles';
import { textScale } from '../../../styles/responsiveSize';

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
              <Text style={{color:colors.white}}>{profile?.LOCATION}</Text>
            </View>
            <View>

              <Image source={imagePaths.cross} />
            </View>
          </View>

          <View >
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