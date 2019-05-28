import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput
} from "react-native";

class SignUp extends Component {
  static navigationOptions = {
    title: "Please sign up"
  };
  state = {
    email: "",
    pass: ""
  };
  _signInAsync = () => {
    this.props.navigation.navigate("Dashboard");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Email Address:</Text>
        <TextInput
          editable
          keyboardType={"email-address"}
          placeholder={"enter your email address.."}
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
          style={styles.textInputStyle}
        />
        <Text>Password:</Text>
        <TextInput
          editable
          keyboardType={"email-address"}
          secureTextEntry
          placeholder={"enter your email password.."}
          onChangeText={text => this.setState({ pass: text })}
          value={this.state.pass}
          style={styles.textInputStyle}
        />
        <Button title="Sign up!" onPress={this._signInAsync} />
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
  },
  textInputStyle: {
    width: 250,
    marginVertical: 10,
    padding: 5,
    borderColor: "grey",
    borderRadius: 3,
    borderWidth: 1
  }
});

export default SignUp;
