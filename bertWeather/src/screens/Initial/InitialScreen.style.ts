import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121e2b',
  },
  overlay: {
    flex: 1,
    width: width,
    backgroundColor: 'rgba(25, 25, 25, 0.1.5)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 32,
  },
  activeDot: {
    backgroundColor: '#1B56FD',
    width: 15,
    height: 10
  },
  noActiveDot: {
    backgroundColor: '#F4F5F6',
    width: 15,
    height: 10
  }
});

export default styles;
