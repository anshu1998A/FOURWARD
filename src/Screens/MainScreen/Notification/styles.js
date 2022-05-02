import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../styles/colors'
import { height, textScale, width } from '../../../styles/responsiveSize'


const styles = StyleSheet.create({

    leftTextStyle: {
        color: colors.white,
        fontSize: textScale(16)
    },
    profileImageStyle:{
        height: height/10,
        width: height/10,
    }
})
export default styles