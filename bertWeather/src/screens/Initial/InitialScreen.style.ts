import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: '#191919',
  },
  overlay: {
    flex: 1,
    width: width,
    backgroundColor: 'rgba(25, 25, 25, 0.1.5)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 150,
    paddingHorizontal: 16,
  },
});

export default styles;
