import { View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react';
import { styles } from './styels';
// import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import WrapperContainer from '../../../Component/WrapperContainer';
import strings from '../../../constants/lang';
import colors from '../../../styles/colors';
import ButtonComponent from '../../../Component/Button';
import HeadComp from '../../../Component/Header';
import navigationString from '../../../navigation/navigationString';
import { commonStyles } from '../../../styles/commonStyles';
import TextInputComponent from '../../../Component/TextInput';
import CountryCodePicker from '../../../Component/CountryCodePicker';
import actions from '../../../redux/actions';
import { moderateScale, moderateScaleVertical } from '../../../styles/responsiveSize';
import imagePaths from '../../../constants/imagePaths';

const PhoneLogIn = ({ navigation }) => {
  const [data, setData] = useState({
    phone: '',
    password: ''
  })
  const { phone, password } = data
  const updateData = data => setData(state => ({ ...state, ...data }));


  const onLogin = () => {
    console.log("login details", phone, password)
    let apiData = {
      phone: phone,
      phone_code: '91',
      device_token: 'scdsawwr67889ghghgh',
      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      loginType: 'admin',
      password: password,
    };

    actions.login(apiData).then(res => {
      console.log('LOGIN api DATA_+++++', res);
    })
      .catch(err => {
        console.log(err, "err");
        alert(err?.message);
      });
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
              <View style={{ flex: 0.35 }}>
                <CountryCodePicker />
              </View>
              <View style={{ flex: 0.6 }}>
                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={strings.PASSWORD}
                  placeholderTextColor={colors.whiteOpacity50}
                  value={phone}
                  onChangetext={(phone) => updateData({ phone })}

                />

              </View>
            </View>
            <TextInputComponent
              viewstyle={styles.inputView}
              placeholder={strings.PASSWORD}
              placeholderTextColor={colors.whiteOpacity50}
              rightText={true}
              value={password}
              onChangetext={(password) => updateData({ password })}
              rightTextVal={strings.SHOW}
            />

          </View>
          <View style={styles.logInType}>
            <View style={{ flex: 0.5 }}>

              <Text style={styles.otpStyle}>{strings.OTP_USE}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(navigationString.SET_PASSWORD)}
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
            onpress={onLogin} />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}


export default PhoneLogIn