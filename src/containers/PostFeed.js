import React from 'react';
import { FlatList } from 'react-native';

import { Post } from '../presentation';

export default class PostFeed extends React.Component {

  constructor() {
    super();
  }

  renderPost = () => {
    return <Post />;
  }

  render() {
    return (
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          keyExtractor={item => item.toString()}
          renderItem={() => this.renderPost()}
        />
      );
  }
  
}