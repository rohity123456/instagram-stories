'use client';
import ReactInstaStories from 'react-insta-stories';
import styles from './index.module.scss';
import InstaIconButton from '@/components/common/instaIconButton';
import { Ellipsis, Send, X } from 'lucide-react';
import { Story as ReactStory } from 'react-insta-stories/dist/interfaces';
import UserAvatar from '@/components/common/userAvatar';
import { IStory, IUser } from '@/types';
interface StoryViewerProps {
  user: IUser;
  handleNextUserStories: () => void;
  currentIndex: number;
  onPreviousStory: () => void;
  onNextStory: () => void;
  handleClose: () => void;
}

export default function StoryViewer({
  user,
  handleNextUserStories,
  currentIndex,
  onPreviousStory,
  onNextStory,
  handleClose
}: StoryViewerProps) {
  return (
    <div
      className={styles.storyViewer}
      style={{ height: '100vh', width: '100vw' }}
      data-testid='story-viewer'
    >
      <div className='relative w-full h-full'>
        <div className={styles['shadowContainer']}></div>
        <div className={styles['header']}>
          <div className='flex items-center'>
            <UserAvatar
              avatar={user.profilePicture}
              username={user.username}
              width={32}
              height={32}
            />
            <p className={styles.title}>{user.username.toLowerCase()}</p>
            <p className={styles.time}>{`${Math.floor(
              Math.random() * 24
            ).toFixed(0)} h`}</p>
          </div>
          <div className='flex '>
            <InstaIconButton>
              <Ellipsis className='text-white' />
            </InstaIconButton>
            <InstaIconButton
              onClick={() => handleClose()}
              data-testid='closeStoryBtn'
            >
              <X className='text-white' />
            </InstaIconButton>
          </div>
        </div>
        <ReactInstaStories
          stories={user.stories.map(
            (story: IStory): ReactStory => ({
              url: story.contentUrl
            })
          )}
          defaultInterval={3000}
          width={'100vw'}
          onAllStoriesEnd={handleNextUserStories}
          height={'calc(100vh - 48px)'}
          currentIndex={currentIndex}
          onStoryEnd={() => {
            onNextStory();
          }}
          onNext={() => onNextStory()}
          onPrevious={() => onPreviousStory()}
          loop
        />
        <div className={styles.controls}>
          <div className={styles['input']}>
            <span className={styles['text']}>Send Message</span>
          </div>
          <InstaIconButton>
            <Send className='text-white' />
          </InstaIconButton>
        </div>
      </div>
    </div>
  );
}
