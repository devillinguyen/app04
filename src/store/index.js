import {createStore} from 'redux';
import rootReducer from '../reducers';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {addComment, addPost, editPost, removeComment, removePost} from "../actions/postAction";

const store = createStore(rootReducer, devToolsEnhancer());
// init store
store.dispatch(addPost({id: 1332223, userName: 'Nik', text: 'i love you'}));
store.dispatch(addPost({id: 2222222, userName: 'Nik', text: 'a hihi'}));
store.dispatch(editPost({id: 2222222, userName: 'Nik', text: 'abc'}));
store.dispatch(addComment({id: 123, postId: 2222222, text: 'comment1'}));
export default store;