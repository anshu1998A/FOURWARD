import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
// import { styles } from './styles';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import WrapperContainer from '../../../Component/WrapperContainer'
import HeadComp from '../../../Component/Header'
import navigationString from '../../../navigation/navigationString';
import strings from '../../../constants/lang';
import ButtonComponent from '../../../Component/Button';
import colors from '../../../styles/colors';
import { height, moderateScale, textScale } from '../../../styles/responsiveSize';
import imagePaths from '../../../constants/imagePaths';
import styles from './styles';
import actions from '../../../redux/actions';

const OtpScreen = ({ navigation, route }) => {

    const apiData = route?.params?.data;
    console.log("NEW USER DATA IS:", apiData);

    const otp = apiData?.otp
    console.log(otp, 'otpdata--');

    const [code, setCode] = useState();

    
    const signupWithOtp = () =>{
        
        if (otp ==code) {
            actions.saveUserData(apiData)
            alert("Login successfully")
        } else {
            alert("otp is wrong")
        }
    }

    return (

        <WrapperContainer>
            <HeadComp
                leftImage={true}
                leftImageIcon={imagePaths.BACK_ARROW}
                onPress={() => { navigation.navigate(navigationString.PHONE_LOGIN) }} />
            <ScrollView>
                <View style={{ height: height }}>
                    <View style={styles.otpEnetrView}>
                        <Text style={styles.headText}>{strings.ENTER_CODE}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationString.SIGNUP)} style={styles.numEditView}>
                        <Text style={styles.editNum}> {strings.EDIT_MOBILE_NUM} {otp}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', flex: 1, marginLeft: moderateScale(20) }}>
                        <SmoothPinCodeInput
                            cellStyle={{
                                color: "white",
                                backgroundColor: colors.sub_Text,
                                borderRadius: moderateScale(8),
                            }}
                            textStyle={{
                                fontSize: textScale(14),
                                color: colors.white,
                            }}
                            value={code}
                            onTextChange={(otp) => setCode(otp)}
                            onBackspace={() => console.log("No more back.")}
                        />
                    </View>
                </View>


            </ScrollView>
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
                <View style={styles.otpEnetrView}>
                    <Text style={styles.resendCode}>{strings.RESEND_CODE}</Text>
                    <ButtonComponent buttonText={strings.VERIFY}
                        textColor={colors.white}
                        onpress={signupWithOtp}/>
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default OtpScreen