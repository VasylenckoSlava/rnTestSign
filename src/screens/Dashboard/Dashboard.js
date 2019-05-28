import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class Dashboard extends Component {
  static navigationOptions = {
    title: "Dashboard"
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{backgroundColor:'blue', paddingVertical:10, paddingHorizontal:20, borderRadius: 5}}
          onPress={() => this.props.navigation.navigate("About")}
        >
          <Text style={styles.button}>Show me more about the app</Text>
        </TouchableOpacity>
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
  button: {
    fontWeight: "bold",
    color: "white"
  }
});

export default Dashboard;
