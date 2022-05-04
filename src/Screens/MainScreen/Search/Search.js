import { View, Text } from 'react-native'
import React from 'react'
import WrapperContainer from '../../../Component/WrapperContainer'
import TextInputComponent from '../../../Component/TextInput'
import { moderateScale } from '../../../styles/responsiveSize'
import strings from '../../../constants/lang'

const Search = () => {
  return (
   <WrapperContainer>
     <View style={{margin: moderateScale(20)}}>
     <TextInputComponent
     rightText={true}
     rightTextVal={strings.ENTER_LOC_MANUALLY}
     />
     </View>
   </WrapperContainer>
  )
}

export default Search