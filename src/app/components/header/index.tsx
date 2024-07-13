import React from 'react';
import InstaIcon from '../../../components/icons/InstaIcon';
import { Heart, MessageCircle } from 'lucide-react';
import InstaIconButton from '@/components/common/instaIconButton';

const Header = () => {
  return (
    <div className='flex justify-between items-center p-2'>
      <InstaIcon />
      <div className='flex'>
        <InstaIconButton>
          <Heart />
        </InstaIconButton>
        <InstaIconButton>
          <MessageCircle />
        </InstaIconButton>
      </div>
    </div>
  );
};

export default Header;
