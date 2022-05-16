import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
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
import { showError } from '../../../utlis/helperFunctions';
import validator from '../../../utlis/validations';
import { styles } from './styles';

const SignUp = ({ navigation }) => {

  const [countryCode, setCountryCode] = useState('91');
  const [countryFlag, setCountryFlag] = useState('IN');

  const [isLoading, setIsLoading] = useState(false)
  console.log(DeviceInfo.getUniqueId())


  // ****************************************************HIDE OR WHOW THE PASSWORD*****************************************
  const [show, setShow] = useState(!show);
  const [confirmShow, setConfirmShow] = useState(!confirmShow);

  const showPassword = () => {
    setShow(!show);
  };

  const showConfirmPassword = () => {
    setConfirmShow(!confirmShow);
  };
  // ********************************************STATE TO HANDLE TEXT INPUT VALUES************************************
  const [allValues, setAllValues] = useState({
    first_Name: '',
    last_Name: '',
    email: '',
    phoneNumber: '',
    device_type: '',
    password: '',
    confirmPassword: '',
  });
  const { first_Name, last_Name, email, phoneNumber, password, confirmPassword } = allValues
  const changeHandler = (val) => {
    setAllValues({ ...allValues, ...val })
  }

  // ****************************************************VALIDATIONS *******************************************************
  const isValidData = () => {
    const error = validator({ first_Name, last_Name, email, phoneNumber, password, confirmPassword });
    if (error) {
      showError(error)
      return;
    }
    return true;
  };


  const phoneSignUp = async () => {

    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }

    let apiData = {
      first_name: first_Name,
      last_name: last_Name,
      email: email,
      phone: phoneNumber,
      phone_code: countryCode,
      country_code: countryFlag,
      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      password: password,
      confirmPassword: confirmPassword,
      device_token: DeviceInfo.getUniqueId()

    }


    try {
      setIsLoading(true)
      const res = await actions.signUp(apiData);
      console.log('singnup api res_+++++', res);
      navigation.navigate(navigationString.OTP, { data: res?.data });
      alert('User signup successfully....!!!');
      setIsLoading(false)
    } catch (error) {
      console.log('error raised', error);

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
              <View style={{ flex: 0.48 }}>
                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={strings.FIRST_NAME}
                  placeholderTextColor={colors.sub_Text}
                  onChangetext={(first_Name) => changeHandler({ first_Name })}
                  value={first_Name}
                />
              </View>
              <View style={{ flex: 0.48 }}>

                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={strings.LAST_NAME}
                  placeholderTextColor={colors.sub_Text}
                  onChangetext={(last_Name) => changeHandler({ last_Name })}
                  value={last_Name}
                />
              </View>

            </View>
            <TextInputComponent
              viewstyle={styles.inputView}
              placeholder={strings.EMAIL}
              placeholderTextColor={colors.sub_Text}
              onChangetext={(email) => changeHandler({ email })}
              value={email}
            />
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
          </View>
          <TextInputComponent
            viewstyle={styles.inputView}
            placeholder={strings.PASSWORD}
            showPassword={showPassword}
            secureTextEntry={show}
            placeholderTextColor={colors.whiteOpacity50}
            rightText={true}
            rightTextVal={show ? strings.SHOW : strings.HIDE}
            value={password}
            onChangetext={(password) => changeHandler({ password })}
          />

          <TextInputComponent
            viewstyle={styles.inputView}
            placeholder={strings.CONFIRM_PSWRD}
            showPassword={showConfirmPassword}
            secureTextEntry={confirmShow}
            placeholderTextColor={colors.whiteOpacity50}
            rightText={true}
            rightTextVal={confirmShow ? strings.SHOW : strings.HIDE}
            value={confirmPassword}
            onChangetext={(confirmPassword) => changeHandler({ confirmPassword })}
          />
        </View>

      </ScrollView>
      <KeyboardAvoidingView enabled={true}>
        <View>
          <ButtonComponent buttonText={strings.NEXT} textColor={colors.white} onPress={phoneSignUp} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default SignUp