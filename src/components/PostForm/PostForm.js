import React, { useState, useRef, useEffect } from 'react'

const empty = {
    id: 0,
    author: {
        avatar: 'https://lms.openjs.io/logo_js.svg',
        name: 'OpenJS',
    },
    content: '',
    photo: null,
    hit: false,
    likes: 0,
    likedByMe: false,
    hidden: false,
    tags: null,
    created: 0,
};

function PostForm({edited=empty, onSave}) {
    const [post, setPost] = useState(edited);
    const firstFocusEl = useRef(null);
    useEffect(() => {
        setPost(edited);
    }, [edited]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const parsed = post.tags?.map(o => o.replace('#', '')).filter(o => o.trim() !== '') || [];
        const tags = parsed.length !== 0 ? parsed : null;
        onSave({ 
            ...post, 
            id: post.id || Date.now(), 
            created: post.created || Date.now(), 
            tags, 
            photo: post.photo?.url ? { alt: '', ...post.photo } : null 
        });
        setPost(empty);
        firstFocusEl.current.focus();
    };

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        if (name === 'tags') {
            const parsed = value.split(' ');
            setPost((prevState) => ({ ...prevState, [name]: parsed }));
            return;
        }

        setPost((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                ref={firstFocusEl} 
                name="content" 
                placeholder="content" 
                value={post.content || ''} 
                onChange={handleChange}/>
            <input 
                name="tags" 
                placeholder="tags" 
                value={post.tags?.join(' ') || ''} 
                onChange={handleChange}/>
            <button>Ok</button>
        </form>
    )
}

export default PostForm
