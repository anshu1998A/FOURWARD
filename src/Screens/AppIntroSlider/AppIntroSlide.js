import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Component/WrapperContainer';
import imagePaths from '../../constants/imagePaths';
import AppIntroSlider from 'react-native-app-intro-slider';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import LogIn from '../LogIn/LogIn';
import { introStyles } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import navigationString from '../../navigation/navigationString';
import actions from '../../redux/actions';

const AppIntroSlide = ({navigation}) => {

  
    const slides = [
        {
            key: '1',
            image: imagePaths.INTRO_IMAGE,
            tittle: 'Hendrerit vulputate sem',
            description: 'Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.'
        },
        {
            key: '2',
            image: imagePaths.INTRO_IMAGE,
            tittle: 'Hendrerit vulputate sem',
            description: 'Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.'

        },
        {
            key: '3',
            image: imagePaths.INTRO_IMAGE,
            tittle: 'Hendrerit vulputate sem',
            description: 'Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam aenean.'

        }
    ];

    const renederItem = ({item}) => {
        return(
            <View style={introStyles.tutMainStyle}>
                <View style={{ justifyContent: 'center', flex:0.5}}>
                <Image source={item.image} style={introStyles.tutImage} />
                </View>
                <View  style={{flex: 0.5,justifyContent: 'center'}}>
                <View style={introStyles.tittleTextView} >
                <Text style={introStyles.tittleText}>{item.tittle} </Text>
                </View>
                <View style={{marginHorizontal: moderateScale(25)}}>
                <Text  style={introStyles.desText}>{item.description}</Text>
                </View>
                </View>

            </View>
        )
    };

    const renderDoneButton = () => {
        return (
          <TouchableOpacity onPress={ () => {actions.Intro()}} >
           <Text style={introStyles.getStartStyle}>Get started</Text>
          </TouchableOpacity>
        );
      };

  
      const renderNextButton = () => {
        return (
          
           <Text style={introStyles.getStartStyle}>Next</Text>
        
        );
      };
    return (
   <WrapperContainer>           
                <AppIntroSlider
               data={slides}
               renderItem={renederItem}
               renderDoneButton={renderDoneButton}
               renderNextButton ={renderNextButton}
               activeDotStyle ={{height:moderateScale(10), width:moderateScale(40), backgroundColor:'red',bottom: height/100, right: moderateScale(90)}}
               dotStyle ={{height:moderateScale(10), width:moderateScale(20), backgroundColor:'grey',bottom: height/100, right: moderateScale(90)}}/> 
   </WrapperContainer>
  )
}

export default AppIntroSlide