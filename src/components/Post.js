import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {addComment, removeComment, removePost} from "../actions/postAction";
import Icon from 'react-native-vector-icons/Ionicons';
import Comment from "./Comment";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    _onRemove = () => {
        const {id, dispatch, commentsFilter} = this.props;
        dispatch(removePost(id));
        dispatch(removeComment(commentsFilter));
    }
    _onGoToEdit = () => {
        const {id, navigation} = this.props;
        navigation.navigate('EditPost', {
            titleParam: 'Edit Post',
            postId: id,
        })
    }
    _onChangeText = (text) => {
        this.setState({text});
    }
    _onAddComment = () => {
        const random = Math.random();
        const txt = this.state.text;
        const {dispatch, id} = this.props;
        dispatch(addComment({id: random, postId: id, text: txt}));
        this.setState({text: ''});
    }

    render() {
        const {
            id,
            userName,
            text,
            timestamp,
            commentsFilter,
        } = this.props;
        // const {navigation} = this.props;
        // console.log(navigation);
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.userName}>{userName}</Text>
                    <Button
                        title="Remove"
                        onPress={this._onRemove}
                    />
                    <Button
                        title="Edit"
                        onPress={this._onGoToEdit}
                    />

                </View>
                <View style={styles.content}>
                    <Text style={{fontSize: 18}}>{text}</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.commentIn}>
                        <TextInput
                            style={styles.commentTextInput}
                            onChangeText={this._onChangeText}
                            value={this.state.text}
                        />
                        <Button
                            style={styles.commentButton}
                            title=">"
                            onPress={this._onAddComment}
                        />
                    </View>
                    <View style={styles.commentOut}>
                        {
                            commentsFilter.map((value, key) => {
                                return <Comment key={key} text={value.text}/>
                            }).toArray()
                        }
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    const {id} = props;
    const {postState} = state;
    const {posts, comments} = postState;
    const commentsFilter = comments.filter((e) => e.postId === id);
    let postInfo = posts.get(id);
    postInfo = {
        ...postInfo,
        commentsFilter
    }
    if (postInfo) {
        return postInfo;
    }
    return {};
}

export default connect(mapStateToProps)(Post);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    // header
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    userName: {
        width: 200,
        color: '#ff3d4e',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
    },
    // content
    content: {
        padding: 10,
    },
    // footer
    footer: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'column',
    },
    // footer > commentIn
    commentIn: {
        flex: 1,
        flexDirection: 'row',
    },
    commentTextInput: {
        flex: 1,
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: '#636e72',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    commentButton: {
        flex: 1,
        fontSize: 10,
    },
    // footer > commentOut
    commentOut: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    }
});