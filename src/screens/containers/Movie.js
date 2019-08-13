import React, {Component} from 'react';
import MovieLayout from "../components/MovieLayout";
import Player from "../../player/containers/Player";
import Header from "../components/header";
import { connect } from 'react-redux';
import Close from "../../sections/components/Close";
import Details from "../../videos/components/Details";
import {Animated} from 'react-native';

class Movie extends Component {

    state = {
        opacity: new Animated.Value(0)
    };

    closeVideo = () => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null,
            }
        })
    };

    componentDidMount() {
        Animated.timing(
            this.state.opacity, {
                toValue: 1,
                duration: 1000,
            }
        ).start()
    }

    render() {
        return (
            <Animated.View style={{flex: 1, opacity: this.state.opacity}}>
                <MovieLayout>
                    <Header>
                        <Close onPress={this.closeVideo}/>
                    </Header>
                    <Player/>
                    <Details {...this.props.movie}/>
                </MovieLayout>
            </Animated.View>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(Movie);
