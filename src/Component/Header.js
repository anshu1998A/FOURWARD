import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import imagePaths from '../constants/imagePaths';
import colors from '../styles/colors';
import { moderateScale, moderateScaleVertical, textScale, width } from '../styles/responsiveSize';

function HeadComp({
  Title = '',
  color = '',
  style,
  right = false,
  rightTitle = '',
  left = false,
  onPress = '',
}) {
  return (
    <View
      style={{
        marginHorizontal: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {left && (
        <TouchableOpacity onPress={onPress}>

          <Image source={imagePaths.BACK_ARROW} style={styles.imagesize} />

        </TouchableOpacity>
      )}
      <Text
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imagesize: {
    height: moderateScale(width / 20 ,),
    width: moderateScale(width / 20,),
    marginVertical: moderateScaleVertical(10),
    marginLeft: moderateScale(20),
    resizeMode: 'contain'
  }
})
export default HeadComp;