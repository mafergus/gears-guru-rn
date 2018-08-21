import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Colors } from '../util';

const ENTRIES2 = [
    {
        title: 'Favourites landscapes 1',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/SsJmZ9jl.jpg'
    },
    {
        title: 'Favourites landscapes 2',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/5tj6S7Ol.jpg'
    },
    {
        title: 'Favourites landscapes 3',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        illustration: 'https://i.imgur.com/pmSqIFZl.jpg'
    },
    {
        title: 'Favourites landscapes 4',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/cA8zoGel.jpg'
    },
    {
        title: 'Favourites landscapes 5',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/pewusMzl.jpg'
    },
    {
        title: 'Favourites landscapes 6',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        illustration: 'https://i.imgur.com/l49aYS3l.jpg'
    }
];

export default class CategoriesCarousel extends React.Component {

  state = {
    activeSlide: 1,
  };

  pagination = () => {
    const { activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={ENTRIES2.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: Colors.dividerColor,
          marginHorizontal: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
        dotColor={Colors.text.quartinary.dark}
        inactiveDotColor={Colors.text.tertiary.dark}
        inactiveDotOpacity={0.2}
        inactiveDotScale={0.6}
      />
    );
  }

  renderItem({item, index}) {
    return (
      <View style={styles.item}>
        <Image
          style={{ height: 120, width: 100 }}
          source={{
            uri: item.illustration
          }}
        />
        <View style={styles.textContainer}>
          <Text>{ item.title }</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={ENTRIES2}
          renderItem={this.renderItem}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          sliderWidth={400}
          sliderHeight={800}
          itemWidth={120}
          style={{ marginTop: 200, marginBottom: 200 }}
        />
        {this.pagination()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: Colors.dividerColor,
    elevation:4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
});