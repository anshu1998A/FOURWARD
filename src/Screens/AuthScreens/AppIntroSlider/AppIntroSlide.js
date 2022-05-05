import React from 'react';
import { Image, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import strings from '../../../constants/lang';
import actions from '../../../redux/actions';
import {
  moderateScale
} from '../../../styles/responsiveSize';
import { introStyles } from './style';

const slides = [
  {
    key: '1',
    image: imagePaths.intro_Image,
    tittle: strings.Intro,
    description: strings.tut_Des,
  },
  {
    key: '2',
    image: imagePaths.intro_Image,
    tittle: strings.Intro,
    description: strings.tut_Des,
  },
  {
    key: '3',
    image: imagePaths.intro_Image,
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
        <Text style={introStyles.getStartStyle}>{strings.GET_STARTED}</Text>
      </TouchableOpacity>
    );
  };

  const renderNextButton = () => {
    return <Text style={introStyles.getStartStyle}>{strings.NEXT}</Text>;
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
