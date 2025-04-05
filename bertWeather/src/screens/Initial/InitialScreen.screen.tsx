import React, {useState} from 'react';
import {View, Text, Image, Dimensions, ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../routes/Router';
import styles from './InitialScreen.style';

type InitialScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Initial'
>;

const {width, height} = Dimensions.get('window');

const slides = [
  {
    key: 'one',
    image: require('../../assets/slide11.png'),
  },
  {
    key: 'two',
    image: require('../../assets/slide22.png'),
  },
  {
    key: 'three',
    image: require('../../assets/slide33.png'),
  },
];

function InitialScreen() {
  const navigation = useNavigation<InitialScreenNavigationProp>();

  const onDone = () => {
    navigation.navigate('Home');
  };

  const renderItem = ({item}: any) => {
    return (
      <ImageBackground source={item.image} style={styles.slide}>
        <View style={styles.overlay}></View>
      </ImageBackground>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      showSkipButton={true}
      onSkip={onDone}
      nextLabel="Proximo"
      skipLabel="Pular"
      doneLabel="Ver previsão"
      activeDotStyle={{backgroundColor: '#1B56FD'}}
    />
  );
}

export default InitialScreen;
