import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    display: 'flex',
    gap: 20,
    padding: 16,
  },
  headerContainer: {
    flex: 1,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  button: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: '#1B56FD50',
    alignItems: 'center',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F4F5F6',
  },
});

export default styles;
