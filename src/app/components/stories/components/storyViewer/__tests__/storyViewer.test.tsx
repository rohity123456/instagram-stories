import { render, screen, fireEvent } from '@testing-library/react';
import { IUser } from '@/types';
import ReactInstaStories from 'react-insta-stories';
import StoryViewer from '..';

// Mock user data
const mockUser: IUser = {
  id: '1',
  username: 'testuser',
  profilePicture: '/images/user1.jpg',
  stories: [
    { id: '1', contentUrl: '/images/story1.jpg' },
    { id: '2', contentUrl: '/images/story2.jpg' }
  ]
};

jest.mock('react-insta-stories');

describe('StoryViewer Component', () => {
  it("renders the user's profile picture and username", () => {
    render(
      <StoryViewer
        user={mockUser}
        currentIndex={0}
        handleNextUserStories={jest.fn()}
        onNextStory={jest.fn()}
        onPreviousStory={jest.fn()}
        handleClose={jest.fn()}
      />
    );

    const avatar = screen.getByRole('userAvatar');
    const username = screen.getByText('testuser');

    expect(avatar).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });

  it('renders the stories using react-insta-stories', () => {
    render(
      <StoryViewer
        user={mockUser}
        currentIndex={0}
        handleNextUserStories={jest.fn()}
        onNextStory={jest.fn()}
        onPreviousStory={jest.fn()}
        handleClose={jest.fn()}
      />
    );

    // Since we're mocking react-insta-stories, check if our mock is called with the correct props
    expect(ReactInstaStories).toHaveBeenCalledWith(
      {
        stories: mockUser.stories.map((story) => ({ url: story.contentUrl })),
        defaultInterval: 3000,
        width: '100%',
        onAllStoriesEnd: expect.any(Function),
        height: 'calc(100% - 48px)',
        currentIndex: 0,
        onStoryEnd: expect.any(Function),
        onNext: expect.any(Function),
        onPrevious: expect.any(Function),
        loop: true,
        storyStyles: expect.any(Object),
        storyInnerContainerStyles: expect.any(Object)
      },
      {}
    );
  });

  it('calls handleClose when the close button is clicked', () => {
    const handleCloseMock = jest.fn();
    render(
      <StoryViewer
        user={mockUser}
        currentIndex={0}
        handleNextUserStories={jest.fn()}
        onNextStory={jest.fn()}
        onPreviousStory={jest.fn()}
        handleClose={handleCloseMock}
      />
    );

    const closeButton = screen.getByTestId('closeStoryBtn');
    fireEvent.click(closeButton);

    expect(handleCloseMock).toHaveBeenCalledTimes(1);
  });
});
