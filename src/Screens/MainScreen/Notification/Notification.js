import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../../Component/WrapperContainer'
import HeadComp from '../../../Component/Header'
import strings from '../../../constants/lang'
import imagePaths from '../../../constants/imagePaths'
import styles from './styles'

const notificationsData = [
  {
    id: '1',
    image: imagePaths.PROFILE_IMAGE1,
    name: strings.USER_NAME1,
  },
  {
    id: '2',
    image: imagePaths.POST_IMAGE1,
    name: strings.USER_NAME2,
  },
  {
    id: '3',
    image: imagePaths.PROFILE_IMAGE2,
    name: strings.USER_NAME1,
  },
  {
    id: '4',
    image: imagePaths.POST_IMAGE1,
    name: strings.USER_NAME2,
  },
]


const notificationItems = ({ item }) => {
  return (

    <View style={styles.mainView}>
      <View>
        <Image source={item.image} style={styles.iconStyle} />
      </View>
      <View>
        <View style={styles.notificationText} >
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.detailsText}>added a new post. </Text>
        </View>
        <Text style={styles.timeText}>{strings.TIME}</Text>
      </View>
    </View>

  )
}
const Notification = () => {

  const [state, setState] = useState({
    notificationData: [{}, {}, {}, {}]
  })
  const { notificationData } = state

  return (
    <WrapperContainer>
      <HeadComp
        leftText={true}
        leftTextTitle={strings.NOTIFICATION}
        leftTextStyle={styles.leftTextStyle}
      />

      <View>
        <FlatList
          data={notificationsData}
          renderItem={notificationItems}
        />
      </View>
    </WrapperContainer>
  )
}

export default Notification