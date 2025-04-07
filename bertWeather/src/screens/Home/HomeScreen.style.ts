import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#141414',
    // backgroundColor: '#121e2b',
  },
  containerHeader: {
    width: '100%',
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 16,
    gap: 8,
  },
  buttonCity: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    justifyContent: 'center',
  },
  textCity: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerDate: {},
  textDate: {
    color: '#787878',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerWeather: {
    flex: 1,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: '#1F1F1F99',
    padding: 16,
  },
  containerContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  containerChart: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#FF000090',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textChart: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerListWeather: {
    backgroundColor: '#141414',
    borderWidth: 1,
    borderColor: '#191919',
    borderRadius: 8,
    padding: 16,
  },
  weatherItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  weatherRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginBottom: 4,
  },

  emoji: {
    fontSize: 18,
  },

  textItem: {
    fontSize: 16,
    color: '#fff',
  },
  containerSpinner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 12,
  },
  textSpinner: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
