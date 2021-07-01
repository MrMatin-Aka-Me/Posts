import React from 'react';
//import Message from './components/Message/Message';
import Post from './components/Post/Post';

function App() {
  const post = {
    id:1,
    author: {
      id: 1,
      avatar: 'https://lms.openjs.io/logo_js.svg',
      name: 'OpenJS',
    },
    content: 'asdfghjkl',
    photo: 'https://lms.openjs.io/openjs.jpg',
    hit: true,
    likes: 100,
    likedByMe: true,
    created: 1603501200,
  }
  return (
    <div className="App">
      <Post post={post}/>
    </div>
  );
}

export default App;
