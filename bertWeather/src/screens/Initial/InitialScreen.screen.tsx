import React, {JSX} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './InitialScreen.style';
import image from '../../assets/initialImage.png';
import {CloudSun} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../routes/Router';

type InitialScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Initial'
>;

function InitialScreen(): JSX.Element {
  const navigation = useNavigation<InitialScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <CloudSun size={30} color="#F4F5F6" />
          <Text style={styles.buttonText}>Ver previsão do tempo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default InitialScreen;
