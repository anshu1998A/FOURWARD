import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import React from 'react'
import WrapperContainer from '../../../Component/WrapperContainer'
import HeadComp from '../../../Component/Header'
import strings from '../../../constants/lang'
import imagePaths from '../../../constants/imagePaths'
import styles from './styles'

const notificationsData = [
  {
    id: '1',
    image: imagePaths.INTRO_IMAGE,
    name: strings.FIRST_NAME,
    details: strings.TIME
  },
  {
    id: '2',
    image: imagePaths.INTRO_IMAGE,
    name: strings.FIRST_NAME,
    details: strings.TIME
  },
  {
    id: '3',
    image: imagePaths.INTRO_IMAGE,
    name: strings.FIRST_NAME,
    details: strings.TIME
  },
  {
    id: '4',
    image: imagePaths.INTRO_IMAGE,
    name: strings.FIRST_NAME,
    details: strings.TIME
  },
]


const notificationItems = ({ item }) => {
  return (
    // <View>
    //   {/* <Image>{item.image}</Image> */}
    //   <Text>{item.name}</Text>
    // </View>

    <ScrollView>
      <View>
        <View>
          <Image source={item.image} style={{}} />
        </View>
        <View >
          <Text>{item.title}</Text> 
           {/* <Text>added a new post</Text> */}
          <Text>{item.description} </Text>
        </View>
      </View>
    </ScrollView>
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
          data={notificationsData}
          renderItem={notificationItems}
        />
      </View>
    </WrapperContainer>
  )
}

export default Notification