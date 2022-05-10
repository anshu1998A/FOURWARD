import { StyleSheet } from 'react-native'
import colors from '../../../styles/colors'
import { moderateScale, moderateScaleVertical, textScale, width } from '../../../styles/responsiveSize'


const styles = StyleSheet.create({
    leftText: {
        fontSize: textScale(16),
        fontWeight: '600',
        color: colors.white
    },
    imageView: {
        marginLeft: moderateScale(24),
        marginTop: moderateScale(16)
    },
    imageStyle: {
        height: width / 4,
        width: width / 4,
        borderRadius: moderateScale(8)
    },
    addImageView: {
        backgroundColor: colors.sliderBGColor,
        height: width / 4,
        width: width / 4,
        borderRadius: moderateScale(8),
        marginLeft: moderateScale(24),
        marginTop: moderateScale(16),
        justifyContent: 'center',
        alignItems: 'center'
    },
    // addImage:{
    //     justifyContent:'center'
    // }
    descriptionView: {
        backgroundColor: colors.sliderBGColor,
        height: moderateScale(96),
        width: width - 24,
        margin: moderateScale(10),
        borderRadius: moderateScale(8),
        marginTop: moderateScale(16),
    },
    descriptionText: {
        marginLeft: moderateScale(16),
        // marginTop: moderateScaleVertical(8),
        fontSize: textScale(14),
        color: colors.whiteOpacity50
    },
    locationView:{
        backgroundColor: colors.sliderBGColor,
        // height: width/3,
        height: moderateScale(48),
        width: width - 24,
        margin: moderateScale(10),
        borderRadius: moderateScale(8)
    },
    inputView: {
        height: moderateScale(48),
        width: width - 24,
    }
})
export default styles