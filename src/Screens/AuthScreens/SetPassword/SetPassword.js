import { Text, View, ScrollView, KeyboardAvoidingView } from 'react-native'
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




const SetPassword = ({ navigation }) => {

  const [allValues, setAllValues] = useState({

    password: '',
    confirmPassword: '',
  });
  const { password, confirmPassword } = allValues
  const changeHandler = (val) => {
    setAllValues({ ...allValues, ...val })
  }

  return (
    <WrapperContainer>
      <HeadComp
        leftImage={true}
        leftImageIcon={imagePaths.BACK_ARROW}
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
            rightTextVal={strings.SHOW}
            value={password}
            onChangetext={(password) => changeHandler({ password })}
          />

          <TextInputComponent
            viewstyle={styles.inputView}
            placeholder={strings.CONFIRM_PSWRD}
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
          <ButtonComponent
            buttonText={strings.SAVE}
            textColor={colors.white}
            onpress={() => navigation.navigate(navigationString.LOGIN)}
          />
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default SetPassword