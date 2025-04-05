import React, {JSX} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './InitialScreen.style';
import image from '../../assets/initialImage.png';
import {CloudSun} from 'phosphor-react-native';

function InitialScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <CloudSun size={30} color="#F4F5F6" />
          <Text style={styles.buttonText}>Ver previsão do tempo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default InitialScreen;
