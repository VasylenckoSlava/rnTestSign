import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

class SignIn extends Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  _signInAsync = () => {
    this.props.navigation.navigate("Dashboard");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
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

export default SignIn;
