/*
* action types
*/
const PREFIX = 'POST_ACTION@';
export const ADD_POST = PREFIX + 'ADD_POST';
export const REMOVE_POST = PREFIX + 'REMOVE_POST';
export const EDIT_POST = PREFIX + 'EDIT_POST';
export const ADD_COMMENT = PREFIX + 'ADD_COMMENT';
export const REMOVE_COMMENT = PREFIX + 'REMOVE_COMMENT';

/*
* action creators
*/
export const addPost = (post) => ({
    type: ADD_POST,
    post
});

export const removePost = (id) => ({
    type: REMOVE_POST,
    id
});

export const editPost = (post) => ({
    type: EDIT_POST,
    post
});

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
});

export const removeComment = (commentsFilter) => ({
    type: REMOVE_COMMENT,
    commentsFilter
});