import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
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