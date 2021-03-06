import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import imagePaths from '../constants/imagePaths';
import colors from '../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  width
} from '../styles/responsiveSize';




function CountryCodePicker({
setCountryCode,
setCountryFlag,
  countryCode ,
  countryFlag
}) {


  const onSelect = country => {
    setCountryFlag(country.cca2);
    setCountryCode(country.callingCode[0]);
  };

  return (
    <>
      <View style={style.countryview}>
        <CountryPicker
          onSelect={onSelect}
          visible={false}
          countryCode={countryFlag}
          withCallingCode={true}
          withCallingCodeButton={countryCode}
          withEmoji={true}
          theme={{
            onBackgroundTextColor: colors?.white,
            backgroundColor: colors?.sliderBGColor,
          }}
        />

        <Image
          source={imagePaths.drop_Down}
          style={{
            height: moderateScale(width / 24),
            width: moderateScale(width / 24),
            resizeMode: 'contain',
            marginLeft: moderateScaleVertical(5),
          }}
        />
      </View>
    </>
  );
}
const style = StyleSheet.create({
  countryview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: colors.sliderBGColor,
    borderRadius: moderateScale(10),
    height: moderateScale(50),
    marginTop: moderateScaleVertical(16),
  },
});

export default CountryCodePicker;