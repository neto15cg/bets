import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import Main from './src/Main';

console.disableYellowBox = true;

export interface Props {
  navigation: NavigationScreenProp<NavigationState & NavigationParams>;
}

export default class App extends Component<Props> {
  backHandler: any;

  componentDidMount(): void {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount(): void {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    const { navigation } = this.props;
    navigation && navigation.goBack && navigation.goBack();
    return true;
  };

  render() {
    return <Main />;
  }
}
