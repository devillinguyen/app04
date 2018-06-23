import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
class Comment extends Component {
    render() {
        const {text} = this.props;
        return (
            <View>
                <Text>{text}</Text>
            </View>
        );
    }
}

export default Comment;