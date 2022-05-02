import { Text, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Component/WrapperContainer'
import strings from '../../constants/lang';
import colors from '../../styles/colors'
import TextInputComponent from '../../Component/TextInput'
import HeadComp from '../../Component/Header'
import { styles } from './styles';
import { commonStyles } from '../../styles/commonStyles'
import ButtonComponent from '../../Component/Button';
import navigationString from '../../navigation/navigationString';
import CountryCodePicker from '../../Component/CountryCodePicker';
import actions from '../../redux/actions';



const SignUp = ({ navigation }) => {


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
    if(password === confirmPassword){
    let apiData = {
      first_name: fisrt_name,
      last_name: last_name,
      email: email,
      phone: phone,
      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      password: password,
      confirmPassword: confirmPassword
    }
    console.log("user Data", apiData)
    try {
      const res = await actions.signUp(apiData)
      console.log("SignUp api Data is *************", res)
      actions.signUp(res)
      alert("User signup successfully....!!!")
      navigation.navigate(navigationString.OTP)
      // console.log("fdvbchdmjcyhdyuikduytvk", val)
    }
    catch (error) {
      console.log("error raised in signinup", error)
      alert(error?.message)
    }
  }
    else{
      alert("Password and confirm password does not match")
    }
  }
 
  return (
    <WrapperContainer>
      <HeadComp
        left={true}
        onPress={() => { navigation.navigate(navigationString.LOGIN) }} />
      <ScrollView >
        <View style={styles.mainContainer}>
          <View>
            <Text style={commonStyles.commontext}>{strings.WELCOME_BACK}</Text>
            <Text style={commonStyles.commonsmailltext}>{strings.CREATE_CONTINUE}</Text>
          </View>
          <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flex: 0.5 }}>
                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={strings.FIRST_NAME}
                  placeholderTextColor={colors.sub_Text}
                  onChangetext={(fisrt_name) => changeHandler({ fisrt_name })}
                  value={fisrt_name}
                />
              </View>
              <View style={{ flex: 0.5 }}>

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
              <View style={{ flex: 0.35 }}>
                <CountryCodePicker />
              </View>
              <View style={{ flex: 0.6 }}>

                <TextInputComponent
                  viewstyle={styles.inputView}
                  placeholder={strings.MOBILE_NUMBER}
                  placeholderTextColor={colors.whiteOpacity50}
                  value={null}
                  onChangetext={(phone) => changeHandler({ phone })}
                />
              </View>
            </View>
          </View>
          <TextInputComponent
            viewstyle={styles.inputView}
            placeholder={strings.PASSWORD}
            placeholderTextColor={colors.whiteOpacity50}
            rightText={true}
            rightTextVal={strings.SHOW}
            value={password}
            onChangetext={(password) => changeHandler({password})}
          />

          <TextInputComponent
            viewstyle={styles.inputView}
            placeholder={strings.CONFIRM_PSWRD}
            placeholderTextColor={colors.whiteOpacity50}
            rightText={true}
            rightTextVal={strings.SHOW}
            value={confirmPassword}
            onChangetext={(confirmPassword) => changeHandler({confirmPassword})}
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