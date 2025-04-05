import React, { JSX } from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../routes/Router';
import styles from './InitialScreen.style';
import {
  CaretDoubleRight,
  CaretRight,
  SignIn,
} from 'phosphor-react-native';

import { InitialScreenSlides } from './@types/InitialScreen.type';

type InitialScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Initial'
>;

const slides: InitialScreenSlides[] = [
  {
    key: 'one',
    title: 'Bem-vindo!',
    text: 'Acompanhe a previsão do tempo de forma simples e rápida.',
    image: require('../../assets/slide1.png'),
  },
  {
    key: 'two',
    title: 'Informações precisas',
    text: 'Dados meteorológicos atualizados em tempo real.',
    image: require('../../assets/slide2.png'),
  },
  {
    key: 'three',
    title: 'Na palma da mão',
    text: 'Tenha o clima de qualquer cidade ao seu alcance.',
    image: require('../../assets/slide3.png'),
  },
];

function InitialScreen(): JSX.Element {
  const navigation = useNavigation<InitialScreenNavigationProp>();

  const onDone = () => {
    navigation.navigate('Home');
  };

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.imageContainer}>
            <Image source={item.image} />
          </View>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
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
      renderNextButton={() => (
        <View style={{marginTop: 8}}>
          <CaretRight size={28} color="#fff" weight="bold" />
        </View>
      )}
      renderDoneButton={() => (
        <View style={{ marginTop: 8 }}>
          < SignIn size={28} color="#fff" weight="bold" />
        </View>
      )}
      renderSkipButton={() => (
        <View style={{marginTop: 8}}>
          <CaretDoubleRight size={28} color="#fff" weight="bold" />
        </View>
      )}
      doneLabel="Ver previsão"
      activeDotStyle={styles.activeDot}
      dotStyle={styles.noActiveDot}
      />
  );
}

export default InitialScreen;
