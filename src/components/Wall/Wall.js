import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import Post from '../Post/Post';
import PostForm from '../PostForm/PostForm';

function Wall() {
  
  const posts = useSelector((state) => state.posts, shallowEqual);

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
