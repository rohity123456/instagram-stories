import React from 'react';
import Post from './components/post';

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <div className='flex flex-col'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
