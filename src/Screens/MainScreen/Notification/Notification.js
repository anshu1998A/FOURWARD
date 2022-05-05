import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../../Component/WrapperContainer'
import HeadComp from '../../../Component/Header'
import strings from '../../../constants/lang'
import imagePaths from '../../../constants/imagePaths'
import styles from './styles';
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { moderateScale } from '../../../styles/responsiveSize'

const notificationsData = [
  {
    id: '1',
    image: imagePaths.post_Image1,
    name: strings.USER_NAME1,
  },
  {
    id: '2',
    image: imagePaths.profile_Image1,
    name: strings.USER_NAME2,
  },
  {
    id: '3',
    image: imagePaths.profile_Image2,
    name: strings.USER_NAME1,
  },
  {
    id: '4',
    image: imagePaths.profile_Image1,
    name: strings.USER_NAME2,
  },
]


const notificationItems = ({ item }) => {
  return (
    <>   
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
      <Divider style={{ marginLeft: moderateScale(80) }} />
    </>


  )
}
const Notification = () => {

  return (
    <WrapperContainer>
      <HeadComp
        leftText={true}
        leftTextTitle={strings.NOTIFICATION}
        leftTextStyle={styles.leftTextStyle}
      />

      <View>
        <FlatList
          scrollEnabled={false}
          data={notificationsData}
          renderItem={notificationItems}
        />
      </View>
    </WrapperContainer>
  )
}

export default Notification