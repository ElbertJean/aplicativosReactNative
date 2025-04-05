import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../routes/Router';
import styles from './InitialScreen.style';
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretRight,
  SignIn,
} from 'phosphor-react-native';

type InitialScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Initial'
>;

const {width, height} = Dimensions.get('window');

const slides = [
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

function InitialScreen() {
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
        <CaretRight size={32} color="#fff" weight="bold" />
      )}
      renderDoneButton={() => <SignIn size={32} color="#fff" weight="bold" />}
      renderSkipButton={() => (
        <CaretDoubleRight size={32} color="#fff" weight="bold" />
      )}
      doneLabel="Ver previsão"
      activeDotStyle={{backgroundColor: '#1B56FD', width: 15, height: 10}}
      dotStyle={{backgroundColor: '#F4F5F6', width: 15, height: 10}}
    />
  );
}

export default InitialScreen;
