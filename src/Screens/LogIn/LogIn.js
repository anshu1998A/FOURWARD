import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import WrapperContainer from '../../Component/WrapperContainer'
import imagePaths from '../../constants/imagePaths';
import { styles } from './style';
import strings from '../../constants/lang';
import ButtonComponent from '../../Component/Button';
import colors from '../../styles/colors';
import { height, moderateScale, textScale, width } from '../../styles/responsiveSize';
import navigationString from '../../navigation/navigationString';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import actions from '../../redux/actions';

const LogIn = ({ navigation }) => {


  // useEffect(() => {
    

  // }, [])
  // ***********************************GOOGLELOGIN*********************************************************************************************
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('user info', userInfo);
      const data = userInfo?.user;
      console.log("console after google Login---", data);
      actions.logIN(data)
      console.log(data, "google data");
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error raise', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error raise', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error raise', error);
      } else {
        // some other error happened
      }
    }
  };
  // *********************************************************************************************FB LOGIN*******************************************************************
  const fbLogIn = (resCallBack) => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log("fb result ****************", result);
        if (result.declinedPermissions && result.declinedPermissions.includes("email")) {
          resCallBack({ message: "Email is required" })
        }
        if (result.isCancelled) {
          // console.log("dxcfgvbhjn")
        } else {
          const infoRequest = new GraphRequest(
            'me?fields= email,name, picture',
            null,
            resCallBack
          );
          new GraphRequestManager().addRequest(infoRequest).start()
        }
      },
      function (errror) {
        console.log("login failed", errror)
      }
    )
  }

  const onFBlogIn = async () => {
    try {
      await fbLogIn(_resInfoCallback)
      console.log("data details",)

    } catch (error) {
      console.log("error raisedkl;kjh", error)
    }
  }

  const _resInfoCallback = async (error, result) => {
    if (error) {
      console.log("error raised at response", error)
      return;
    }
    else {
      const userData = result
      actions.login(userData)
      console.log("userData **********", userData)
    }
  }
  return (
    <WrapperContainer>

      <View style={{

        height: height,
      }}>
        <View style={{ flex: 0.45, alignItems: "center" }}>
          <Image source={imagePaths.LOGO_IMG} style={{
            width: moderateScale(width / 2.5),
            height: moderateScale(width / 2.5),
            resizeMode: 'contain',
            marginTop: moderateScale(50)
          }} />

          <Text style={styles.priavcyTrems}>{strings.PRIVACY_TERM}</Text>

        </View>
        <View style={{ flex: 0.55 }}>
          <ButtonComponent
            buttonText={strings.PHONE_LOGIN}
            textColor={colors.white}
            onpress={() => { navigation.navigate(navigationString.PHONE_LOGIN) }}
          />
          <Text style={styles.orText}> {strings.OR}</Text>
          <ButtonComponent leftIcon={true}
            icon={imagePaths.GOOGLE_LOGO}
            style={{ backgroundColor: "white", }}
            textColor={colors.black}
            buttonText={strings.GOOGLE_LOGIN}
            onpress={googleLogin} />
          <ButtonComponent
            leftIcon={true}
            icon={imagePaths.FACEBOOK_LOGO}
            style={{ backgroundColor: "white", }}
            textColor={colors.black}
            buttonText={strings.FACEBOOK_LOGIN}
            onpress={onFBlogIn} />
          <ButtonComponent
            leftIcon={true}
            icon={imagePaths.APPLE_LOGO}
            style={{ backgroundColor: "white", }}
            buttonText={strings.APPLE_LOGIN}
          />


          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: textScale(13), color: colors.white }}>{strings.NEW_USER}</Text>
            <TouchableOpacity onPress={() => { navigation.navigate(navigationString.SIGNUP) }} >
              <Text style={{ fontSize: textScale(13), color: colors.SIGNUP }}>{strings.SIGN_UP}</Text>
            </TouchableOpacity>
          </View>



        </View>

      </View>


    </WrapperContainer>

  );
};


export default LogIn;