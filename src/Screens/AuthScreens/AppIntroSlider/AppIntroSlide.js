import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
// import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../styles/responsiveSize';
import colors from '../../../styles/colors';
import fontFamily from '../../../styles/fontFamily';
import LogIn from '../LogIn/LogIn';
import {introStyles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import navigationString from '../../../navigation/navigationString';
import actions from '../../../redux/actions';
import WrapperContainer from '../../../Component/WrapperContainer';
import strings from '../../../constants/lang';

const slides = [
  {
    key: '1',
    image: imagePaths.INTRO_IMAGE,
    tittle: strings.Intro,
    description: strings.tut_Des,
  },
  {
    key: '2',
    image: imagePaths.INTRO_IMAGE,
    tittle: strings.Intro,
    description: strings.tut_Des,
  },
  {
    key: '3',
    image: imagePaths.INTRO_IMAGE,
    tittle: strings.Intro,
    description: strings.tut_Des,
  },
];

const AppIntroSlide = () => {
  const data = () => {
    actions.Intro(false);
  };

  const renederItem = ({item}) => {
    return (
      <View style={introStyles.tutMainStyle}>
        <View style={introStyles.mainDescription}>
          <Image source={item.image} style={introStyles.tutImage} />
        </View>
        <View style={introStyles.mainDescription}>
          <View style={introStyles.tittleTextView}>
            <Text style={introStyles.tittleText}>{item.tittle} </Text>
          </View>
          <View style={{marginHorizontal: moderateScale(25)}}>
            <Text style={introStyles.desText}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={data}>
        <Text style={introStyles.getStartStyle}>Get started</Text>
      </TouchableOpacity>
    );
  };

  const renderNextButton = () => {
    return <Text style={introStyles.getStartStyle}>Next</Text>;
  };
  return (
    <WrapperContainer>
      <AppIntroSlider
        data={slides}
        renderItem={renederItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        activeDotStyle={introStyles.activedote}
          dotStyle={introStyles.inactivedote}
      />
    </WrapperContainer>
  );
};

export default AppIntroSlide;
