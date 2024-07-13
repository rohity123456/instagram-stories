import React from 'react';
import Image from 'next/image';
import UserAvatar from '@/components/common/userAvatar';

function Story({ username, avatar }: any) {
  return (
    <div className='flex flex-col items-center space-y-1 cursor-pointer'>
      <UserAvatar avatar={avatar} username={username} isHavingStories={true} />
      <p className='max-w-[58px] truncate text-xs'>{username.toLowerCase()}</p>
    </div>
  );
}

export default Story;
