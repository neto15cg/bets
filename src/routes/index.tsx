import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from 'screens/Auth/Login';
import Register from 'screens/Auth/Register';

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

const AppSwitch = createSwitchNavigator(
  {
    AuthStack,
    // MiddlewareAuth: {
    //   screen: MiddlewareAuth,
    //   navigationOptions: {
    //     header: null,
    //   },
    // },
  },
  {
    initialRouteName: 'AuthStack',
  }
);
export default createAppContainer(AppSwitch);
