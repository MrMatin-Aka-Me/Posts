import React, { useRef } from 'react'
//import PostsContext from '../../contexts/PostsContext';
import { editCancel, editChange, editSubmit } from '../../store/actions';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';


function PostForm() {
    const dispatch = useDispatch();
    const edited = useSelector((state) => state.edited, shallowEqual);
    const firstFocusEl = useRef(null);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(editSubmit());
        //dispatch({type: 'POST_EDIT_SUBMIT'});
        //submit();
        firstFocusEl.current.focus();
    };

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        dispatch(editChange(name, value));
        //dispatch({type: 'POST_EDIT_CHANGE', payload: {name, value}});
        //change({name, value});
    };

    const handleReset = (evt) => {
        evt.preventDefault();
        dispatch(editCancel());
        //dispatch({type: 'POST_EDIT_CANCEL'});
        //cancel();
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                ref={firstFocusEl}
                name="content"
                placeholder="content"
                value={edited.content || ''}
                onChange={handleChange}
            />
            <input
                name="tags"
                placeholder="tags"
                value={edited.tags?.join(' ') || ''}
                onChange={handleChange}
            />
            <input
                name="photo"
                placeholder="photo"
                value={edited.photo?.url || ''}
                onChange={handleChange}
            />
            <input
                name="alt"
                placeholder="alt"
                value={edited.photo?.alt || ''}
                onChange={handleChange}
            />
            <button>Ok</button>
            {edited.id !== 0 && <button onClick={handleReset}>Отменить</button>}
        </form>
    )
}

export default PostForm
