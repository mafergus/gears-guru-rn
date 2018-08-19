import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import config from '../config';

export default class Post extends React.Component {

  constructor() {
    super();

    this.state = {
      liked: false,
      screenWidth: 0
    };
  }
  
  componentDidMount() {
    this.setState({
      screenWidth: Dimensions.get("window").width
    });
  }

  toggleLiked = () => {
    const { liked } = this.state;
    
    this.setState({ liked: !liked });
  }

  render() {
    const { liked, screenWidth } = this.state;
    const imageUri = "https://pbs.twimg.com/profile_images/965036344216039424/NQOVAYZ-_400x400.jpg";

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.toggleLiked()}>
          <Image
            style={{ width: screenWidth, height: screenWidth*1.1 }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>

        <View style={styles.iconBar}>
          <TouchableOpacity onPress={() => this.toggleLiked()}>
            <Image style={[styles.icon, { height: 40, width: 40, tintColor: liked ? "yellow" : "black" }]} source={config.images.star} />
          </TouchableOpacity>
          <Image style={[styles.icon, { height: 32, width: 32 }]} source={config.images.bubble} />
          <Image style={[styles.icon, { height: 40, width: 40 }]} source={config.images.arrow} />  
        </View>

        <View style={styles.iconBar}>
          <Image style={[styles.icon, { height: 30, width: 30 }]} source={config.images.star} />
          <Text>128 Likes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  icon: {
    height: 40,
    width: 40,
  },
  iconBar: {
    width: "100%",
    height: config.styleConstants.rowHeight,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgb(233, 233, 233)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
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
    height: config.styleConstants.rowHeight,
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