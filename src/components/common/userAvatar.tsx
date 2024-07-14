import Image from 'next/image';
import React from 'react';

interface UserAvatarProps {
  username?: string;
  avatar: string;
  width?: number;
  height?: number;
  isHavingStories?: boolean;
}
const UserAvatar = ({
  username,
  avatar,
  width = 50,
  height = 50,
  isHavingStories = false
}: UserAvatarProps) => {
  return (
    <div
      className={`${
        isHavingStories
          ? 'bg-gradient-to-tr from-yellow-400 to bg-fuchsia-600 '
          : ''
      } p-[2px] rounded-full`}
    >
      <div className='bg-white p-[2px] rounded-full'>
        <Image
          className='rounded-full'
          src={avatar}
          width={width}
          height={height}
          alt={username || 'avatar'}
        />
      </div>
    </div>
  );
};

export default UserAvatar;
