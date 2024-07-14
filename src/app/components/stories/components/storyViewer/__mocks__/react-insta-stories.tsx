// __mocks__/react-insta-stories.tsx
import React from 'react';

const MockReactInstaStories = jest
  .fn()
  .mockImplementation(({ stories, ...rest }: any) => (
    <div>
      {stories.map((story: any, index: number) => (
        <img key={index} src={story.url} alt='Story Mock' />
      ))}
    </div>
  ));

export default MockReactInstaStories;
