import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Logo from '../../assets/images/logo/logo';
import { colors } from "../../ConstantsStyles";
import { CustomButtons } from "../../components/Buttons/CustomButtons";


export const Menu = ({navigation, route}) => {
  const navigateTo = (name) => {
    navigation.navigate(name);
  }
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <Logo width={39} height={26}/>
            <Text style={styles.logoText}>testtask</Text>
          </View>
          <View style={styles.menu}>
            <View style={styles.mainMenu}>
              <View style={styles.row}>
                <TouchableOpacity style={styles.menuRow} onPress={navigateTo.bind(null, 'Users')}>
                  <MaterialIcons name="people" size={24} color={colors.lightGray}/>
                  <Text style={styles.textMenu}>Users</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.menuRow} onPress={navigateTo.bind(null, 'Product')}>
                  <MaterialIcons name="category" size={24} color={colors.lightGray}/>
                  <Text style={styles.textMenu}>Products</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.menuRow} onPress={navigateTo.bind(null, 'Cart')}>
                  <MaterialIcons name="shopping-basket" size={24} color={colors.lightGray}/>
                  <Text style={styles.textMenu}>Cart</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.menuRow} onPress={navigateTo.bind(null, 'Terms')}>
                  <MaterialIcons name="privacy-tip" size={24} color={colors.lightGray}/>
                  <Text style={styles.textMenu}>Terms and conditions</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{borderBottomColor: '#D0CFCF', borderBottomWidth: 1}}/>
            <View style={styles.language}>
              <View style={styles.row}>
                <TouchableOpacity style={styles.menuRow}>
                  <MaterialIcons name="flag" size={24} color={colors.lightGray}/>
                  <Text style={styles.textMenu}>Language</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sign}>
          <View style={styles.signIn}>
            <CustomButtons text={'Sign in'} variant="border" customStyle={{flexGrow: 1}} onPress={navigateTo.bind(null, 'SignIn')}/>
          </View>
          <View style={styles.signOut} >
            <CustomButtons text={'Sign Out'} variant="yellow" customStyle={{flexGrow: 1}} onPress={navigateTo.bind(null, 'SignUp')}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    paddingTop: 10,
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  logoText: {
    textTransform: 'uppercase',
    fontSize: 16
  },
  menu: {
  },
  mainMenu: {
    paddingHorizontal: 8,
  },
  menuRow: {
    flexDirection: 'row'
  },
  row: {},
  textMenu: {
    fontFamily: 'Asap-Regular',
    fontSize: 16,
    lineHeight: 26,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  language: {
    paddingHorizontal: 8,
  },
  sign:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  signIn:{
    flex: 1,
    marginRight: 10
  },
  signOut:{
    flex: 1,
  },
})
