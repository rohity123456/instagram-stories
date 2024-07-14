import React from 'react';
import { House, Search, SquarePlus } from 'lucide-react';
import InstaIconButton from '@/components/common/instaIconButton';
import InstaWatchIcon from '@/components/icons/InstaWatchIcon';
import UserAvatar from '@/components/common/userAvatar';
import CONSTANTS from '@/lib/constants';

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
      <UserAvatar avatar={CONSTANTS.PROFILE_IMAGE} width={28} height={28} />
    </div>
  );
};

export default Controls;
