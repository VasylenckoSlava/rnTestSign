import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import AboutScreen from "../screens/About/Home";
import SighInScreen from "../screens/SighIn/SighIn";

const TabNavigator = createBottomTabNavigator({
  About: AboutScreen,
  SighIn: SighInScreen
});

export default createAppContainer(TabNavigator);
