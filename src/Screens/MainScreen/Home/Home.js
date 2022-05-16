import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import HeadComp from '../../../Component/Header';
import HomeCard from '../../../Component/HomeCard';
import WrapperContainer from '../../../Component/WrapperContainer';
import imagePaths from '../../../constants/imagePaths';
import navigationString from '../../../navigation/navigationString';
import actions from '../../../redux/actions';

const Home = ({ navigation, route }) => {
  const data = useSelector(state => state.userStatus);
  const [state, setState] = useState()
  const [count, setCount] = useState(0)
  const [ onRefress,setRefresh]=useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let apidata = `?skip=${count}`
    setIsLoading(true)
    actions.getPost(apidata).then((res) => {
      console.log("GET POST DATA+++++++++++++++++", res)
      setIsLoading(false)
      setState(res?.data)
    })
  }, [count])


  // const onRefresh = () => {
  //   setRefresh(true);
  //   fetchData();
  // };
  // const fetchData = () => {
  //   setCount(count - 1)
  //   setRefresh(false);
  // };
  // const { cardData } = state;
  const renderItem = (element, index) => {
    console.log("render ITEM*********************", element)
    return (
      <HomeCard
        userProfile={element.item.user.profile}
        userName={element.item.user.first_name}
        lastName={element.item.user.last_name}
        location={element.item.location_name}
        postImage={element.item.images.file[0]}
        postDetails={element.item.description}
        postTime={element.item.time_ago}
        commentCount={element.item.comment_count}
        likesCount={element.item.like_count}
        onPress={() => navigation.navigate(navigationString.POST_DETAILS, { postDetail: element })}
      />
    )

  }

  return (

    <WrapperContainer isLoading={isLoading} withModal={isLoading}>
      <HeadComp
        leftImage={true}
        leftImageIcon={imagePaths.home_Icon}
        rightImage={true}
        rightImageIcon={imagePaths.location}
      />
      <View>
        <FlatList
          data={state}
          renderItem={renderItem}
          // keyExtractor=
          onEndReached={() => {
            console.log('count++++++++++++++', count)
            setCount(count + 1)


          }}
          // onRefresh={onRefresh}
          // refreshing={onRefress}
        />
      </View>
    </WrapperContainer>
  );
};

export default Home;
