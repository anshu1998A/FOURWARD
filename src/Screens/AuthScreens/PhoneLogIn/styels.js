import { StyleSheet } from 'react-native'
import colors from '../../../styles/colors'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../../styles/responsiveSize'
export const styles= StyleSheet.create({

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
    logInType:{
        flex:1,
        flexDirection:'row',
        marginVertical: moderateScale(20),
        marginHorizontal: moderateScaleVertical(20)
    },
    otpStyle:{
        fontSize:textScale(13),
        color: colors.white
    },
    fogetText:{
        fontSize: textScale(13),
        color: colors.forgot_Text
    }

})