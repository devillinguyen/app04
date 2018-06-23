import {Map, OrderedMap} from 'immutable';
import {ADD_COMMENT, ADD_POST, EDIT_POST, REMOVE_COMMENT, REMOVE_POST} from "../actions/postAction";

const initialState = {
    posts: Map(),
    postIds: OrderedMap(),
    comments: Map(),
    commentIds: OrderedMap(),
}

function addPost(state, action) {
    const {post} = action;
    if (post) {
        const {id} = post;
        if (id) {
            let {posts, postIds} = state;
            let currentPost = posts.get(id);
            if (!currentPost) {
                currentPost = {id};
            }
            currentPost = {
                ...currentPost,
                ...post
            }
            let {timestamp} = currentPost;
            if (!timestamp) {
                timestamp = Date.now();
                currentPost = {...currentPost, timestamp};
            }
            postIds = postIds.set(id, timestamp);
            postIds = postIds.sort((l, r) => {
                if (l < r) {
                    return 1;
                }
                if (l > r) {
                    return -1;
                }
                return 0;
            });
            posts = posts.set(id, currentPost);
            return {...state, posts, postIds};
        }
    }
    return state;
}

function removePost(state, action) {
    const {id} = action;
    if (id) {
        let {posts, postIds} = state;
        posts = posts.delete(id);
        postIds = postIds.delete(id);
        return {...state, posts, postIds};
    }
    return state;
}

function editPost(state, action) {
    const {post} = action;
    if (post) {
        const {id} = post;
        if (id) {
            // if timestamp change
            let {posts, postIds} = state;
            let currentPost = posts.get(id);
            if (currentPost) {
                currentPost = {
                    ...currentPost,
                    ...post
                };
                let {timestamp} = currentPost;
                if (timestamp) {
                    timestamp = Date.now();
                    currentPost = {...currentPost, timestamp};
                    postIds = postIds.set(id, timestamp);
                    postIds = postIds.sort((l, r) => {
                        if (l < r) {
                            return 1;
                        }
                        if (l > r) {
                            return -1;
                        }
                        return 0;
                    });
                    posts = posts.set(id, currentPost);
                    return {...state, posts, postIds};
                }
            }

        }
    }
    return state;
}

function addComment(state, action) {
    const {comment} = action;
    if (comment) {
        const {id} = comment;
        if (id) {
            let {comments, commentIds} = state;
            let currentComment = comments.get(id);
            if (!currentComment) {
                currentComment = {id};
            }
            currentComment = {
                ...currentComment,
                ...comment,
            }
            let {timestamp} = currentComment;
            if (!timestamp) {
                timestamp = Date.now();
                currentComment = {...currentComment, timestamp};
            }
            commentIds = commentIds.set(id, timestamp);
            commentIds = commentIds.sort((l, r) => {
                if (l > r) {
                    return 1;
                }
                if (l < r) {
                    return -1;
                }
                return 0;
            })
            comments = comments.set(id, currentComment)
            return {...state, comments, commentIds}
        }
    }

    return state;
}

function removeComment(state, action) {
    const {commentsFilter} = action;
    if (commentsFilter) {
        let {comments, commentIds} = state;
        commentsFilter.map((value, key) => comments = comments.delete(key));
        commentsFilter.map((value, key) => commentIds = commentIds.delete(key));
        return {...state, comments, commentIds};
    }
    return state;
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action);
        case REMOVE_POST:
            return removePost(state, action);
        case EDIT_POST:
            return editPost(state, action);
        case ADD_COMMENT:
            return addComment(state, action);
        case REMOVE_COMMENT:
            return removeComment(state, action);
        default:
            return state;
    }
}

export default postReducer;