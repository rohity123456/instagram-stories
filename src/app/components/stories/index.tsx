'use client';
import { useState } from 'react';
import Story from './components/story';
import styles from './index.module.scss';
import StoryViewer from './components/storyViewer';

export default function Stories({ users }: { users: User[] }) {
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(
    null
  );
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);
  const selectedUser =
    selectedUserIndex !== null ? users[selectedUserIndex] : null;
  const handleNextUserStories = () => {
    setCurrentStoryIndex(0);
    if (selectedUserIndex == users.length - 1) {
      setSelectedUserIndex(null);
      return;
    }
    if (selectedUserIndex !== null) {
      setSelectedUserIndex(selectedUserIndex + 1);
    }
  };
  const handleStoryNavigation = (action: string) => () => {
    if (selectedUser === null || selectedUserIndex === null) {
      return;
    }
    if (action === 'next') {
      if (currentStoryIndex == selectedUser?.stories?.length - 1) {
        handleNextUserStories();
        return;
      }
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else if (action === 'previous') {
      if (currentStoryIndex == 0) {
        if (selectedUserIndex !== 0) {
          setSelectedUserIndex(selectedUserIndex - 1);
          setCurrentStoryIndex(users[selectedUserIndex - 1].stories.length - 1);
        }
      } else if (currentStoryIndex !== 0)
        setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const handleClose = () => {
    setSelectedUserIndex(null);
    setCurrentStoryIndex(0);
  };

  if (!users) return null;

  return (
    <div className={styles.stories}>
      {users.map((user) => {
        const { id, username, profilePicture } = user;
        return (
          <Story
            username={username}
            avatar={profilePicture}
            key={id}
            handleClick={() => setSelectedUserIndex(users.indexOf(user))}
          />
        );
      })}

      {selectedUser && (
        <StoryViewer
          stories={selectedUser.stories}
          user={selectedUser}
          handleNextUserStories={handleNextUserStories}
          currentIndex={currentStoryIndex}
          onPreviousStory={handleStoryNavigation('previous')}
          onNextStory={handleStoryNavigation('next')}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}
