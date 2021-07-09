import React from 'react';
import Tags from '../Tags/Tags';
import './Post.css';

function Post({post, onLike, onRemove, onHide, onShow, onEdit}) {
    const {author} = post;
    const {photo} = post;    

    const handleClick = () => {
        onLike(post.id);
    };

    const handleRemove = () => {
        onRemove(post.id); 
    };   
    
    const handleHide = () => {
        onHide(post.id);
    };

    const handleShow = () => {
        onShow(post.id);
    };

    if (post.hidden) {
        return (
            <article>
                <header>
                    <img src={author.avatar} className="Post-avatar" width="50" height="50" alt={author.name}/>
                    <h5>{author.name}</h5>
                    <button onClick={handleShow}>показать</button>
                </header>
            </article>
        );
    }

    const handleEdit = () => {
        onEdit(post.id);  
    };

    return (
    <article>
        <header>
            <img src={author.avatar} className="Post-avatar" width="50" height="50" alt={author.name}/>
            <h5>{author.name}</h5>
            <button onClick={handleRemove}>удалить</button>
            <button onClick={handleHide}>скрыть</button>
            <button onClick={handleEdit}>изменить</button>
            <div>{post.created}</div>
            {post.hit && <span>HIT</span>}
        </header>
        <div>
            <div className="Post-content">{post.content}</div>
            {photo && <img src={photo.url} alt={photo.alt} className="Post-photo"/>}
        </div>
        <footer>
            <span className="Post-likes" onClick={handleClick}>
                <img 
                src={post.likedByMe ? "https://lms.openjs.io/liked.svg" : "https://lms.openjs.io/unliked.svg"} 
                alt="likes" 
                width="20" 
                height="20"
                />
                <span className="Post-likes-count">{post.likes}</span>
                {post.tags && <Tags tags={post.tags}/>}
            </span>
        </footer>
    </article>
    );
}

export default Post
