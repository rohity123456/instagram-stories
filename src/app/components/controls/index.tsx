import React from 'react';
import { House, Search, SquarePlus } from 'lucide-react';
import InstaIconButton from '@/components/common/instaIconButton';
import InstaWatchIcon from '@/components/icons/InstaWatchIcon';
import UserAvatar from '@/components/common/userAvatar';

const Controls = () => {
  return (
    <div className='flex justify-between items-center p-2'>
      <InstaIconButton>
        <House />
      </InstaIconButton>
      <InstaIconButton>
        <Search />
      </InstaIconButton>
      <InstaIconButton>
        <SquarePlus />
      </InstaIconButton>
      <InstaIconButton>
        <InstaWatchIcon />
      </InstaIconButton>
      <InstaIconButton>
        <UserAvatar
          avatar='https://i.pravatar.cc/150?img=1'
          width={28}
          height={28}
        />
      </InstaIconButton>
    </div>
  );
};

export default Controls;
