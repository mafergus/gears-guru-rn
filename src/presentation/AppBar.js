import React from 'react';
import { View, Text, StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

import { Colors } from '../util';

export default class AppBar extends React.Component {

  constructor() {
    super();

    this.state = {
      statusBarHeight: 0,
    };
  }

  componentDidMount() {
    StatusBarManager.getHeight(({ height }) => {
      this.setState({ statusBarHeight: height });
    });
  }

  render() {
    const { statusBarHeight } = this.state;

    return (
      <View style={[styles.container, { marginTop: statusBarHeight }]}>
        <Text style={styles.title}>Gears Guru</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
    borderBottomColor: Colors.dividerColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontFamily: "GoodTimesRg-Regular",
    fontSize: 16,
    color: Colors.primary[900],
  }
});