import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Component/WrapperContainer'
import HeadComp from '../../Component/Header'
import navigationString from '../../navigation/navigationString'
import strings from '../../constants/lang'
import { styles } from './styles';
import ButtonComponent from '../../Component/Button'
import colors from '../../styles/colors'
import { height, moderateScale, textScale } from '../../styles/responsiveSize'
import TextInputComponent from '../../Component/TextInput'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const OtpScreen = ({ navigation, route }) => {

    const [otp, setOtp] = useState();
    // const apiData = route?.params?.data;
    // console.log(apiData, "esddsrfvrdzasxcvrtvfvrdftbgn");
    return (

        <WrapperContainer>
            <HeadComp
                left={true}
                onPress={() => { navigation.navigate(navigationString.SIGNUP) }} />
            <ScrollView>
                <View style={{ height: height }}>
                    <View style={styles.otpEnetrView}>
                        <Text style={styles.headText}>{strings.ENTER_CODE}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationString.SIGNUP)} style={styles.numEditView}>
                        <Text style={styles.editNum}> {strings.EDIT_MOBILE_NUM}</Text>
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
                            value={otp}
                            onTextChange={(otp) => setOtp(otp)}
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
                        onpress={() => navigation.navigate(navigationString.LOGIN)} />
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default OtpScreen