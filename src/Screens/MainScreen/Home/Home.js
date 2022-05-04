import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import HeadComp from '../../../Component/Header';
import HomeCard from '../../../Component/HomeCard';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import { ScrollView, View } from 'react-native';
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
        postImage: imagePaths.post_Image1,
        userName: strings.USER_NAME1,
        LOCATION: strings.LOCATION,
      },
      {
        id: '2',
        userProfile: imagePaths.profile_Image2,
        postImage: imagePaths.post_Image1,
        userName: strings.USER_NAME1,
        LOCATION: strings.LOCATION,
      },
      {
        id: '3',
        userProfile: imagePaths.profile_Image1,
        postImage: imagePaths.post_Image1,
        userName: strings.USER_NAME1,
        LOCATION: strings.LOCATION,
      },
      {
        id: '4',
        userProfile: imagePaths.profile_Image1,
        postImage: imagePaths.post_Image1,
        userName: 'strings.USER_NAME1',
        LOCATION: 'strings.LOCATION',
      },
    ],
  });
  const { cardData } = state;

  console.log("drvfstgyhuijnk", cardData)


  const renderItem = (item) => {


  }


  return (

    <WrapperContainer>
      <HeadComp
        leftImage={true}
        leftImageIcon={imagePaths.home_Icon}
        rightImage={true}
        rightImageIcon={imagePaths.location}
      />

      {/* <FlatList
        data={cardData}
        renderItem={(element, index) => {
          <HomeCard
            userProfile={element.item.userProfile}
            postImage={element.item.postImage}
            userName={element.item.userName}
            location={element.item.LOCATION}
            onPress={() => navigation.navigate(navigationString.POST_DETAILS, { postDetail: item })}
          />
        }}
      /> */}

      <ScrollView>
        {cardData.map((item, index) => {
          return (
            <View key={index}>
              <HomeCard
                userProfile={item.userProfile}
                postImage={item.postImage}
                userName={item.userName}
                location={item.LOCATION}
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
