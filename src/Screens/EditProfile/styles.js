import { StyleSheet, Text, View } from 'react-native'
import colors from '../../styles/colors'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'



const styles = StyleSheet.create({
    headerTextStyle:{
        color: colors.white,
        fontSize: textScale(16),
        fontWeight:'bold'
    }

})
export default styles