import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Home from "./src/screens/containers/Home";
import Header from "./src/screens/components/header";
import SuggestionList from "./src/videos/containers/SuggentionList";
import CategoryList from "./src/videos/containers/CategoryList";
import API from "./utils/Api";
import { Video } from "expo-av";
import Player from "./src/player/containers/Player";
import { Provider } from "react-redux";
import store from "./store";

export default class App extends Component {
  async componentDidMount() {
    const suggestionList = await API.getSuggestion(10);
    const categoryList = await API.getMovies();
    store.dispatch({
      type: "SET_CATEGORY_LIST",
      payload: {
        categoryList
      }
    });
    store.dispatch({
      type: "SET_SUGGESTION_LIST",
      payload: {
        suggestionList
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header>
            <Text>App</Text>
          </Header>
          <Player />
          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff"
  }
});
