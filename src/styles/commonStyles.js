import {StyleSheet} from 'react-native';
import colors from './colors';
import {moderateScaleVertical, textScale} from './responsiveSize';
export const commonStyles = StyleSheet.create({
  commontext: {
    color: colors.white,
    fontSize: textScale(24),
  },
  commonsmailltext:{
    color: colors.sub_Text,
    fontSize: textScale(15),
    marginTop: moderateScaleVertical(10),
  },
  commonotptext:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: moderateScaleVertical(16),
  }
});