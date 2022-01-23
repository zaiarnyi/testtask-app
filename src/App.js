import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { UsersScreen } from "./screens/Users";
// import { ProductScreen } from "./screens/Product";
// import { CartScreen } from "./screens/Cart";
// import { MenuScreen } from "./screens/Menu";
// import "../i18n";
// import "react-native-gesture-handler";
// import { colors } from "./ConstantsStyles";


const Tab = createBottomTabNavigator();


const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  //
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //   // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  // };

  useEffect(() => {
    // SplashScreen.hide();
  }, []);

  return ( <Text>asdasd</Text>
    // <NavigationContainer>
    //
    //   <Tab.Navigator screenOptions={() => ({
    //     tabBarActiveTintColor: colors.secondary,
    //     tabBarInactiveTintColor: colors.lightGray,
    //     tabBarStyle: {
    //       borderTopWidth: 1,
    //       borderTopColor: '#D0CFCF',
    //     },
    //   })}>
    //     <Tab.Screen name="Users" component={UsersScreen} options={{
    //       tabBarIcon: ({color})=> <MaterialIcons name="people" color={color} size={24}/>
    //     }}/>
    //     <Tab.Screen name="Product" component={ProductScreen} options={{
    //       tabBarIcon: ({color})=> <MaterialIcons name="category" color={color} size={24}/>
    //     }}/>
    //     <Tab.Screen name="Cart" component={CartScreen} options={{
    //       tabBarIcon: ({color})=> <MaterialIcons name="shopping-basket" color={color} size={24}/>
    //     }}/>
    //     <Tab.Screen name="Burger" component={MenuScreen} options={{
    //       tabBarIcon: ({color})=> <MaterialIcons name="menu" color={color} size={24}/>,
    //       headerShown: false,
    //       title: 'Menu'
    //     }}/>
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default App;

// const LANGUAGES = [
//   {code: 'en', label: 'English'},
//   {code: 'de', label: 'Français'},
// ];

// const {t, i18n} = useTranslation();
// const selectedLanguageCode = i18n.language;
//
// const setLanguage = code => {
//   return i18n.changeLanguage(code);
// };

// {LANGUAGES.map(language => {
//   const selectedLanguage = language.code === selectedLanguageCode;
//
//   return (
//     <TouchableOpacity
//       key={language.code}
//       style={styles.button}
//       disabled={selectedLanguage}
//       onPress={() => setLanguage(language.code)}>
//       <Text>{language.label}</Text>
//     </TouchableOpacity>
//   );
// })}
