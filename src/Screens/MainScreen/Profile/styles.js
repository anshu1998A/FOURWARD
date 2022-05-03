import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical, textScale } from '../../../styles/responsiveSize'
import colors from '../../../styles/colors'
const styles = StyleSheet.create({
    leftTextStyle: {
        fontSize: textScale(16),
        color: colors.white,
        fontWeight: 'bold'
    },
    optionAMinViewStyle: {
        marginHorizontal: moderateScale(20),
        flexDirection: 'row',
        marginVertical: moderateScaleVertical(10)
    },
    optionTextStyle:
    {
        fontSize: textScale(15),
        color: colors.white
    },

})
export default styles