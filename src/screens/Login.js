import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';

export default class Login extends React.Component {

  login = () => {
    this.props.navigation.navigate('main');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.login()}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});