import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const UsersScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <Text>{route.name}</Text>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'aqua', paddingHorizontal: 20}}
          onPress={()=> navigation.navigate('Product')}>
          <Text>Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
