import { StyleSheet } from 'react-native'
import colors from '../../../styles/colors'
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../../styles/responsiveSize'


const styles = StyleSheet.create({
    headerTextStyle: {
        color: colors.white,
        fontSize: textScale(16),
        fontWeight: 'bold'
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: moderateScaleVertical(20),
        flexDirection: 'row',
    },
    imagePickerStyle: {
        height: moderateScale(width / 15),
        width: moderateScale(width / 15),
        alignSelf: 'flex-end',
        marginTop: moderateScaleVertical(-30),
        marginLeft: moderateScale(-30),
      },
    imageStyle: {
        height: moderateScale(width / 3.5),
        width: moderateScale(width / 3.5),
        borderRadius: moderateScale(width / 7),
    },
    nameView: {
        flexDirection: 'row',
        marginTop: moderateScaleVertical(20),
        marginHorizontal: 20
    },
    firstName: {
        marginHorizontal: moderateScale(24),
        flex: 0.48,
    },
    inputView: {
        marginTop: moderateScaleVertical(32)
    },
    mainContainer: {
        height: height,
        marginHorizontal: moderateScaleVertical(24),
    },

})
export default styles