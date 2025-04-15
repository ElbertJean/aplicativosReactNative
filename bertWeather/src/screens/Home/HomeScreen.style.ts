import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#1C3168',
  },

  // Header
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
    color: '#E4E4E4',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textDate: {
    color: '#D4D4D4',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerTemp: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 32,
  },
  textTemp: {
    fontSize: 120,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  containerInf: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    height: '100%',
    justifyContent: 'center',
  },
  containerMaxMin: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textInfoHeader: {
    color: '#E4E4E4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divIconInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  // Weather
  containerWeather: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#1E3F74',
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
    backgroundColor: '#1C3168',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textChart: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerListWeather: {
    backgroundColor: '#1C3168',
    borderWidth: 1,
    borderColor: '#1C316810',
    borderRadius: 16,
    padding: 16,
    display: 'flex',
    gap: 24,
    minWidth: '100%',
  },
  weatherItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherRow: {
    display: 'flex',
    flexDirection: 'row',
    width: 100,
    gap: 4,
    alignItems: 'center',
  },
  textItem: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  // Carregamento
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

  // Modal
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: 'white',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C3168',
  },
  modalInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  modalLabel: {
    fontSize: 16,
    color: '#1C3168',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#1C3168',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1C3168',
  },
  modalButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C3168',
    borderRadius: 8,
    height: 48,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
