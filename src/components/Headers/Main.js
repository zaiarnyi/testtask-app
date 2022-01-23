import React from 'react';
import Logo from '../../assets/images/logo/logo';
import {Text, View, StyleSheet} from 'react-native';

export const MainHeader = (props) => {
  return (
    <View style={styles.wrapper}>
      <Logo />
      <Text style={styles.name}>testtask</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    textTransform: 'uppercase',
    color: '#000',
  },
});
