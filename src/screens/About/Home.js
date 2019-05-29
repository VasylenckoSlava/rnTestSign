import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import { auth } from "../../../config/config.js";

class About extends Component {
  static navigationOptions = {
    title: "About"
  };

  signOut = () => {
    auth.signOut()
      .then(() => {
        console.log("Logged out ...");
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>About Screen</Text>
        <StatusBar barStyle="default" />
        <Button title="Sign out" onPress={this.signOut} />
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
