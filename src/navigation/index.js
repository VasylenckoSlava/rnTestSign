import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import AboutScreen from "../screens/About/Home";
import SighInScreen from "../screens/SignIn/SignIn";
import Dashboard from "../screens/Dashboard/Dashboard";

const AppStack = createStackNavigator({
  Dashboard: Dashboard,
  About: AboutScreen
});
const AuthStack = createStackNavigator({ SignIn: SighInScreen });

export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthStack,
    App: AppStack
  })
);
