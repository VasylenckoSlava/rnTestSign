import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import { auth } from "../../../config/config.js";

class About extends Component {
  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params;
    this.state = {
      homeworld: "",
      vehicles: [],
      vehiclesTitle: [],
      films: [],
      error: null,
      loading: true
    };
  }
  static navigationOptions = {
    title: "About"
  };

  componentDidMount() {
    Promise.all([
      fetch(this.params.homeworld),
      fetch(this.params.vehicles[0]),
      fetch(this.params.films[0])
    ])
      .then(([res1, res2, res3]) =>
        Promise.all([res1.json(), res2.json(), res3.json()])
      )
      .then(([data1, data2, data3]) =>
        this.setState({
          homeworld: data1.name,
          vehicles: data2.name,
          vehiclesTitle: data2.model,
          films: data3.title,
          loading: false
        })
      )
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  signOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Logged out ...");
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  render() {
    const {
      name,
      height,
      birth_year,
      mass,
      hair_color,
      skin_color,
      eye_color,
      gender
    } = this.params;
    const { homeworld, vehicles, films, vehiclesTitle } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Text style={styles.description}>Name: {name}</Text>
        <Text style={styles.description}>Gender: {gender}</Text>
        <Text style={styles.description}>Height: {height}</Text>
        <Text style={styles.description}>Homeworld: {homeworld}</Text>
        <Text style={styles.description}>Vehicles: {vehicles}</Text>
        <Text style={styles.description}>Vehicles Model: {vehiclesTitle}</Text>
        <Text style={styles.description}>Color of hair: {hair_color}</Text>
        <Text style={styles.description}>Color of skin: {skin_color}</Text>
        <Text style={styles.description}>Color of eye: {eye_color}</Text>
        <Text style={styles.description}>Date of birth: {birth_year}</Text>
        <Text style={styles.description}>Mass: {mass}</Text>
        <Text style={styles.description}>Films: {films}</Text>
        <Button
          title="Sign out"
          onPress={this.signOut}
          style={{ paddingBottom: 20 }}
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
  description: {
    fontWeight: "bold"
  }
});

export default About;
