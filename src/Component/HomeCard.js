import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imagePaths from '../constants/imagePaths';
import strings from '../constants/lang';
import colors from '../styles/colors';
import { isArray, isEmpty } from 'lodash';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
    height,
    moderateScale,
    moderateScaleVertical,
    textScale,
    width
} from '../styles/responsiveSize';

export default function HomeCard({
    likeButton,
    postNav = '',
    data = {}
}) {
    const [snapState, setSnapState] = useState(0);

    return (
        <View style={styles.viewContainer}>
            <View style={styles.headView}>
                <View style={{ flexDirection: "row" }}>
                    <View >
                        <Image source={{ uri: data.item.user.profile }} style={styles.userProfile} />
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: moderateScale(10) }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: colors.white, fontSize: textScale(16) }}>
                                {data.item.user.first_name} {data.item.user.last_name}
                            </Text>
                        </View>
                        <Text style={{ color: '#AEAEAE' }} >{data.item.location_name}  </Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', height: height / 20 }}>
                    <Image source={imagePaths.setting} />
                </View>
            </View>
            <View >
                {!!(
                    data?.item?.images?.file &&
                    isArray(data?.item?.images?.file) &&
                    data?.item?.images?.file.length
                ) ? (
                    <>
                        <Carousel
                            data={data?.item?.images?.file}
                            sliderWidth={moderateScale(width - 65)}
                            itemWidth={moderateScale(width - 20)}
                            scrollEnabled={data?.item?.images?.file.length > 1 ? true : false}
                            horizontal
                            onSnapToItem={index => setSnapState(index)}
                            renderItem={(i) => {
                                if (i.item != null && typeof i.item != 'object') {
                                    return (
                                        <TouchableOpacity activeOpacity={1} onPress={() => postNav(i.item)}>
                                            <Image
                                                source={{ uri: i.item }}
                                                style={styles.postImage}
                                            />
                                        </TouchableOpacity>
                                    );
                                }
                            }}
                        />
                    </>
                ) : null}

                {/* Pagination dots */}
                <Pagination
                    dotsLength={
                        !!(
                            data?.item?.images?.file &&
                            isArray(data?.item?.images?.file) &&
                            data?.item?.images?.file.length > 1
                        )
                            ? data?.item?.images?.file.length
                            : []
                    }
                    activeDotIndex={snapState}
                    containerStyle={{ paddingVertical: 0, marginTop: 0 }}
                    dotColor={'red'}
                    dotStyle={{ width: 12, height: 12, borderRadius: 12 / 2 }}
                    inactiveDotStyle={{ width: 20, height: 20, borderRadius: 20 / 2 }}
                    inactiveDotColor={'black'}
                    inactiveDotOpacity={0.4}
                    activeOpacity={0.8}
                    dotContainerStyle={{ marginHorizontal: 2 }}
                />
            </View>
            <View style={{
                marginHorizontal: moderateScale(16),
                marginVertical: moderateScale(10)
            }}>
                <Text style={{ color: colors.white }}>{data.item.description}</Text>
                <Text style={{ color: colors.whiteOpacity50 }}>{data.item.time_ago}</Text>
            </View>
            <View
                style={styles.footerView}>
                <TouchableOpacity style={{ alignItems: 'center' }} >
                    <Text style={{ color: colors.white }} > {strings.COMMENTS} {data.item.comment_count}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center' }} onPress={likeButton}>
                    <Text style={{ color: colors.white, }}> {strings.LIKES} {data.item.like_count}  </Text>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={imagePaths.direction} style={{ height: height / 60 }} />
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
        height: height / 1.5,
        marginVertical: moderateScaleVertical(16),
        alignSelf: 'center',
    },
    headView: {
        flexDirection: 'row',
        paddingTop: moderateScale(15),
        justifyContent: "space-between",
        alignItems: 'center',
        marginHorizontal: moderateScale(16)
    },
    footerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScaleVertical(16),
        flexWrap: "wrap",
        paddingBottom: moderateScale(12)
    },
    postImage: {
        width: moderateScale(width - 50),
        height: moderateScale(width - 40),
        marginVertical: moderateScaleVertical(10),
        alignSelf: 'center',
    },
});