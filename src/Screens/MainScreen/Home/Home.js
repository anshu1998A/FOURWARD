import { error } from 'is_js';
import { cloneDeep } from 'lodash';
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
  const [isLoading, setIsLoading] = useState(true)
  const [like, setLike] = useState(0)


  console.log("State'''''", state)
  const onLike = (element) => {
    let id = element.item.id
    let likeStatus = Number(element.item.like_status) ? 0 : 1
    console.log(likeStatus, "likeStatus");

    let apiData = `?post_id=${id}&status=${likeStatus}`;
    console.log("apidata", apiData)
    actions.getLike(apiData)
      .then((res) => {
        console.log("likePost____", res);
        let newArray = cloneDeep(state)
        newArray = newArray.map((i, inx) => {
          if (i?.id == id) {
            i.like_status = likeStatus,
              i.like_count = likeStatus ? Number(i?.like_count) + 1 : Number(i?.like_count) - 1
            return i
          } else {
            return i
          }
        })
        setState(newArray)
        console.log(newArray, "newArray");
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(()=>{
    console.log(state,"updated state");

  },[state])


  useEffect(() => {
    if (isLoading || onRefresh) {

      let apidata = `?skip=${count}`
      // setIsLoading(true)
      console.log('apidata---------', apidata)
      actions.getPost(apidata).then((res) => {
        console.log("GET POST DATA+++++++++++++++++", res)
        setIsLoading(false)
        setRefresh(false)
        if (onRefresh) {
          setState(res?.data)
        } else {
          setState([...state, ...res?.data])
        }

      })
    }
  }, [isLoading, onRefresh])

  const refresh = () => {
    setCount(0)
    setRefresh(true)
    // newData()

  }


  const postDetail = (element, image) => {
    //  console.log("render ITEM*********************", element)
    navigation.navigate(navigationString.POST_DETAILS, {
      item: element,
      image: image
    })
    console.log('post Image', element);
  }
  const renderItem = (element, index) => {

    return (
      <HomeCard
        data={element}
        postNav={(image) => postDetail(element, image)}
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
          extraData={state}
          renderItem={renderItem}
          onEndReached={() => {
            console.log('count++++++++++++++', count)
            setCount(count + 8)
            setIsLoading(true)
          }}
          onRefresh={refresh}
          refreshing={onRefresh}

        />
      </View>
    </WrapperContainer>
  );
};

export default Home;
