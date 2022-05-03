import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import HeadComp from '../../../Component/Header';
import HomeCard from '../../../Component/HomeCard';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import {ScrollView,View} from 'react-native';
import strings from '../../../constants/lang';

const Home = ({navigation, route}) => {
  const data = useSelector(state => state.userStatus);
  const User = data?.pass;
  const user = data?.email;
  const [state, setState] = useState({
    cardData: [
      {
        id: '1',
        userProfile: imagePaths.PROFILE_IMAGE1,
        postImage: imagePaths.POST_IMAGE1,
        userName: strings.USER_NAME1,
        LOCATION: strings.LOCATION,
      },
      {
        id: '2',
        userProfile: imagePaths.PROFILE_IMAGE1,
        postImage: imagePaths.POST_IMAGE1,
        userName: strings.USER_NAME1,
        LOCATION: strings.LOCATION,
      },
      {
        id: '3',
        userProfile: imagePaths.PROFILE_IMAGE1,
        postImage: imagePaths.POST_IMAGE1,
        userName: strings.USER_NAME1,
        LOCATION: strings.LOCATION,
      },
      {
        id: '4',
        userProfile: imagePaths.PROFILE_IMAGE1,
        postImage: imagePaths.POST_IMAGE1,
        userName: strings.USER_NAME1,
        LOCATION: strings.LOCATION,
      },
    ],
  });
  const {cardData} = state;

  return (
    <WrapperContainer>
      <HeadComp
        leftImage={true}
        leftImageIcon={imagePaths.HOME_ICON}
        rightImage={true}
        rightImageIcon={imagePaths.LOCATION}
      />

      <ScrollView>
        {cardData.map((item, index) => {
          return (
            <View key={index}>
              <HomeCard
                userProfile={item.userProfile}
                postImage={item.postImage}
                userName={item.userName}
                location={item.LOCATION}
              />
            </View>
          );
        })}
      </ScrollView>
    </WrapperContainer>
  );
};

export default Home;
