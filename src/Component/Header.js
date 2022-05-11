import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, moderateScaleVertical, width } from '../styles/responsiveSize';

function HeadComp({
  // Title = '',
  color = '',
  style,
  // right = false,
  // rightTitle = '',
  leftText = false,
  leftImage = false,
  leftImageStyle = '',
  leftImageIcon = '',
  leftTextTitle ='',
  leftTextStyle = '',

  centerText = false,
  centerImage = false,
  centerImageStyle = '',
  centerImageIcon = '',
  centerTextStyle = '',


  rightText = false,
  rightImage = false,
  rightImageStyle = '',
  rightImageIcon = '',
  rightTextStyle = '',

  onPress = '',
  rightIconPress,
  ...props
}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginHorizontal: moderateScale(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:moderateScaleVertical(20),
        // marginTop: moderateScale(20)
        // backgroundColor:'pink'
      }}>
      <View style={{  flexDirection: 'row', justifyContent:'space-between',  }}>
        {leftImage && (
          <TouchableOpacity  {...props} onPress={()=>navigation.goBack()} style={{alignSelf:'center',marginRight: moderateScale(16)}}>
            <Image source={leftImageIcon} style={leftImageStyle} />
          </TouchableOpacity>
        )}
        {leftText && (
          <TouchableOpacity  {...props}>
            <Text style={leftTextStyle}>{leftTextTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 0.33, flexDirection: 'row' }}>
        {centerImage && (
          <Image source={centerImage} style={centerImageStyle} />
        )}
        {centerText && (
          <TouchableOpacity {...props}>
            <Text style={centerTextStyle}>{centerText}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 0.33, flexDirection: 'row', justifyContent:'flex-end' }}>
        {rightImage && (
          <TouchableOpacity onPress={rightIconPress}>

            <Image source={rightImageIcon} style={rightImageStyle} />
          </TouchableOpacity>
        )}
        {rightText && (
          <TouchableOpacity {...props}>
            <Text style={rightTextStyle}>{rightTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagesize: {
    height: moderateScale(width / 20,),
    width: moderateScale(width / 20,),
    marginVertical: moderateScaleVertical(10),
    marginLeft: moderateScale(20),
    resizeMode: 'contain'
  },
})
export default HeadComp;