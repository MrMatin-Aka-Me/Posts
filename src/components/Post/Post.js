import React from 'react';
import './Post.css';

function Post({post}) {
    const {author} = post;
    const likePhotoUrl = post.likedByMe ? "https://lms.openjs.io/liked.svg" : "https://lms.openjs.io/unliked.svg";     

    return (
    <article>
        <header>
            <img src={author.avatar} className="Post-avatar" width="50" height="50" alt={author.name}/>
            <h5>{author.name}</h5>
            <div>{post.created}</div>
            {post.hit && <span>HIT</span>}
        </header>
        <div>
            <div className="Post-content">{post.content}</div>
            <img src={post.photo} alt="photo" class="Post-photo"/>
        </div>
        <footer>
            <span className="Post-likes">
                <img src={likePhotoUrl} width="20" height="20"/>
                <span className="Post-likes-count">{post.likes}</span>
            </span>
        </footer>
    </article>
    )
}

export default Post
