import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';
import InstaIconButton from '@/components/common/instaIconButton';
import { EllipsisVertical, Heart, MessageCircle, Send } from 'lucide-react';
import InstaSaveIcon from '@/components/icons/InstaSaveIcon';
import UserAvatar from '@/components/common/userAvatar';

const Post = ({ post }: { post: Post }) => {
  const {
    profilePicture,
    username,
    caption,
    contentUrl,
    likes,
    isHavingStories
  } = post || {};
  return (
    <div className={styles.post}>
      <div className='flex items-center justify-between p-2'>
        <div className='flex items-center gap-2'>
          <UserAvatar
            avatar={profilePicture}
            username={username}
            width={28}
            height={28}
            isHavingStories={isHavingStories}
          />
          <p className='text-sm font-medium mt-2'>{username}</p>
        </div>
        <InstaIconButton>
          <EllipsisVertical />
        </InstaIconButton>
      </div>
      <Image
        src={contentUrl}
        alt={caption}
        className='object-contain bg-black dark:bg-white'
        width={400}
        height={400}
      />
      <div className='p-2'>
        <div className={styles.controls}>
          <div className='flex'>
            <InstaIconButton className='-ml-2'>
              <Heart />
            </InstaIconButton>
            <InstaIconButton>
              <MessageCircle />
            </InstaIconButton>
            <InstaIconButton>
              <Send />
            </InstaIconButton>
          </div>
          <InstaSaveIcon />
        </div>
        <p className='text-sm font-medium'>{`${likes} likes`}</p>
        <div className='flex gap-2'>
          <p className='text-sm font-medium'>{username}</p>
          <p className='text-sm font-normal'>{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
