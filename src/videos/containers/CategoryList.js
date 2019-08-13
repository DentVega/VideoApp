import React, { Component } from "react";
import { FlatList } from "react-native";
import Empty from "../components/Empty";
import Separator from "../../sections/components/Separator";
import Layout from "../components/CategoryListLayout";
import Category from "../components/Category";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    list: state.categoryList
  };
}

class CategoryList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
  itemSeparator = () => <Separator />;
  renderItem = ({ item }) => {
    return <Category {...item} />;
  };
  render() {
    return (
      <Layout title="Categorias">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(CategoryList);
