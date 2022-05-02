import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import {useSelector} from 'react-redux';
import ButtonComponent from '../../../Component/Button';
import WrapperContainer from '../../../Component/WrapperContainer';
import strings from '../../../constants/lang';
import actions from '../../../redux/actions';
import colors from '../../../styles/colors';

const Home = () => {
  const data = useSelector(state => state.userStatus);
  const User = data?.pass;
  const user = data?.email;
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      actions.Logout();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <WrapperContainer>
      <ButtonComponent
        buttonText={strings.SIGN_OUT}
        textColor={colors.white}
        onpress={signOut}
      />
    </WrapperContainer>
  );
};

export default Home;
