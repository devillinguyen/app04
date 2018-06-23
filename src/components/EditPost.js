import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import {connect} from 'react-redux';
import {editPost} from "../actions/postAction";

class EditPost extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('titleParam'),
        };
    };

    constructor(props) {
        super(props);
        this.state = {text: this.props.text};
    }

    _onSubmit = () => {
        // const random = Math.random();
        const {dispatch, id, userName} = this.props;
        const txt = this.state.text;
        dispatch(editPost({id: id, userName: userName, text: txt}));
        this.props.navigation.navigate('Home');
    }


    render() {
        console.log(this.state.text);
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Writing your status</Text>
                <TextInput
                    style={styles.input}
                    placeholder="typing..."
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                    title="Submit"
                    onPress={this._onSubmit}
                />
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    // props
    const {navigation} = props;
    const postId = navigation.getParam('postId');
    // state
    const {postState} = state;
    const {posts} = postState;
    const postInfo = posts.get(postId);
    // return props
    if (postInfo) {
        return postInfo;
    }
    return {};
}

export default connect(mapStateToProps)(EditPost);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 40,
        justifyContent: 'center',
    },
    input: {
        fontSize: 30,
    }
});