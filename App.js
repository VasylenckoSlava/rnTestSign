/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import RootNavigation from "./src/navigation";

export default class App extends Component<Props> {
  render() {
    return <RootNavigation navigation={this.props.navigation}/>;
  }
}
