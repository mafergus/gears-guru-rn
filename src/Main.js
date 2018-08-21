import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import { Camera, Profile } from './screens';
import Home from './screens/Home';
import { AppBar } from './presentation';
import { Colors } from './util';

const Tabs = TabNavigator({
  feed: Home,
  camera: Camera,
  profile: Profile,
});

export default class Main extends React.Component {
  render() {
    return (
      <View style={{ height: "100%", width: "100%", backgroundColor: Colors.backgroundColor }}>
        <AppBar />
        <Tabs />
      </View>
    );
  }
}