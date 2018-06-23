import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
} from 'react-native';
import Post from './Post';

class ViewPosts extends Component {
    static navigationOptions = {
        title: 'Posts',
    };

    render() {
        const {postIds} = this.props;
        let data;
        data = postIds.map((value, key) => {
            // console.log(key);
            return {id: key}
        }).toArray();
        console.log(data);
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => navigation.navigate('AddPost', {
                        otherParam: 'Create Post',
                    })}
                    title="Add new Post"
                />
                <FlatList
                    data={data}
                    renderItem={({item}) => <Post navigation={navigation} key={item.id} id={item.id}/>}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    const {postState} = state;
    const {postIds} = postState;
    return {
        postIds: postIds
    }
}

export default connect(mapStateToProps)(ViewPosts);
// export default ViewPosts;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});