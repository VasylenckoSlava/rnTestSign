import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from "react-native";

class About extends Component {
  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>About Screen</Text>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey"
  }
});

export default About;
