import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";

const API = "https://swapi.co/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
    this.state = {
      loading: false,
      data: [],
      error: null
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `${API}/people/`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false
        });
        this.arrayholder = res.results;
        console.log(this.arrayholder);
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return <View style={styles.renderSeparator} />;
  };

  searchFilterFunction = text => {
    this.setState({
      value: text
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData
    });
  };

  renderHeader = () => {
    const { value } = this.state;
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={value}
      />
    );
  };

  onNavigate = ({ item }) => {
    this.navigate("About", {
      name: item.name,
      hair_color: item.hair_color,
      height: item.height,
      birth_year: item.birth_year,
      mass: item.mass,
      skin_color: item.skin_color,
      eye_color: item.eye_color,
      gender: item.gender,
      homeworld: item.homeworld,
      vehicles: item.vehicles,
        films: item.films
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={
                <TouchableOpacity onPress={() => this.onNavigate({ item })}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              }
            />
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  renderSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE"
  },
  activityIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Dashboard;
