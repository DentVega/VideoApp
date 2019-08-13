import React, {Component} from "react";
import {FlatList} from "react-native";
import Layout from "../components/SuggestionListLayout";
import Empty from "../components/Empty";
import Separator from "../components/VerticalSeparator";
import Suggestion from "../components/Suggestion";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        list: state.suggestionList
    };
}

class SuggentionList extends Component {
    keyExtractor = item => item.id.toString();

    renderEmpty = () => <Empty text="No hay Sugerencias"/>;

    itemSeparator = () => <Separator text="No hay Sugerencias"/>;

    viewMovie = (item) => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item,
            }
        })
    };

    renderItem = ({item}) => {
        return <Suggestion onPress={() => this.viewMovie(item)} {...item} />;
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
