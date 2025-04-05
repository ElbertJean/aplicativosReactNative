import React, {JSX} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './HomeScreen.style';
import {RootStackParamList} from '../../routes/Router';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

type InitialScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

function HomeScreen(): JSX.Element {
  const navigation = useNavigation<InitialScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Initial')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
