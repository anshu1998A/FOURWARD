import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View, Alert } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import ButtonComponent from '../../../Component/Button';
import HeadComp from '../../../Component/Header';
import TextInputComponent from '../../../Component/TextInput';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import strings from '../../../constants/lang';
import colors from '../../../styles/colors';
import { height, moderateScale, moderateScaleVertical, width } from '../../../styles/responsiveSize';
import styles from './styles';

const AddInfo = ({ navigation, route }) => {
    const image = route?.params?.image;
    console.log("Selected image is : ", image);
    const [allValues, setAllValues] = useState({
        description: '',
        location: '',
        post: [],
        imageType: null,
    });

    const { description, location, post, imageType } = allValues
    
    const changeHandler = (val) => {
        setAllValues (allValues=>( { ...allValues, ...val }))
    }

    const launchCamera = () => {
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }

    const launchGallery = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        })
            .then(res => {
                changeHandler({ post: post.concat(res.path) });
                console.log('post', post);
            });
    }
    const selectImage = () =>
        Alert.alert(
            "Upload Image",
            "Choose an option",
            [
                {
                    text: "Camera",
                    onPress: launchCamera
                },
                {
                    text: "Gallery",
                    onPress: launchGallery,

                },
                { text: "Cancel", onPress: () => console.log("OK Pressed"), style: "cancel" }
            ]
        );

    return (
        <WrapperContainer>
            <HeadComp
                leftImage={true}
                leftImageIcon={imagePaths.back_Arrow}
                leftText={true}
                leftTextTitle={strings.ADD_INFO}
                leftTextStyle={styles.leftText} />
            <ScrollView style={{ height: height }} bounces={false}>
                <View style={{ flexDirection: 'row',flexWrap:'wrap'}}>

                    <View style={styles.imageView}>
                        <Image source={image} style={styles.imageStyle} />
                    </View>
                    {post?post.map((element, index) => {
                        return (
                        <View style={styles.imageView}>
                            <Image source={{uri: element}} style={styles.imageStyle} />
                        </View>
                        )
                    }) : null
                    }
                    <TouchableOpacity style={styles.addImageView} onPress={selectImage}>
                        <Image source={imagePaths.add} style={styles.addImage} />
                    </TouchableOpacity>
                </View>

                <View style={styles.descriptionView}>
                    <TextInputComponent
                        viewstyle={styles.inputView}
                        placeholder={strings.WRITE_DESCRIPTION}
                        placeholderTextColor={colors.whiteOpacity50}
                        value={description}
                        multiline={true}
                        onChangetext={(description) => changeHandler({ description })}
                    />
                </View>

                <View style={styles.locationView}>
                    <TextInputComponent
                        placeholder={strings.ADD_LOCATION}
                        placeholderTextColor={colors.whiteOpacity50}
                        value={location}
                        onChangetext={(location) => changeHandler({ location })}
                    />
                </View>
            </ScrollView>
            <KeyboardAvoidingView enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>
                    <ButtonComponent
                        buttonText={strings.POST}
                        textColor={colors.white} />
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default AddInfo