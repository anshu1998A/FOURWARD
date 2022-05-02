import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { moderateScale, textScale } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';

const ButtonComponent = ({
    buttonText = '',
    rightIcon = false,
    btn = false,
    onpress, icon,
    leftIcon = false,
    style = {},
    textColor=colors.black,
}) => {
    return (

        <TouchableOpacity onPress={onpress}>
            <View style={{ ...buttonStyles.buttonView, ...style }} >
                <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center', }}>
                    {leftIcon && (<Image source={icon} style={buttonStyles.image} />)}
                </View>
                <View>
                    <Text style={{...buttonStyles.textStyle, color:textColor}}> {buttonText} </Text>
                </View>
                <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
                    {rightIcon && (<Image source={icon} style={buttonStyles.image} />)}
                </View>

            </View>
        </TouchableOpacity>
    )

}

const buttonStyles = StyleSheet.create({
    buttonView: {
        alignItems: 'center',
        backgroundColor: '#F43738',
        borderRadius: moderateScale(8),
        margin: moderateScale(10),
        justifyContent: 'space-between',
        width: moderateScale(328),
        height: moderateScale(48),
        alignSelf: 'center',
        flexDirection: 'row',


    }, btn: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: moderateScale(4),
        margin: moderateScale(10),
        // justifyContent: 'center',
        width: moderateScale(250),
        height: moderateScale(40),
        // alignSelf: 'center',
        // fontFamily: fontFamily.MULISh_BOLD
    },
    textStyle: {
        fontSize: textScale(14),
        fontFamily: fontFamily.MULISH_REGULAR
    },
    image: {
        height: moderateScale(20),
        width: moderateScale(20),
        resizeMode: 'contain',
        marginLeft: moderateScale(15)

    },

});
export default ButtonComponent;