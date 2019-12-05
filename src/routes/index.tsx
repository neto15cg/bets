import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from 'util/Colors';
import Login from 'screens/Auth/Login';
import Register from 'screens/Auth/Register';
import HomePunter from 'screens/Punter/Home';
import CodesPunter from 'screens/Punter/Codes';
import LastBetsPunter from 'screens/Punter/LastBets';
import RoundsPunter from 'screens/Punter/Rounds';
import GamesPunter from 'screens/Punter/Games';
import BetsPunter from 'screens/Punter/Bets';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen: Register,
    },
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerBackTitle: 'Voltar',
    },
    initialRouteName: 'Login',
  }
);

const RoundsPunterStack = createStackNavigator(
  {
    RoundsPunter: {
      screen: RoundsPunter,
      navigationOptions: {
        header: null,
      },
    },
    GamesPunter,
    BetsPunter,
  },
  {
    headerLayoutPreset: 'center',
    initialRouteName: 'RoundsPunter',
  }
);

const PunterStack = createMaterialBottomTabNavigator(
  {
    HomePunter: {
      screen: HomePunter,
      navigationOptions: {
        tabBarIcon: <MaterialCommunityIcons name="home" size={24}></MaterialCommunityIcons>,
        title: 'Home',
      },
    },
    CodesPunter: {
      screen: CodesPunter,
      navigationOptions: {
        tabBarIcon: <MaterialCommunityIcons name="barcode" size={24}></MaterialCommunityIcons>,
        title: 'Códigos',
      },
    },
    Rounds: {
      screen: RoundsPunterStack,
      navigationOptions: {
        tabBarIcon: <MaterialIcons name="turned-in" size={24}></MaterialIcons>,
        title: 'Rodadas',
      },
    },
    LastBetsPunter: {
      screen: LastBetsPunter,
      navigationOptions: {
        tabBarIcon: <MaterialCommunityIcons name="gamepad" size={24}></MaterialCommunityIcons>,
        title: 'Últimas Apostas',
      },
    },
  },
  {
    initialRouteName: 'LastBetsPunter',
    activeColor: Colors.title,
    inactiveColor: 'blue',
    barStyle: { backgroundColor: Colors.primary },
  }
);

const AppSwitch = createSwitchNavigator(
  {
    AuthStack,
    PunterStack,
    // MiddlewareAuth: {
    //   screen: MiddlewareAuth,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
  },
  {
    initialRouteName: 'PunterStack',
  }
);
export default createAppContainer(AppSwitch);
