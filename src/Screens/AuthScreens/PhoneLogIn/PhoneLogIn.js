import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ButtonComponent from '../../../Component/Button';
import CountryCodePicker from '../../../Component/CountryCodePicker';
import HeadComp from '../../../Component/Header';
import TextInputComponent from '../../../Component/TextInput';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import strings from '../../../constants/lang';
import navigationString from '../../../navigation/navigationString';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';
import { commonStyles } from '../../../styles/commonStyles';
import { moderateScale, moderateScaleVertical } from '../../../styles/responsiveSize';
import { showError } from '../../../utlis/helperFunctions';
import validator from '../../../utlis/validations';
import { styles } from './styels';
const PhoneLogIn = ({ navigation }) => {


  const [countryCode, setCountryCode] = useState('91');
  const [countryFlag, setCountryFlag] = useState('IN');
  const [isLoading, setIsLoading] = useState(false)

  const [data, setData] = useState({
    phoneNumber: '',
    password: '',
  })
  const { phoneNumber, password} = data


  const changeHandler = data => setData(state => ({ ...state, ...data }));

  const [show, setShow] = useState(!show);

  const showPassword = () => {
    setShow(!show);
  };

  const isValidData = () => {
    const error = validator({phoneNumber, password});
    if (error) {
   showError(error)
  alert(error)
      return;
    }
    return true;
  };

  const onLogin = async () => {

    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }

    let apiData = {
      phone: phoneNumber,
      phone_code: countryCode,
      device_token: 'KDKFJDKFDFKDFDF',
      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      password: password,
      loginType: 'admin'
    }

    try {
      setIsLoading(true)
      const res = await actions.login(apiData);
      console.log('Login api res_+++++', res);
      // actions.login;
      alert('User Login successfully....!!!');
      setIsLoading(false)
    } catch (error) {
      console.log('error raised', error);
      alert(error?.message);
    }

  }
  return (
    <WrapperContainer>
      <HeadComp
        leftImage={true}
        leftImageIcon={imagePaths.back_Arrow}
        onPress={() => { navigation.navigate(navigationString.LOGIN) }} />
      <ScrollView >
        <View style={styles.mainContainer}>
          <View>
            <Text style={commonStyles.commontext}>{strings.WELCOME_BACK}</Text>
            <Text style={commonStyles.commonsmailltext}>{strings.CREATE_CONTINUE}</Text>
          </View>
          <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flex: 0.38 }}>
                <CountryCodePicker
               countryCode={countryCode}
               countryFlag={countryFlag}
               setCountryCode={setCountryCode}
               setCountryFlag={setCountryFlag}
                />
              </View>
              <View style={{ flex: 0.57 }}>

                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={strings.MOBILE_NUMBER}
                  placeholderTextColor={colors.whiteOpacity50}
                  value={phoneNumber}
                  maxLength={10}
                  onChangetext={(phoneNumber) => changeHandler({ phoneNumber })}
                />
              </View>
            </View>
            <TextInputComponent
              viewstyle={styles.inputView}
              placeholder={strings.PASSWORD}
              placeholderTextColor={colors.whiteOpacity50}
              rightText={true}
              value={password}
              onChangetext={(password) => changeHandler({ password })}
              rightTextVal={show ? strings.SHOW : strings.HIDE}
              showPassword={showPassword}
              secureTextEntry={show}
            />

          </View>
          <View style={styles.logInType}>
            <View style={{ flex: 0.5 }}>

              <Text style={styles.otpStyle}>{strings.OTP_USE}</Text>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate(navigationString.SET_PASSWORD) }}
              style={{
                flex: 0.5,
                marginLeft: moderateScale(42)
              }}>
              <Text style={styles.fogetText}>{strings.FORGOT_PASSWORD}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

      <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View style={{ paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20) }}>
          <ButtonComponent buttonText={strings.LOGIN}
            textColor={colors.white}
            onPress={onLogin} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}


export default PhoneLogIn