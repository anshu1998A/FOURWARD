import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textScale } from '../../../styles/responsiveSize'
import colors from '../../../styles/colors'
const styles = StyleSheet.create({
    leftTextStyle:{
        fontSize: textScale(16),
        color: colors.white
    }

})
export default styles