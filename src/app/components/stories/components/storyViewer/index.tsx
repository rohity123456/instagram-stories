'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface StoryViewerProps {
  stories: Story[];
}

export default function StoryViewer({ stories }: StoryViewerProps) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [stories.length]);

  const handlePrev = () => {
    setCurrentStoryIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );
  };

  const handleNext = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  return (
    <div className='relative h-screen w-screen'>
      <Image
        src={stories[currentStoryIndex].contentUrl}
        alt='Story'
        className='h-full w-full object-cover'
        fill
      />
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-between p-4'>
        <Button variant='outline' className='rounded-full' onClick={handlePrev}>
          Previous
        </Button>
        <Button variant='outline' className='rounded-full' onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}
