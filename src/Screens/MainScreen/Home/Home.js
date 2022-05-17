import { error } from 'is_js';
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

  const onLike = (element) => {
    let id = element.item.id
    console.log(id, element.item.like_status)
    if (like === 0) {
      setLike(1)
    } else {
      setLike(0)
    }
    let apiData = `?post_id=${id}&status=${like}`;
    console.log("apidata", apiData)
    actions.getLike(apiData)
      .then((res) => {
        console.log("likePost____", res);
      })
      .catch((error) => {
        console.log(error)
      })

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
    setRefresh(true)
    newData()

  }
  const newData = () => {
    setCount(count - 8);
    setRefresh(false);
  }


  const postDetail = (element,image) =>{
    console.log("render ITEM*********************", element)
    navigation.navigate(navigationString.POST_DETAILS, {
      item: element,
      image: image
    })
    console.log(element,'mYgfImage');
  }
  const renderItem = (element, index) => {
   
    return (
      <HomeCard
        data={element}
        // onPress={() => navigation.navigate(navigationString.POST_DETAILS, { postDetail: element })}
        postNav={(image)=>postDetail( element,image)}
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
          onRefresh={refresh}
          refreshing={onRefresh}

        />
      </View>
    </WrapperContainer>
  );
};

export default Home;
