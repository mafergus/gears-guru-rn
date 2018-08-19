import React from 'react';
import { View, Text, StyleSheet, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

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
        <Text>Gears Guru</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "orange",
  },
  title: {
    fontFamily: "good-times",
  }
});