import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import imagePaths from '../constants/imagePaths';
import colors from '../styles/colors';
import { moderateScale, moderateScaleVertical, textScale, width } from '../styles/responsiveSize';

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
  ...props
}) {
  return (
    <View
      style={{
        marginHorizontal: moderateScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{ flex: 0.33, flexDirection: 'row' }}>
        {leftImage && (
          <TouchableOpacity  {...props} onPress={onPress}>
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
      <View style={{ flex: 0.33, flexDirection: 'row' }}>
        {rightImage && (
          <Image source={rightImageIcon} style={rightImageStyle} />
        )}
        {rightText && (
          <TouchableOpacity {...props}>
            <Text style={rightTextStyle}>{rightTitle}</Text>
          </TouchableOpacity>
        )}
      </View>
      {/* {left && (<View>

        <TouchableOpacity onPress={onPress}>

          <Image source={imagePaths.BACK_ARROW} style={styles.imagesize} />

        </TouchableOpacity>
      </View>
      )}
      {leftText && (
        <TouchableOpacity activeOpacity={1} {...props}>
          <Text style={leftTextStyle}>{leftTitle}</Text>
        </TouchableOpacity>
      )} */}
      {/* <Text
        style={{
          fontSize: textScale(20),
          color: colors.black,
        }}>
        {Title}
      </Text>
      {right && (
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              fontSize: textScale(20),
              color: colors.black,
            }}>
            {rightTitle}
          </Text>
        </TouchableOpacity>
      )} */}
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