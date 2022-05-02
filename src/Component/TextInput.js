import React from 'react';
import {Image, StyleSheet, TextInput, View,Text,TouchableOpacity,} from 'react-native';
import colors from '../styles/colors';
// import fontfamily from '../styles/fontFamily';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';


const TextInputComponent = ({
  icon = '',
  img = '',
  placeholder = '',
  placeholderTextColor = '',
  leftIcon = false,
  rightIcon = false,
  onChangetext = '',
  keyboardtype,
  value = '',
  viewstyle,
  rightText=false,
  rightTextVal='fghbvbhnjk',
  showPassword,
  ...props
}) => {
  return (
    <View style={{...styles.viewcss,...viewstyle}}>
      {leftIcon && (
        <View style={{flex: 0.15}}>
          <Image source={icon} style={styles.image} />
        </View>
      )}

      <View style={{flex: 1, marginLeft: moderateScale(5)}}>
        <TextInput
          {...props}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={styles.inputtext}
          keyboardType={keyboardtype}
          value={value}
          onChangeText={onChangetext}
          keyboardAppearance={'dark'}
          keybo
        />
      </View>
      {rightText && (
        <View style={{flex: 0.15}}>
          <TouchableOpacity onPress={showPassword} >
          <Text style={{color:colors.sub_Text}}>{rightTextVal}</Text>
          </TouchableOpacity> 
        </View>
      )}

      {rightIcon && (
        <View style={{flex: 0.15}}>
          <Image source={img} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: moderateScale(30),
    width: moderateScale(30),
    marginHorizontal: moderateScale(5),
  },
  viewcss: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.sliderBGColor,
    borderRadius: moderateScale(10),
    marginRight: moderateScale(5),
    height: moderateScale(50),
  },
  inputtext: {
    paddingVertical: moderateScaleVertical(10),
    color: colors.white,
    flex: 1,
  },
});

export default TextInputComponent;