import { StyleSheet } from 'react-native'
import { height, moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'
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
    }

})