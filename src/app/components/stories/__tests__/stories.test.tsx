import { render, screen, fireEvent } from '@testing-library/react';
import { IUser } from '@/types';
import Stories from '..';

// Mock Data
const mockUsers: IUser[] = [
  {
    id: '1',
    username: 'joanna',
    profilePicture: 'https://i.pravatar.cc/150?img=1',
    stories: [
      {
        id: '1',
        contentUrl:
          'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: '2',
        contentUrl:
          'https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]
  },
  {
    id: '2',
    username: 'steve',
    profilePicture: 'https://i.pravatar.cc/150?img=7',
    stories: [
      {
        id: '1',
        contentUrl:
          'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfDF8MHx8fDA%3D'
      },
      {
        id: '2',
        contentUrl:
          'https://plus.unsplash.com/premium_photo-1684445034763-013f0525c40c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyZWUlMjBpbWFnZXN8ZW58MHwxfDB8fHww'
      }
    ]
  }
];

describe('Stories Component', () => {
  it('renders stories for each user', () => {
    render(<Stories users={mockUsers} />);
    const storyElements = screen.getAllByRole('story');
    expect(storyElements).toHaveLength(mockUsers.length);
  });

  it('opens the StoryViewer when a story is clicked', async () => {
    render(<Stories users={mockUsers} />);
    const firstStory = screen.getByTestId(`story-${mockUsers[0].username}`);
    fireEvent.click(firstStory);
    expect(screen.getByTestId('story-viewer')).toBeInTheDocument();
  });

  it('does not render anything if there are no users', () => {
    render(<Stories users={[]} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
