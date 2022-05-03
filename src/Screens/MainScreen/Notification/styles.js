import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../styles/colors'
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../../styles/responsiveSize'


const styles = StyleSheet.create({

    leftTextStyle: {
        color: colors.white,
        fontSize: textScale(16)
    },
    profileImageStyle: {
        height: height / 10,
        width: height / 10,
    },
    iconStyle: {
        height: moderateScale(40),
        width: moderateScale(40),
        marginHorizontal: 20,
        borderRadius: moderateScale(20)
    },
    mainView: {
        flexDirection: 'row',
        marginVertical: moderateScaleVertical(10),
        // backgroundColor:'pink'
    }
    ,
    notificationText: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    nameText: {
        fontSize: textScale(16),
        color: colors.sub_theme,

    },

    detailsText: {
        fontSize: textScale(16),
        color: colors.white,
    },
    timeText:{
        fontSize:textScale(12),
        color: colors.time_text
    }
})
export default styles