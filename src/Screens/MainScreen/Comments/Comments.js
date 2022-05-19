import React, { useEffect, useState } from 'react'
import { FlatList, Image, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native'
import HeadComp from '../../../Component/Header'
import TextInputComponent from '../../../Component/TextInput'
import WrapperContainer from '../../../Component/WrapperContainer'
import imagePaths from '../../../constants/imagePaths'
import strings from '../../../constants/lang'
import actions from '../../../redux/actions'
import colors from '../../../styles/colors'
import { commonStyles } from '../../../styles/commonStyles'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import styles from './styles'

const Comments = ({ route }) => {

  const [commentInput, setCommentInput] = useState('')
  const [count, setCount] = useState(0)
  const [show, setShow] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const elemData = route?.params?.element
  console.log(elemData, ">>>>>>>>>>>");
  console.log("+++++++++++++++++++", route?.params?.element?.item?.commets)
  const profile = route?.params?.element?.item?.user?.profile;
  const firstName = route?.params?.element?.item?.user?.first_name;
  const lastName = route?.params?.element?.item?.user?.last_name;
  const description = route?.params?.element?.item?.description;
  const id = route?.params?.element?.item?.id;


  useEffect(() => {
    if (isLoading) {

      let apidata = `?post_id=${id}&skip=${count}`
      console.log("get comment apiData +++++++++++", apidata)

      actions
          .getComment(apidata)
          .then((res) => {
              console.log("COMMENT API DATA++++++", res?.data)
              setShow([...show, ...res?.data]);
              setIsLoading(false)
              // console.log("all comments", comment);
          })
          .catch(err => {
              console.log("comment error", err);
          });
  }
}, [isLoading])


  const addComment = () => {
    let apiData = `?post_id=${id}&comment=${commentInput}`;
    console.log('apidata', apiData);
    actions
      .addComment(apiData)
      .then(res => {
        console.log('add comments', res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getAllComments = (elem, index) => {
    return (
      <>
        <View style={styles.commentMainView}>
          {/* <Text>{elem?.index}</Text> */}
         
          <View style={{flex:0.2}}>
            <Image source={{ uri: elem?.item?.user?.profile }} style={styles.userImage} />
          </View>
          <View style={{flex:0.6}}>
            <Text>
              {elem?.item?.user?.first_name} {elem?.item?.user?.last_name}
            </Text>
            <Text style={{ color: colors.white }}>
              {elem?.item?.comment}
            </Text>
          </View>
          <View 
          // style={{marginRight:}}
          >
          <Text style={{ color: colors.whiteOpacity4 }}>{elem?.item?.time_ago}</Text>
        </View>
        {/* <Text style={{ color: colors.whiteOpacity4,}}>{elem?.item?.time_ago}</Text> */}
        </View>
        <Divider style={{ marginHorizontal: 20 }} />
      </>
    )
  }
  return (
    <WrapperContainer >
      <HeadComp
        leftImage={true}
        leftImageIcon={imagePaths.back_Arrow}
        leftText={true}
        leftTextTitle={strings.COMMENTS}
        leftTextStyle={commonStyles.leftTextStyle}
      />

      <View>
        <View style={styles.postDetails}>
          <View>
            <Image source={{ uri: profile }} style={styles.profileImage} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ color: colors.white }}>
              {firstName} {lastName} {description} </Text>
          </View>
        </View>
      </View>
      <FlatList
        bounces={false}
        data={show}
        extraData={show}
        renderItem={getAllComments}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          setCount(count + 15)
          setIsLoading(true)

        }}
      />
      <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View style={styles.commentView} >
          <View style={{ flex: 0.7 }}>
            <TextInputComponent
              placeholder="Add your comment"
              placeholderTextColor={colors.sub_Text}
              onChangetext={event => setCommentInput(event)}
              value={commentInput} />
          </View>
          <TouchableOpacity
            onPress={addComment}
            style={{ flex: 0.2, backgroundColor: colors.redB, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
            <Text style={commonStyles.leftTextStyle}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default Comments