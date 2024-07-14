import React from 'react';
import Post from './components/post';
import { IPost } from '@/types';

const Posts = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className='flex flex-col' data-testid='posts'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
