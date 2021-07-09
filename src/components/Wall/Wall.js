import React, {useState} from 'react'
import Post from '../Post/Post';
import PostForm from '../PostForm/PostForm';


function Wall(props) {
    const [posts, setPosts] = useState([
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
        hidden: true,
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
        hidden: false,
        tags: [],
        created: 1603501200,
      }
    ]);

    const [edited, setEdited] = useState();

    const handlePostLike = (id) => {
      setPosts((prevState) => prevState.map(o => {
        if (o.id !== id) {
          return o;
        }

        const likedByMe = !o.likedByMe;
        const likes = likedByMe ? o.likes + 1 : o.likes - 1;
        return {...o, likedByMe, likes};
      }));
    };

    const handlePostRemove = (id) => {
      setPosts((prevState) => prevState.filter(o => o.id !== id));
    };

    const handlePostHideShow = (id) => {
      setPosts((prevState) => prevState.map(o => {
        if (o.id !== id) {
          return o;
        }

        const hidden = !o.hidden;
        return {...o, hidden};
      }));
    };

    const handlePostSave = (post) => {
      if (edited !== undefined){
        setPosts((prevState) => prevState.map(o => {
          if (o.id !== post.id) {
            return o;
          }
          return {...post};
        }));
        setEdited(undefined);
        return;
      }
      setPosts((prevState) => [{...post}, ...prevState]);
    };   
    
    const handlePostEdit = (id) => {
      const post = posts.find(o => o.id === id);
      if (post === undefined) {
        return;
      }

      setEdited(post);
    }; 

    return (
      <>
        <PostForm edited={edited} onSave={handlePostSave}/>
        <div>
            {posts.map(o => <Post 
                              key={o.id} 
                              post={o} 
                              onLike={handlePostLike} 
                              onRemove={handlePostRemove} 
                              onHide={handlePostHideShow} 
                              onEdit={handlePostEdit}
                              onShow={handlePostHideShow} />)}
        </div>
      </>
    )
}

export default Wall
