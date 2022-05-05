import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imagePaths from '../constants/imagePaths';
import strings from '../constants/lang';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import {
    height,
    moderateScale,
    moderateScaleVertical,
    textScale,
    width
} from '../styles/responsiveSize';

export default function HomeCard({
    userProfile = '',
    menuButton = '',
    postImage = '',
    name = false,
    onPress,
    userName = '',
    location = '',
    postDetails='',
    postTime=''
}) {


    return (
        <View style={styles.viewContainer}>
            <View style={styles.headView}>
                <View style={{ flexDirection: "row" }}>
                    <View >
                        <Image source={userProfile} style={styles.userProfile} />
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: moderateScale(10) }}>
                        <Text style={{ color: colors.white, fontSize: textScale(16) }} >{userName}</Text>
                        <Text style={{ color: '#AEAEAE' }} >{location}  </Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', height: height / 20 }}>
                    <Image source={imagePaths.setting} />
                </View>
            </View>
            <TouchableOpacity onPress={onPress}>
                <Image source={postImage} style={styles.postStyle} />
            </TouchableOpacity>
            <View style={{
                marginHorizontal: moderateScale(16),
                marginVertical: moderateScale(10)
            }}>
                <Text style={{ color: colors.white }}> {postDetails}</Text>
                <Text style={{ color: colors.whiteOpacity50 }}>{postTime}</Text>
            </View>
            <View
                style={styles.footerView}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: colors.white }}>Comments</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: colors.white, }}> {strings.LIKES} </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={imagePaths.direction} style={{ height: height/ 60 }} />
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
        marginHorizontal: moderateScale(16),
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
        height: moderateScale(width - 68),
        marginVertical: moderateScaleVertical(16),
        alignSelf: 'center',
    },
    headView:{ flexDirection: 'row', 
    paddingTop: moderateScale(15),
     justifyContent: "space-between", 
     alignItems: 'center',
      marginHorizontal: moderateScale(16) 
    },
    footerView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScaleVertical(16),
        flexWrap: "wrap",
        paddingBottom: moderateScale(12)
    }
});