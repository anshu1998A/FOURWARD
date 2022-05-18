import React, { useEffect, useState } from 'react'
import { FlatList, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import HeadComp from '../../../Component/Header'
import TextInputComponent from '../../../Component/TextInput'
import WrapperContainer from '../../../Component/WrapperContainer'
import imagePaths from '../../../constants/imagePaths'
import strings from '../../../constants/lang'
import actions from '../../../redux/actions'
import colors from '../../../styles/colors'
import { commonStyles } from '../../../styles/commonStyles'
import styles from './styles'

const Comments = ({ route }) => {
  const [comment, setComment] = useState()
  const [show, setShow]= useState([])
  console.log("+++++++++++++++++++",route?.params?.element?.item?.commets)
  const profile = route?.params?.element?.item?.user?.profile;
  const firstName = route?.params?.element?.item?.user?.first_name;
  const lastName = route?.params?.element?.item?.user?.last_name;
  const description = route?.params?.element?.item?.description;
  const id = route?.params?.element?.item?.id;
  console.log(data)
   
  useEffect(()=>{
    let apiData = `?post_id=${id}`
    actions.getComment(apiData).then((res) => {
      console.log(res, "comments+++++++++++++", res)
    }).catch((err) => {
      console.log(err)
    })
  })
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
        <FlatList
        // data={show}
        />

      </View>
      <KeyboardAvoidingView enabled={true} behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <View style={styles.commentView} >
          <View style={{ flex: 0.7 }}>
            <TextInputComponent
              placeholder="Add your comment"
              placeholderTextColor={colors.sub_Text}
              onChangeText={(data) => setComment(data)}
              value={comment} />
          </View>
          <TouchableOpacity 
          // onPress={getAllComment}
            style={{ flex: 0.2, backgroundColor: colors.redB, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
            <Text style={commonStyles.leftTextStyle}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </WrapperContainer>
  )
}

export default Comments