import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonComponent from '../../../Component/Button';
import HeadComp from '../../../Component/Header';
import TextInputComponent from '../../../Component/TextInput';
import WrapperContainer from '../../../Component/WrapperContainer';
import { CHANGE_PASSWORD } from '../../../config/urls';
import imagePaths from '../../../constants/imagePaths';
import strings from '../../../constants/lang';
import navigationString from '../../../navigation/navigationString';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';
import { moderateScaleVertical } from '../../../styles/responsiveSize';
import { apiPost } from '../../../utlis/utlis';
import { styles } from './styles';


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

    const [show, setShow] = useState(!show);
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
                actions.Logout()
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
                        placeholder={strings.CURRENT_PASSOWRD}
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
                        placeholder={strings.NEW_PASSWORD}
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
                        onPress={changePassword}
                    />
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default ChangePassword