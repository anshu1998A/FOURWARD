import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import HeadComp from '../../../Component/Header';
import HomeCard from '../../../Component/HomeCard';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import strings from '../../../constants/lang';
import navigationString from '../../../navigation/navigationString';

const Home = ({ navigation, route }) => {
  const data = useSelector(state => state.userStatus);
  const User = data?.pass;
  const user = data?.email;
  const [state, setState] = useState({
    cardData: [
      {
        id: '1',
        userProfile: imagePaths.profile_Image1,
        postImage: imagePaths.post_Image2,
        userName: strings.USER_NAME1,
        location: strings.LOCATION,
        postDetail: strings.LOREM_TEXT,
        postTime: strings.TIME
      },
      {
        id: '2',
        userProfile: imagePaths.profile_Image2,
        postImage: imagePaths.post_Image1,
        userName: strings.USER_NAME1,
        location: strings.LOCATION,
        postDetail: strings.LOREM_TEXT,
        postTime: strings.TIME
      },
      {
        id: '3',
        userProfile: imagePaths.profile_Image1,
        postImage: imagePaths.post_Image1,
        userName: strings.USER_NAME1,
        location: strings.LOCATION,
        postDetail: strings.LOREM_TEXT,
        postTime: strings.TIME
      },
      {
        id: '4',
        userProfile: imagePaths.profile_Image1,
        postImage: imagePaths.post_Image1,
        userName: 'strings.USER_NAME1',
        location: 'strings.LOCATION',
        postDetail: strings.LOREM_TEXT,
        postTime: strings.TIME
      },
    ],
  });
  const { cardData } = state;


  return (

    <WrapperContainer>
      <HeadComp
        leftImage={true}
        leftImageIcon={imagePaths.home_Icon}
        rightImage={true}
        rightImageIcon={imagePaths.location}
      />

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 20 }} >
        {cardData.map((item, index) => {
          return (
            <View key={index} >
              <HomeCard
                userProfile={item.userProfile}
                postImage={item.postImage}
                userName={item.userName}
                location={item.location}
                postDetails={item.postDetail}
                postTime={item.postTime}
                onPress={() => navigation.navigate(navigationString.POST_DETAILS, { postDetail: item })}

              />
            </View>
          );
        })}
      </ScrollView>
    </WrapperContainer>
  );
};

export default Home;
