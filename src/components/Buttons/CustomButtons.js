import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const CustomButtons = ({variant, text, customStyle = {}, onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btn, styles[variant], customStyle]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn:{
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 30,
    paddingHorizontal: 44,
  },
  text:{
    fontFamily:'Asap-Regular',
    fontSize: 18,
    lineHeight: 26,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  yellow:{
    backgroundColor: '#F4E041'
  },
  border:{
    borderColor: '#F4E041',
    borderWidth:1,
    backgroundColor: 'white'
  },
})
