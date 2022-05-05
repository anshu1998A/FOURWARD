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
import { showError } from '../../../utlis/helperFunctions';

const SignUp = ({ navigation }) => {

  const [countryCode, setCountryCode] = useState('91');
  const [countryFlag, setCountryFlag] = useState('IN');


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


  const isValidData = () => {
    const error = validator({first_Name , last_Name, email,  phoneNumber, password, confirmPassword});
    if (error) {
   showError(error)
  // alert(error)
      return;
    }
    return true;
  };


  const verifyData = async () => {

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
      const res = await actions.signUp(apiData);
      console.log('singnup api res_+++++', res);
      navigation.navigate(navigationString.OTP, { data: res?.data });
      alert('User signup successfully....!!!');
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