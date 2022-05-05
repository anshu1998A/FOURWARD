import { StyleSheet } from 'react-native'
import { height, moderateScale, moderateScaleVertical, width } from '../../../styles/responsiveSize'


const styles = StyleSheet.create({
    postImage: {
        height: height,
        width: width,
    },
    postDetails: { marginHorizontal: moderateScaleVertical(24), flex:1, justifyContent:'space-between' },
    headerView:{ flexDirection: 'row', marginTop: moderateScaleVertical(48), justifyContent: 'space-around', },
    profileImage: {
        height: moderateScale(width / 10),
        width: moderateScale(width / 10),
        borderRadius: moderateScale(width / 20),
      }
})
export default styles