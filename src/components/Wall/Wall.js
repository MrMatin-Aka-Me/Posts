import React, { useContext } from 'react'
import PostsContext from '../../contexts/PostsContext';
import Post from '../Post/Post';
import PostForm from '../PostForm/PostForm';


function Wall() {
  const {state: {posts}} = useContext(PostsContext);
  // const [posts, setPosts] = useState([
  //   {
  //     id:2,
  //     author: {
  //       id: 1,
  //       avatar: 'https://lms.openjs.io/logo_js.svg',
  //       name: 'OpenJS',
  //     },
  //     content: 'Ну как, вы справились с домашкой?',
  //     photo: null,
  //     hit: true,
  //     likes: 222,
  //     likedByMe: true,
  //     hidden: true,
  //     tags: ["deadline", "homework"],
  //     created: 1603774800,
  //   },
  //   {
  //     id:1,
  //     author: {
  //       id: 1,
  //       avatar: 'https://lms.openjs.io/logo_js.svg',
  //       name: 'OpenJS',
  //     },
  //     content: null,
  //     photo: {
  //         url: 'https://lms.openjs.io/openjs.jpg',
  //         alt: 'openjs logo',
  //     },
  //     hit: true,
  //     likes: 10,
  //     likedByMe: true,
  //     hidden: false,
  //     tags: [],
  //     created: 1603501200,
  //   }
  // ]);
  //const [editingStarted, setEditingStarted] = useState(false);
  //const [edited, setEdited] = useState();

  // const handlePostSave = (post) => {
  //   save(post);
  // };

  // const handleCancelEditing = () => {
  //   cancel();
  // };

  return (
    <>
      <PostForm />
      <div>
        {posts.map(o => <Post key={o.id} post={o}/>)}
      </div>
    </>
  )
}

export default Wall
