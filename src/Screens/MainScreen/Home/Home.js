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
  const [state, setState] = useState([])
  const [count, setCount] = useState(0)
  const [onRefresh, setRefresh] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [like, setLike] = useState(0)

  const onLike = element => {
    let id = element.item.id
    console.log(id,element.item.like_status)
    if (element.item.like_status == 0) {
      setLike(like + 1)
    } else {
      setLike(like - 1)
    }
    let apiData = `?post_id=${id}&status=${like}`;
    console.log("apidata",apiData)
  }
  useEffect(() => {
    let apidata = `?skip=${count}`
    setIsLoading(true)
    actions.getPost(apidata).then((res) => {
      console.log("GET POST DATA+++++++++++++++++", res)
      setIsLoading(false)
      setState([...state, ...res?.data])
    })
  }, [count])

  const refresh = () => {
    // setRefresh(true)
    // newData()

  }
  const newData = () => {
    setCount(count - 8);
    setRefresh(false);
  }


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
        likeButton={() => { onLike(element) }}
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
          showsVerticalScrollIndicator={false}
          data={state}
          renderItem={renderItem}
          // onEndReachedThreshold={0.5}
          onEndReached={() => {
            // alert("jsgbhfbcjhcfgh")
            console.log('count++++++++++++++', count)
            setCount(count + 8)
          }}
          // onRefresh={refresh}
          // refreshing={onRefresh}
          
        />
      </View>
    </WrapperContainer>
  );
};

export default Home;
