import React, { useReducer, useMemo } from 'react'
import PostsContext from './PostsContext'
import {reducer, initialState} from '../store/reducers'


function PostsProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => ({ state, dispatch }), [state]);
    // const [posts, setPosts] = useState([]);
    // const [edited, setEdited] = useState(empty);

    // const like = (id) => {
    //     setPosts((prevState) => prevState.map(o => {
    //         if (o.id !== id) {
    //             return o;
    //         }

    //         const likedByMe = !o.likedByMe;
    //         const likes = likedByMe ? o.likes + 1 : o.likes - 1;
    //         return { ...o, likedByMe, likes };
    //     }));
    // };

    // const remove = (id) => {
    //     setPosts((prevState) => prevState.filter(o => o.id !== id));
    // };

    // const toggleVisibility = (id) => {
    //     setPosts((prevState) => prevState.map(o => {
    //         if (o.id !== id) {
    //             return o;
    //         }

    //         const hidden = !o.hidden;
    //         return { ...o, hidden };
    //     }));
    // };

    // const save = (post) => {
    //     if (edited?.id === 0) {
    //         setPosts((prevState) => [{ ...post }, ...prevState]);
    //         setEdited(empty);
    //         return;
    //     }
    //     setPosts((prevState) => prevState.map(o => {
    //         if (o.id !== post.id) {
    //             return o;
    //         }
    //         return { ...post };
    //     }));
    //     setEdited(empty);
    //     return;
    // };

    // const edit = (id) => {
    //     const post = posts.find(o => o.id === id);
    //     if (post === undefined) {
    //         return;
    //     }

    //     setEdited(post);
    // };

    // const cancel = () => {
    //     //setEditingStarted(false);
    //     setEdited(empty);
    //     //console.log('handleCancelEditing');
    // };

    // const submit = () => {
    //     const parsed = edited.tags?.map(o => o.replace('#', '')).filter(o => o.trim() !== '') || [];
    //     const tags = parsed.length !== 0 ? parsed : null;
    //     save({
    //         ...edited,
    //         id: edited.id || Date.now(),
    //         created: edited.created || Date.now(),
    //         tags,
    //         photo: edited.photo?.url ? edited.photo : null
    //         // photo: post.photo?.url ? { alt: '', ...post.photo } : null 
    //     });
    //     setEdited(empty);
    // };

    // const change = ({name, value}) => {
    //     if (name === 'tags') {
    //         const parsed = value.split(' ');
    //         setEdited((prevState) => ({ ...prevState, [name]: parsed }));
    //         return;
    //     }
    //     if (name === 'photo') {
    //         const photoUrl = value.trim();
    //         if (photoUrl) {
    //             setEdited((prevState) => ({ ...prevState, [name]: { url: photoUrl, alt: '' } }));
    //         }
    //         return;
    //     }

    //     if (name === 'alt') {
    //         setEdited((prevState) => ({ ...prevState, photo: { ...prevState.photo, [name]: value } }));
    //         return;
    //     }

    //     setEdited((prevState) => ({ ...prevState, [name]: value }));
    // };

    // const value = { posts, like, remove, toggleVisibility, edit, save, cancel, submit, change, edited};

    return (
        <PostsContext.Provider value={value}>
            {props.children}
        </PostsContext.Provider>
    )
}

export default PostsProvider
