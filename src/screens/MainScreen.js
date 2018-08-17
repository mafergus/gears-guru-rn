import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Dimensions } from 'react-native';

export default class MainScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      screenWidth: 0
    };
  }
  
  componentDidMount() {
    this.setState({
      screenWidth: Dimensions.get("window").width
    });
  }

  render() {
    const { screenWidth } = this.state;
    const imageUri = "https://pbs.twimg.com/profile_images/965036344216039424/NQOVAYZ-_400x400.jpg";

    return (
      <View style={styles.container}>

        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>

        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Rg58l5jcXi-SmSwjOVnzlnmrb3ekxRq14byvUT-BQDHJP-LB"
              }}
            />
            <Text>A. Kitten</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>

        <Image
          style={{ width: screenWidth, height: 100 }}
          source={{
            uri: imageUri
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tempNav: {
    width: "100%",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "rgb(250, 250, 250)",
    borderBottomColor: "rgb(233, 233, 233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  userBar: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
});