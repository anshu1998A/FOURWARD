import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import ButtonComponent from '../../../Component/Button';
import HeadComp from '../../../Component/Header';
import HomeCard from '../../../Component/HomeCard';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
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
      <HeadComp 
      leftImage={true}
      leftImageIcon={imagePaths.HOME_ICON}
      rightImage={true}
      rightImageIcon={imagePaths.LOCATION}
      
       />
      <ButtonComponent
        buttonText={strings.SIGN_OUT}
        textColor={colors.white}
        onpress={signOut}
      />
<ScrollView>
      <HomeCard 
      userProfile={imagePaths.INTRO_IMAGE}
      userName='USER NAME'
      location='Sector 28 D, Chandigarh'/>
</ScrollView>
    </WrapperContainer>
  );
};

export default Home;
