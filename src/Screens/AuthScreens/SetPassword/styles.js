import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
import { moderateScale, moderateScaleVertical, height, textScale } from '../../../styles/responsiveSize';
// import { height, moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
export const styles = StyleSheet.create({

    mainContainer:{
        height: height,
        marginHorizontal: moderateScaleVertical(24),
    },
    button:{
        marginHorizontal:moderateScaleVertical(24),
        marginBottom:moderateScale(10)
    },
    inputView:{
        marginTop: moderateScaleVertical(32)
    },
    leftTextStyle: {
        fontSize: textScale(16),
        color: colors.white,
        fontWeight: 'bold'
    },

})