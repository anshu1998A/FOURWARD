import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
// import {style} from '../Screens/Main/Home/style';
import {
    height,
    moderateScale,
    moderateScaleVertical,
    textScale,
    width,
} from '../styles/responsiveSize';
import imagePaths from '../constants/imagePaths';
import strings from '../constants/lang';
import colors from '../styles/colors';

export default function HomeCard({
    userProfile = '',
    menuButton = '',
    postImage = '',
    name = false,
    userName = '',
    location = '',
}) {
    return (
        <View style={styles.viewContainer}>
            <View style={{ flexDirection: 'row', paddingTop: moderateScale(15),justifyContent:"space-between",alignItems: 'center',marginHorizontal:moderateScale(16) }}>
                <View style={{flexDirection:"row"}}>
                <View >
                    <Image source={userProfile} style={styles.userProfile} />
                </View>
                <View style={{ justifyContent: 'center',marginLeft:moderateScale(10) }}>
                    <Text style={{ color: colors.white, fontSize: textScale(16) }} >{userName}</Text>
                    <Text style={{ color: '#AEAEAE' }} >{location}  </Text>
                </View>
                </View>
                <View style={{ justifyContent: 'center', height: height/20}}>
                    <Image source={imagePaths.DIRECTION} />
                </View>
            </View>
            <View>
                <Image source={userProfile} style={styles.postStyle} />
            </View>
            <View style={{ 
                marginHorizontal: moderateScale(16),
                marginVertical: moderateScale(10)
                }}>
              <Text style={{color:colors.white}}> {strings.LOREM_TEXT}</Text>
              <Text style={{color:colors.whiteOpacity50}}>{strings.TIME}</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: moderateScaleVertical(16),
                    flexWrap: "wrap",
                    paddingBottom: moderateScale(12)
                }}>
                <View style={{ alignItems: 'center' }}>
                    <Text  style={{color:colors.white}}>Comments</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{color:colors.white}}> {strings.LIKES} </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={imagePaths.DIRECTION} style={{ height: 10 }} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        width: moderateScale(width - 48),
        alignSelf: 'center',
        marginVertical: moderateScaleVertical(8),
        marginHorizontal :moderateScale(16),
        // backgroundColor:"pink",
        backgroundColor: '#4C4C4C',
        borderRadius: moderateScale(10),


    },
    userProfile: {
        height: moderateScale(width / 10),
        width: moderateScale(width / 10),
        borderRadius: moderateScale(width / 20),
    },

    textStyle: {
        fontSize: textScale(13),
        color: 'red',
    },
    postStyle: {
        width: moderateScale(width - 68),
        height: moderateScale(width - 40),
        marginVertical: moderateScaleVertical(16),
        alignSelf: 'center',
    },
});