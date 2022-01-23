import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionSpecs } from '@react-navigation/stack';
import { Menu } from "./Menu/index";
import { TermsScreen } from "./Terms";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const Stack = createNativeStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export const MenuScreen = () => {
  return (
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="SignIn" component={SignIn} options={{title: 'Sign In'}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{title: 'Sign Up'}}/>
      </Stack.Navigator>
  )}
