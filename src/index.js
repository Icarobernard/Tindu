import Login from './Login';
import Cadastro from './Cadastro';
import Principal from './Principal';

import { createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Login,
    About: Cadastro,
    Principal: Principal,
  })
);

// const TabNavigator = createAppContainer(
//   createBottomTabNavigator({
//     Home: Login,
//     About: Cadastro,
//   })
// );

// const DrawerNavigator = createAppContainer(
//   createDrawerNavigator({
//     Home: Login,
//     About: Cadastro,
//   })
// );

export default Routes;