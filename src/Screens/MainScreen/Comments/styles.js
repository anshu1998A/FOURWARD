import { StyleSheet } from 'react-native'
import { height, moderateScale, moderateScaleVertical, width } from '../../../styles/responsiveSize'


const styles = StyleSheet.create({
    postImage: {
        height: height,
        width: width,
    },
    postDetails:
    {
        marginHorizontal: moderateScaleVertical(24),
        flexDirection: 'row',
        // flex:1,
        // justifyContent: 'space-between',
        marginBottom: moderateScaleVertical(30)
    },
    headerView: {
        marginTop: moderateScaleVertical(48),
        justifyContent: 'space-evenly',
    },
    commentMainView: {
        flexDirection: 'row',
        // backgroundColor:'black',
        marginLeft: moderateScale(20),
        alignItems:'center',
        flex:1,
        marginVertical: moderateScaleVertical(10)
    },
    userImage:{
        // paddingVertical:5,
        height: moderateScale(width / 10),
        width: moderateScale(width / 10),
        borderRadius: moderateScale(width / 20),
        // marginBottom:5
        // alignSelf:'center'
    },
    profileImage: {
        height: moderateScale(width / 10),
        width: moderateScale(width / 10),
        borderRadius: moderateScale(width / 20),
    },
    commentView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: Platform.OS === 'ios' ? moderateScaleVertical(45) : moderateScaleVertical(20)
    }
})
export default styles