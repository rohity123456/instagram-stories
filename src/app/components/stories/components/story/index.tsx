import React from 'react';
import UserAvatar from '@/components/common/userAvatar';

interface StoryProps {
  username: string;
  avatar: string;
  handleClick: () => void;
}
function Story({ username, avatar, handleClick }: StoryProps) {
  return (
    <div
      className='flex flex-col items-center space-y-1 cursor-pointer min-w-[56px]'
      onClick={handleClick}
    >
      <UserAvatar avatar={avatar} username={username} isHavingStories={true} />
      <p className='max-w-[50px] truncate text-xs'>{username.toLowerCase()}</p>
    </div>
  );
}

export default Story;
