import React from 'react'
import Post from '../Post/Post';
function Wall(props) {
    const posts = [
      {
        id:2,
        author: {
          id: 1,
          avatar: 'https://lms.openjs.io/logo_js.svg',
          name: 'OpenJS',
        },
        content: 'Ну как, вы справились с домашкой?',
        photo: null,
        hit: true,
        likes: 222,
        likedByMe: true,
        tags: ["deadline", "homework"],
        created: 1603774800,
      },
      {
        id:1,
        author: {
          id: 1,
          avatar: 'https://lms.openjs.io/logo_js.svg',
          name: 'OpenJS',
        },
        content: null,
        photo: {
            url: 'https://lms.openjs.io/openjs.jpg',
            alt: 'openjs logo',
        },
        hit: true,
        likes: 10,
        likedByMe: true,
        tags: [],
        created: 1603501200,
      }
    ];

    return (
        <div>
            {posts.map(o => <Post key={o.id} post={o} />)}
            
        </div>
    )
}

export default Wall
