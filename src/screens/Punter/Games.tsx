import React, { Component } from 'react';
import { View } from 'react-native';
import Colors from 'util/Colors';

export default class Games extends Component {
  static navigationOptions = {
    title: 'Jogos',
    headerStyle: {
      backgroundColor: Colors.backgroundSecundary,
    },
  };

  render() {
    return <View />;
  }
}
