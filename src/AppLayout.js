import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import API from '../utils/Api';
import Home from './screens/containers/Home';
import Header from './screens/components/header';
import SuggestionList from './videos/containers/SuggentionList';
import CategoryList from './videos/containers/CategoryList';
import Movie from './screens/containers/Movie';
import Search from "./sections/containers/Search";

class AppLayout extends Component {
    async componentDidMount() {
        const categoryList = await API.getMovies();
        this.props.dispatch({
            type: 'SET_CATEGORY_LIST',
            payload: {
                categoryList
            }
        });
        const suggestionList = await API.getSuggestion(10);
        this.props.dispatch({
            type: 'SET_SUGGESTION_LIST',
            payload: {
                suggestionList
            }
        })
    }

    render() {
        if (this.props.selectedMovie) {
            return <Movie/>
        }
        return (
            <Home>
                <Header/>
                <Search/>
                <CategoryList/>
                <SuggestionList/>
            </Home>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedMovie: state.selectedMovie,
    }
}

export default connect(mapStateToProps)(AppLayout);
