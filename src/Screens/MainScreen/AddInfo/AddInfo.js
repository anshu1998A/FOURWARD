import React, { useEffect, useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import ButtonComponent from '../../../Component/Button';
import HeadComp from '../../../Component/Header';
import TextInputComponent from '../../../Component/TextInput';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import strings from '../../../constants/lang';
import navigationString from '../../../navigation/navigationString';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';
import { height, moderateScaleVertical } from '../../../styles/responsiveSize';
import styles from './styles';

const AddInfo = ({ navigation, route }) => {
    const image = route?.params?.image;
    console.log("Selected image is: ", image);
    const [allValues, setAllValues] = useState({
        description: '',
        location: '',
        post: [image],
        imageType: '',
    });

    const { description, location, post, imageType } = allValues
    // console.log("Selected image is+++++++++++++++++ : ", post);
    const changeHandler = (val) => { setAllValues(() => ({ ...allValues, ...val })) }

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
            .then(image => {
                uploadImage(image.path)
                console.log("dfvsg@@@@@@@@@", image)

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


    const cancelImage = (index) => {
        let newArray = [...post];
        newArray.splice(index, 1);
        changeHandler({ post: newArray });

    }
    const uploadImage = (image) => {
        const imageData = new FormData();
        imageData.append('image', {
            uri: image,
            name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
            type: 'image/jpeg',
        })
        actions.addImage(imageData, { "Content-Type": "multipart/form-data" })
            .then(res => {
                console.log("tdgxsgrdes********************gdcvfgd********", res)
                changeHandler({ post: post.concat(res.data) });

            })
            .catch(error => {
                console.log(error);
            });
    }

    const _postApi = () => {
        let apiData = new FormData();
        console.log("imageType", imageType)

        post.map((item, index) => {
            console.log('item', item);
            apiData.append('images[]', item)
        });

        apiData.append('description', description)
        apiData.append('latitude', 3.222)
        apiData.append('longitude', 9.45682)
        apiData.append('location_name', location)
        apiData.append('type', 11)

        console.log("Post API data : ", apiData)

        let header = { "Content-Type": "multipart/form-data" }
        actions.addpost(apiData, header)
            .then(res => {
                console.log("post api res_+++++", res)
                alert("post api hit successfully....!!!")
                navigation.navigate(navigationString.HOME)
            })
            .catch(err => {
                console.log(err, 'err');
                // alert(err?.message);
            });
    }
    return (
        <WrapperContainer>
            <HeadComp
                leftImage={true}
                leftImageIcon={imagePaths.back_Arrow}
                leftText={true}
                leftTextTitle={strings.ADD_INFO}
                leftTextStyle={styles.leftText} />
            <ScrollView style={{ height: height }} bounces={false}>
                <View style={{ flexDirection: 'row' }}>
                    <ScrollView horizontal={true}
                        bounces={false}
                        showsHorizontalScrollIndicator={false}>

                        {post ? post.map((element, index) => {
                            return (
                                <>
                                    <View style={styles.imageView}>
                                        <Image source={{ uri: element }} style={styles.imageStyle} />
                                        <View style={{ position: 'absolute', right: -10, top: -7 }}>
                                            <TouchableOpacity onPress={() => { cancelImage(index) }}>
                                                <Image
                                                    style={styles.crosssimage}
                                                    source={imagePaths.cross} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </>
                            )
                        }) : null
                        }
                        <TouchableOpacity style={styles.addImageView}
                            onPress={selectImage}
                        >
                            <Image source={imagePaths.add} style={[styles.addImage]} />
                        </TouchableOpacity>
                    </ScrollView>

                </View>

                <View style={styles.descriptionView}>
                    <TextInputComponent
                        viewstyle={styles.inputView}
                        placeholder={strings.WRITE_DESCRIPTION}
                        placeholderTextColor={colors.whiteOpacity50}
                        value={description}
                        multiline={true}
                        onChangetext={text => changeHandler({ description: text })}
                    />
                </View>

                <View style={styles.locationView}>
                    <TextInputComponent
                        placeholder={strings.ADD_LOCATION}
                        placeholderTextColor={colors.whiteOpacity50}
                        value={location}
                        onChangetext={(location) => changeHandler({ location })}
                    />
                    {/* <ActivityIndicator /> */}
                </View>
            </ScrollView>
            <KeyboardAvoidingView enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{
                    paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20)
                }}>
                    <ButtonComponent
                        buttonText={strings.POST}
                        textColor={colors.white}
                        onPress={_postApi} />
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default AddInfo