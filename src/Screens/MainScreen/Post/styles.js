import { StyleSheet } from 'react-native'
import colors from '../../../styles/colors'
import { moderateScale, textScale, width } from '../../../styles/responsiveSize'

const styles = StyleSheet.create({
  headTextStyle: {
    fontSize: textScale(16),
    color: colors.white,
    fontWeight: '600'
  },
  detailsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#636060',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: moderateScale(50),
    alignItems: 'center'
  },
  cameraIcon: {
    width: width / 5,
    height: width / 5,
    marginBottom: moderateScale(70),
    position: 'absolute',
    right: moderateScale(10),
    bottom: 0
  },
  galleryPhoto: {
    width: width / 3,
    height: width / 3,
  },
  firstImage: {
    width: width,
    height: width,
  }
})
export default styles