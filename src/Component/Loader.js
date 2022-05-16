import React from 'react';
import { Modal, View } from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import colors from '../styles/colors';
import { height, width } from '../styles/responsiveSize';


const LoadingComponent = () => {


  return (
    <View
      style={{
        backgroundColor: colors.whiteOpacity4,
        
        height:height,
        width:width
      }}>
      <SkypeIndicator size={30} color={colors.redD} />
      
    </View>
  );
};
const Loader = ({isLoading = false, withModal}) => {
  if (withModal) {
    return (
      <Modal transparent visible={isLoading}>
        <LoadingComponent />
      </Modal>
    );
  }
  if (isLoading) {
    return <LoadingComponent />;
  }
  return null;
};

export default Loader;