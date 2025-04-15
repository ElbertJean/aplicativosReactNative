import React, {JSX, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Modal,
  TextInput,
  Alert,
} from 'react-native';

import styles from './HomeScreen.style';
import {RootStackParamList} from '../../routes/Router';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import {X, Drop, MapPinArea, SpinnerGap, Wind} from 'phosphor-react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {formatDateTimeBR, formatDate} from './utils/formatDate';

type InitialScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

function HomeScreen(): JSX.Element {
  const [dataWeather, setDataWeather] = useState<any>();
  const [currentDate, setCurrentDate] = useState<string>('');
  const [isCityModalVisible, setIsCityModalVisible] = useState(false);
  const [city, setCity] = useState<string>('');

  const spinValue = useState(new Animated.Value(0))[0];
  const opacityValue = useState(new Animated.Value(1))[0];

  useEffect(() => {
    getDataWeather();
    setCurrentDate(formatDateTimeBR());

    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityValue, {
          toValue: 0.3,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  async function getDataWeather() {
    try {
      const response = await axios.get(
        'https://api.open-meteo.com/v1/forecast?latitude=-23.1794&longitude=-45.8869&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,precipitation_probability_max&timezone=America%2FSao_Paulo&forecast_days=14',
      );

      if (!response) {
        console.log('não houve resposta');
        return;
      }
      setDataWeather(response.data);
      console.log('resposta', response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch() {
    setIsCityModalVisible(false);
    Alert.alert('Cidade escolhida', city);
    setCity('');
  }

  return (
    <>
      <View style={styles.container}>
        {dataWeather ? (
          <View style={styles.containerHeader}>
            <TouchableOpacity
              style={styles.buttonCity}
              onPress={() => setIsCityModalVisible(true)}>
              <MapPinArea weight="fill" size={32} color="#fff" />
              <Text style={styles.textCity}>São José dos Campos</Text>
            </TouchableOpacity>
            <Text style={styles.textDate}>{currentDate}</Text>
            <View style={styles.containerTemp}>
              <Text style={styles.textTemp}>
                {Math.floor(dataWeather?.current.temperature_2m)}°
              </Text>
              <View style={styles.containerInf}>
                <View style={styles.containerMaxMin}>
                  <Text style={styles.textInfoHeader}>
                    {dataWeather.daily.temperature_2m_max[0]}°
                  </Text>
                  <Text style={styles.textInfoHeader}>
                    {dataWeather.daily.temperature_2m_min[0]}°
                  </Text>
                </View>
                <View style={styles.divIconInfo}>
                  <Wind size={18} color="#E4E4E4" />
                  <Text style={styles.textInfoHeader}>
                    {dataWeather.daily.wind_speed_10m_max[0]} km/h
                  </Text>
                </View>
                <View style={styles.divIconInfo}>
                  <Drop size={18} weight="fill" color="#E4E4E4" />
                  <Text style={styles.textInfoHeader}>
                    {dataWeather.daily.precipitation_probability_max[0]}%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.containerHeader}></View>
        )}

        <View style={styles.containerWeather}>
          {dataWeather ? (
            <ScrollView>
              <View style={styles.containerContent}>
                <View style={styles.containerChart}>
                  <Text style={styles.textChart}>Chart</Text>
                </View>
                <ScrollView horizontal={true}>
                  <View style={styles.containerListWeather}>
                    {dataWeather.daily?.time?.map((_, index: number) => (
                      <View key={index} style={styles.weatherItem}>
                        <View style={[styles.weatherRow, {width: 70}]}>
                          <Text style={styles.textItem}>
                            {formatDate(dataWeather.daily.time[index])}
                          </Text>
                        </View>
                        <View style={styles.weatherRow}>
                          <Wind size={18} color="#fff" />
                          <Text style={styles.textItem}>
                            {dataWeather.daily.wind_speed_10m_max[index]} km/h
                          </Text>
                        </View>
                        <View style={[styles.weatherRow, {width: 50}]}>
                          <Drop size={14} weight="fill" color="#fff" />
                          <Text style={styles.textItem}>
                            {
                              dataWeather.daily.precipitation_probability_max[
                                index
                              ]
                            }
                            %
                          </Text>
                        </View>
                        <View
                          style={[
                            styles.weatherRow,
                            {width: 90, justifyContent: 'flex-end'},
                          ]}>
                          <Text style={styles.textItem}>
                            {dataWeather.daily.temperature_2m_max[index]}°
                          </Text>
                          <Text style={styles.textItem}>
                            {dataWeather.daily.temperature_2m_min[index]}°
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
          ) : (
            <View style={styles.containerSpinner}>
              <Animated.View
                style={{transform: [{rotate: spin}], opacity: opacityValue}}>
                <SpinnerGap size={32} color="#fff" weight="bold" />
              </Animated.View>
              <Animated.Text
                style={[styles.textSpinner, {opacity: opacityValue}]}>
                Carregando
              </Animated.Text>
            </View>
          )}
        </View>
      </View>
      <Modal visible={isCityModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filtrar</Text>
              <TouchableOpacity onPress={() => setIsCityModalVisible(false)}>
                <X size={24} weight="bold" color="#1C3168" />
              </TouchableOpacity>
            </View>
            <View style={styles.modalInputContainer}>
              <Text style={styles.modalLabel}>Cidade</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Digite o nome da cidade"
                placeholderTextColor={'#AAAAAA'}
                value={city}
                onChangeText={text => setCity(text)}
              />
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={handleSearch}>
              <Text style={styles.modalButtonText}>Buscar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default HomeScreen;
