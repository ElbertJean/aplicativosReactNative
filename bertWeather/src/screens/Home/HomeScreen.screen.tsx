import React, {JSX, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Animated, Easing} from 'react-native';

import styles from './HomeScreen.style';
import {RootStackParamList} from '../../routes/Router';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {MapPinArea, SpinnerGap} from 'phosphor-react-native';
import {ScrollView} from 'react-native-gesture-handler';

type InitialScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

function HomeScreen(): JSX.Element {
  const navigation = useNavigation<InitialScreenNavigationProp>();

  const [dataWeather, setDataWeather] = useState<any>();
  const [currentDate, setCurrentDate] = useState<string>('');

  const spinValue = useState(new Animated.Value(0))[0];
  const opacityValue = useState(new Animated.Value(1))[0];

  useEffect(() => {
    getDataWeather();
    formatDateTimeBR();

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
        'https://api.open-meteo.com/v1/forecast?latitude=-23.1794&longitude=-45.8869&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,sunrise,sunset,uv_index_max,precipitation_probability_max,precipitation_hours,precipitation_sum&timezone=America%2FSao_Paulo&forecast_days=1',
      );

      if (!response) {
        console.log('não houve resposta');
        return;
      }
      setDataWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function formatDateTimeBR() {
    const now = new Date();

    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      timeZone: 'America/Sao_Paulo',
    }).format(now);

    const formattedTime = new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'America/Sao_Paulo',
    }).format(now);

    const parts = formattedDate.replace('.', '').split(' ');

    const capitalize = (text: string) =>
      text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    const diaSemana = capitalize(parts[0]);
    const dia = parts[1];
    const de = parts[2];
    const mes = capitalize(parts[3]);

    const final = `${diaSemana} ${dia} ${de} ${mes}, ${formattedTime}`;
    setCurrentDate(final);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.buttonCity}>
          <MapPinArea weight="fill" size={32} color="#fff" />
          <Text style={styles.textCity}>São José dos Campos</Text>
        </TouchableOpacity>
        <View style={styles.containerDate}>
          <Text style={styles.textDate}>{currentDate}</Text>
        </View>
      </View>

      <View style={styles.containerWeather}>
        {dataWeather ? (
          <ScrollView>
            <View style={styles.containerContent}>
              <View style={styles.containerChart}>
                <Text style={styles.textChart}>Chart</Text>
              </View>

              <View style={styles.containerListWeather}>
                {dataWeather.daily?.time?.map((_, index: number) => (
                  <View key={index} style={styles.weatherItem}>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>📅</Text>
                      <Text style={styles.textItem}>
                        Data: {dataWeather.daily.time[index]}
                      </Text>
                    </View>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>⛅</Text>
                      <Text style={styles.textItem}>
                        Código do Tempo: {dataWeather.daily.weather_code[index]}
                      </Text>
                    </View>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>🌡️</Text>
                      <Text style={styles.textItem}>
                        Temp. Máx: {dataWeather.daily.temperature_2m_max[index]}
                        °C
                      </Text>
                    </View>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>🌡️</Text>
                      <Text style={styles.textItem}>
                        Temp. Mín: {dataWeather.daily.temperature_2m_min[index]}
                        °C
                      </Text>
                    </View>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>🤒</Text>
                      <Text style={styles.textItem}>
                        Sensação Máx:{' '}
                        {dataWeather.daily.apparent_temperature_max[index]}°C
                      </Text>
                    </View>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>🥶</Text>
                      <Text style={styles.textItem}>
                        Sensação Mín:{' '}
                        {dataWeather.daily.apparent_temperature_min[index]}°C
                      </Text>
                    </View>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>💨</Text>
                      <Text style={styles.textItem}>
                        Vento Máx: {dataWeather.daily.wind_speed_10m_max[index]}{' '}
                        km/h
                      </Text>
                    </View>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>🌅</Text>
                      <Text style={styles.textItem}>
                        Nascer do Sol:{' '}
                        {dataWeather.daily.sunrise[index].slice(11)}h
                      </Text>
                    </View>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>🌇</Text>
                      <Text style={styles.textItem}>
                        Pôr do Sol: {dataWeather.daily.sunset[index].slice(11)}h
                      </Text>
                    </View>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>🔆</Text>
                      <Text style={styles.textItem}>
                        UV Máx: {dataWeather.daily.uv_index_max[index]}
                      </Text>
                    </View>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>🌧️</Text>
                      <Text style={styles.textItem}>
                        % Chuva:{' '}
                        {dataWeather.daily.precipitation_probability_max[index]}
                        %
                      </Text>
                    </View>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>🕒</Text>
                      <Text style={styles.textItem}>
                        Horas de Chuva:{' '}
                        {dataWeather.daily.precipitation_hours[index]}h
                      </Text>
                    </View>
                    <View style={styles.weatherRow}>
                      <Text style={styles.emoji}>💧</Text>
                      <Text style={styles.textItem}>
                        Acumulado de Chuva:{' '}
                        {dataWeather.daily.precipitation_sum[index]} mm
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
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
  );
}

export default HomeScreen;
