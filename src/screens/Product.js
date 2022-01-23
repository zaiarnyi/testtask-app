import React from 'react';
import { Text } from "react-native";

export const ProductScreen = ({navigation, route}) => {
  return <Text>{route.name}</Text>
}
