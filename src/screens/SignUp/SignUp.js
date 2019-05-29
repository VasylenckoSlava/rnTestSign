import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput
} from "react-native";
import { f, auth, database } from "../../../config/config";

// for test sign up function use this credential  "test27052@gmail.com", "qwerty1"
class SignUp extends Component {
  static navigationOptions = {
    title: "Please sign up"
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      loggedIn: false
    };
    f.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true
        });
        console.log("Logged in ...", user);
      } else {
        this.setState({
          loggedIn: true
        });
      }
    });
  }

  _signInAsync = async (email, pass) => {
    if (email !== "" && pass !== "") {
      try {
        let user = await auth.signInWithEmailAndPassword(email, pass);
        console.log(user);
        this.registerUser(email, pass);
        this.props.navigation.navigate("Dashboard");
      } catch (error) {
        alert("User not found", error);
      }
    } else {
      alert("Missing email or password");
    }
  };

  registerUser = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userObj => console.log(email, password, userObj))
      .catch(error => console.log("error logging in", error));
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
        <Button
          title="Sign up!"
          onPress={() => this._signInAsync(this.state.email, this.state.pass)}
        />
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
