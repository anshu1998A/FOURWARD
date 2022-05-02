import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

import {
    height,
    moderateScale,
    moderateScaleVertical,
    textScale,
    width,
} from '../../../styles/responsiveSize';

export const introStyles = StyleSheet.create({
    mainDiv: {
        backgroundColor: '#2E2E2E',
    },
    tutMainStyle: {
        backgroundColor:'#4C4C4C',
        borderRadius: moderateScale(10),
        alignSelf:  'center',
        marginTop: moderateScaleVertical(57),
        marginBottom: moderateScaleVertical(108),
        height: height - height / 4,
        width:  width - 60,
        justifyContent: 'center',
        
    },
    tittleTextView:
    {
        // width: moderateScale(280),
        // height: moderateScale(40),
    },
    tittleText:
    {
        color: '#FFFFFF',
        fontSize: textScale(22),
        textAlign: 'center'
    },
    desText:
    {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: textScale(13),
        padding: moderateScale(10)
    },
    tutImage:
    {
        width: moderateScale(width / 1.5),
        height: moderateScale(width / 1.5),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: moderateScaleVertical(100),
    },
    nextBtn: {
        color: colors.white,
        fontSize: textScale(15)
    },
    getStartStyle: {
        fontSize: textScale(15),
        color: colors.white,
        lineHeight: 32
    },
    activedote:{
        height: moderateScale(4),
        width: moderateScale(20),
        right: moderateScale(110),
        backgroundColor:"red",
        marginBottom:moderateScale(15)
    },
    inactivedote:{
        width: moderateScale(30),
        height: moderateScale(4),
        backgroundColor: "white",
        right: moderateScale(110),
        marginBottom:moderateScale(15)
    },
})