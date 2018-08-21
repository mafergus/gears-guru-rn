import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigator, SwitchNavigator, createDrawerNavigator } from 'react-navigation';

import CategoriesCarousel from '../presentation/CategoriesCarousel';
import config from '../config';
import { Colors } from '../util';

export default class Home extends React.Component {

  render() {
    const imageUri = "https://pbs.twimg.com/profile_images/965036344216039424/NQOVAYZ-_400x400.jpg";

    return (
      <View style={styles.container}>
        <Text style={styles.categoriesTitle}>Popular Categories</Text>
        <CategoriesCarousel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoriesTitle: {
    fontSize: 14,
    color: Colors.text.secondary.dark,
    marginBottom: 10,
    textAlign: "center",
  }
});