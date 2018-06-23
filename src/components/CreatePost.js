import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import {connect} from 'react-redux';
import {addPost} from "../actions/postAction";

class CreatePost extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('otherParam'),
        };
    };

    constructor(props) {
        super(props);
        this.state = {text: 'init'};
    }

    _onSubmit = () => {
        const random = Math.random();
        const {dispatch} = this.props;
        const txt = this.state.text;
        dispatch(addPost({id: random, userName: 'Bao Nguyen', text: txt}));
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
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    multiline={true}
                    numberOfLines={4}
                />
                <Button
                    title="Submit"
                    onPress={this._onSubmit}
                />
            </View>
        );
    }
}

export default connect()(CreatePost);

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