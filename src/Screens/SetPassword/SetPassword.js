import { View, Text, ScrollView, Platform, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Component/WrapperContainer'
import HeadComp from '../../Component/Header';
import { commonStyles } from '../../styles/commonStyles';
import strings from '../../constants/lang';
import { height, moderateScaleVertical } from '../../styles/responsiveSize';
import { styles } from './styels';
import TextInputComponent from '../../Component/TextInput';
import colors from '../../styles/colors';
import ButtonComponent from '../../Component/Button';
import navigationString from '../../navigation/navigationString';



commonStyles

const SetPassword = ({navigation}) => {
    return (
        <WrapperContainer>
            <HeadComp
                left={true}
                onPress={() => navigation.navigate(navigationString.PHONE_LOGIN)}
            />
            <ScrollView>
                <View style={styles.mainContainer}>
                    <Text style={commonStyles.commontext}>{strings.SET_PSWRD}</Text>
                    <Text style={commonStyles.commonsmailltext}>{strings.SECURE_PASSWORD}</Text>
                    <View>
                    <View style={{marginTop: moderateScaleVertical(32)}}>
                        <TextInputComponent
                            viewstyle={styles.inputView}
                            placeholder={strings.PASSWORD}
                            placeholderTextColor={colors.whiteOpacity50}
                            rightText={true}
                            rightTextVal={strings.SHOW}
                        />
                        </View>
                        <View style={{marginTop: moderateScaleVertical(16)}}>
                        <TextInputComponent
                            viewstyle={styles.inputView}
                            placeholder={strings.CONFIRM_PSWRD}
                            placeholderTextColor={colors.whiteOpacity50}
                            rightText={true}
                            rightTextVal={strings.SHOW}
                        />
                    </View>
                    </View>
                </View>
            </ScrollView>
            <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android'?'height':'padding'}>
        <View style={{paddingBottom:Platform.OS=== 'ios'?moderateScaleVertical(45):moderateScaleVertical(20)}}>
          <ButtonComponent buttonText={strings.GET_STARTED}
            textColor={colors.white}
            onpress={() => { navigation.navigate(navigationString.HOME) }} />
        </View>
      </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default SetPassword