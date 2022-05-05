import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../../Component/WrapperContainer';
import strings from '../../../constants/lang';
import colors from '../../../styles/colors';
import TextInputComponent from '../../../Component/TextInput';
import HeadComp from '../../../Component/Header';
import { styles } from './styles';
import ButtonComponent from '../../../Component/Button';
import navigationString from '../../../navigation/navigationString';
import imagePaths from '../../../constants/imagePaths';
import { moderateScaleVertical } from '../../../styles/responsiveSize';
import { useSelector } from 'react-redux';
import { CHANGE_PASSWORD } from '../../../config/urls';
import { apiPost } from '../../../utlis/utlis';


const ChangePassword = ({ navigation, route }) => {
    const userData = useSelector(state => state?.userStatus?.userData)
    console.log( " USERDATA FOR CHANGE PASSWORD", userData)



    const [allValues, setAllValues] = useState({
        oldPassword: '',
        newPassword: '',
    });
    const { oldPassword, newPassword } = allValues
    const changeHandler = (val) => {
        setAllValues({ ...allValues, ...val })
    }

    const [show, setShow] = useState();
    const [confirmShow, setConfirmShow] = useState();

    const showPassword = () => {
        setShow(!show);
    };

    const shownewPassword = () => {
        setConfirmShow(!confirmShow);
    };

    const changePassword = () => {
        let apiData = {
            user_id: userData?.id,
            password: newPassword,
        };
        apiPost(CHANGE_PASSWORD, apiData)
            .then(res => {
                alert("Password changes successfully")
                console.log(res, "NEW PASSWORD:")
            })
            .catch(e => {
                console.log(e, "error raised")
                alert("cdfgdc")
            })
    }

    return (
        <WrapperContainer>
            <HeadComp
                leftImage={true}
                leftImageIcon={imagePaths.back_Arrow}
                leftText={true}
                leftTextTitle={strings.CHANGE_PASSWORD}
                leftTextStyle={styles.leftTextStyle}
                onPress={() => navigation.navigate(navigationString.PHONE_LOGIN)} />

            <ScrollView >
                <View style={styles.mainContainer}>
                    <TextInputComponent
                        viewstyle={styles.inputView}
                        placeholder={strings.PASSWORD}
                        placeholderTextColor={colors.whiteOpacity50}
                        rightText={true}
                        rightTextVal={show ? strings.SHOW : strings.HIDE}
                        value={oldPassword}
                        showPassword={showPassword}
                        secureTextEntry={show}
                        onChangetext={(oldPassword) => changeHandler({ oldPassword })}
                    />

                    <TextInputComponent
                        viewstyle={styles.inputView}
                        placeholder={strings.CONFIRM_PSWRD}
                        placeholderTextColor={colors.whiteOpacity50}
                        rightText={true}
                        rightTextVal={confirmShow ? strings.SHOW : strings.HIDE}
                        value={newPassword}
                        showPassword={shownewPassword}
                        secureTextEntry={confirmShow}
                        onChangetext={(newPassword) => changeHandler({ newPassword })}
                    />
                </View>

            </ScrollView>
            <KeyboardAvoidingView enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
                <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>
                    <ButtonComponent buttonText={strings.CHANGE_PASSWORD}
                        textColor={colors.white}
                        onpress={changePassword}
                    />
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default ChangePassword