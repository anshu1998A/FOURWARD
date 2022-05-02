import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
export const styles= StyleSheet.create({
    headText:{
        fontSize: textScale(24),
        color: colors.white
    },
    otpEnetrView:{
        marginLeft: moderateScale(24),
        marginRight: moderateScale(23),
        paddingBottom:Platform.OS=== 'ios'?moderateScaleVertical(45):moderateScaleVertical(20)
    },
    editNum:{
        fontSize: textScale(15),
        color:colors.SIGNUP
    },
    numEditView:{
        marginHorizontal:moderateScale(20),
        marginVertical: moderateScale(15)
    },
    resendCode:{
        color: colors.white,
        fontSize: textScale(15)
    }
})