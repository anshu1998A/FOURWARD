import React from "react";
import {StyleSheet} from 'react-native';
import colors from "../../../styles/colors";
// import colors from "../../../styles/colors";

import fontFamily from "../../../styles/fontFamily";
import {
    height,
    moderateScale,
    moderateScaleVertical,
    textScale,
    width,
} from '../../../styles/responsiveSize';

export const styles = StyleSheet.create({
    logoView: {
        backgroundColor: '#2E2E2E',
    },
        phoneview: {
        backgroundColor: '#2E2E2E',
        justifyContent:'center',
        alignItems:'center',
        height: height - height/2,
        marginTop: 80
       
    },
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        backgroundColor: '#2E2E2E',
    },
    
    logoimage: {

        width: moderateScale(121),
        height: moderateScale(178)

    },
    privacyView:{
      
        height: moderateScale(48),
        // lineHeight:20
        // width: moderateScale(328),
        // marginVertical: 30
        
    },
    priavcyTrems:{
        color: '#9C9C9C',
        fontSize: textScale(13),
        textAlign: 'center',
        marginLeft: moderateScale(24),
        marginRight: moderateScale(23),
        paddingVertical:moderateScale(16),paddingTop:moderateScaleVertical(50)
        
        // lineHeight:16

    },
    orView:{
       
      

    },
    orText:{
        color: colors.white,
        fontSize: textScale(16),
        textAlign:'center'

    }

})