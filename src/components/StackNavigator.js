import {StackNavigator} from 'react-navigation';
import ViewPosts from "./ViewPosts";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";

const RootStack = StackNavigator(
    {
        Home: {
            screen: ViewPosts,
        },
        AddPost: {
            screen: CreatePost,
        },
        EditPost: {
            screen: EditPost,
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#22a6b3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default RootStack;