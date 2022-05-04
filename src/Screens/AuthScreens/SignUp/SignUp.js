import { Text, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../../Component/WrapperContainer';
import strings from '../../../constants/lang';
import colors from '../../../styles/colors';
import TextInputComponent from '../../../Component/TextInput';
import HeadComp from '../../../Component/Header';
import { styles } from './styles';
import { commonStyles } from '../../../styles/commonStyles';
import ButtonComponent from '../../../Component/Button';
import navigationString from '../../../navigation/navigationString';
import actions from '../../../redux/actions';
import CountryCodePicker from '../../../Component/CountryCodePicker';
import validator from '../../../utlis/validations';
import imagePaths from '../../../constants/imagePaths';
import DeviceInfo from 'react-native-device-info'

const SignUp = ({ navigation }) => {

  const [countryCode, setCountryCode] = useState('91');
  const [countryFlag, setCountryFlag] = useState('IN');

  // const onSelect = country => {
  //   setCountryFlag(country.cca2);
  //   setCountryCode(country.callingCode[0]);
  // };

  console.log(DeviceInfo.getUniqueId())


  // ****************************************************HIDE OR WHOW THE PASSWORD*****************************************
  const [show, setShow] = useState();
  const [confirmShow, setConfirmShow] = useState();

  const showPassword = () => {
    setShow(!show);
  };

  const showConfirmPassword = () => {
    setConfirmShow(!confirmShow);
  };

  const [allValues, setAllValues] = useState({
    fisrt_name: '',
    last_name: '',
    email: '',
    phone: '',
    device_type: '',
    password: '',
    confirmPassword: '',
  });
  const { fisrt_name, last_name, email, phone, password, confirmPassword } = allValues
  const changeHandler = (val) => {
    setAllValues({ ...allValues, ...val })
  }

  const verifyData = async () => {

    let apiData = {
      first_name: fisrt_name,
      last_name: last_name,
      email: email,
      phone: phone,
      phoneCode: countryCode,
      county_Code: countryFlag,
      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      password: password,
      confirmPassword: confirmPassword,
      device_token: DeviceInfo.getUniqueId()

    }


    try {
      const res = await actions.signUp(apiData);
      console.log('singnup api res_+++++', res);
      navigation.navigate(navigationString.OTP, { data: res?.data });
      alert('User signup successfully....!!!');
    } catch (error) {
      console.log('error raised', error);
      // showSuccess(error?.message);
    }

  }

  return (
    <WrapperContainer>
      <HeadComp
        leftImage={true}
        leftImageIcon={imagePaths.BACK_ARROW}
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
                  onChangetext={(fisrt_name) => changeHandler({ fisrt_name })}
                  value={fisrt_name}
                />
              </View>
              <View style={{ flex: 0.48 }}>

                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={strings.LAST_NAME}
                  placeholderTextColor={colors.sub_Text}
                  onChangetext={(last_name) => changeHandler({ last_name })}
                  value={last_name}
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
                  value={phone}
                  maxLength={10}
                  onChangetext={(phone) => changeHandler({ phone })}
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
            rightTextVal={strings.SHOW}
            value={password}
            onChangetext={(password) => changeHandler({ password })}
          />

          <TextInputComponent
            viewstyle={styles.inputView}
            placeholder={strings.CONFIRM_PSWRD}
            showPassword={showConfirmPassword}
            secureTextEntry={show}
            placeholderTextColor={colors.whiteOpacity50}
            rightText={true}
            rightTextVal={strings.SHOW}
            value={confirmPassword}
            onChangetext={(confirmPassword) => changeHandler({ confirmPassword })}
          />
        </View>

      </ScrollView>
      <KeyboardAvoidingView enabled={true}>
        <View>
          <ButtonComponent buttonText={strings.NEXT} textColor={colors.white} onpress={verifyData} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default SignUp