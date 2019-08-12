import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  Text
} from "react-native";
import Layout from "../components/SuggestionListLayout";
import Empty from "../components/Empty";
import Separator from "../components/VerticalSeparator";
import Suggestion from "../components/Suggestion";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    list: state.suggestionList
  };
}

class SuggentionList extends Component {
  keyExtractor = item => item.id.toString();

  renderEmpty = () => <Empty text="No hay Sugerencias" />;

  itemSeparator = () => <Separator text="No hay Sugerencias" />;

  renderItem = ({ item }) => {
    return <Suggestion {...item} />;
  };

  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(SuggentionList);
