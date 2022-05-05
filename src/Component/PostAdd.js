import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import WrapperContainer from './WrapperContainer'

const PostAdd = ({
    Title = '',
    color = '',
    style,
    right = false,
    rightTitle = '',
    leftImage = false,
    leftImageSrc= '',
    onPress = '',
}) => {
    return (
        <WrapperContainer>
            <View>
                <View>
                    {leftImage && (
                        <TouchableOpacity onPress={onPress}>

                            <Image source={leftImageSrc} style={styles.imagesize} />

                        </TouchableOpacity>
                    )}

                </View>

                <View>

                </View>

                <View>

                </View>

            </View>
        </WrapperContainer>
    )
}

export default PostAdd

const styles = StyleSheet.create({})