import React from 'react'
import { View } from 'react-native'
import TextInputComponent from '../../../Component/TextInput'
import WrapperContainer from '../../../Component/WrapperContainer'
import strings from '../../../constants/lang'
import { moderateScale } from '../../../styles/responsiveSize'

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