import { render, screen } from '@testing-library/react';
import { IPost } from '@/types';
import Posts from '..';

describe('Posts Component', () => {
  const mockPosts: IPost[] = [
    {
      id: '1',
      username: 'joanna',
      profilePicture: 'https://i.pravatar.cc/150?img=1',
      contentUrl:
        'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful landscape',
      likes: 1021,
      isHavingStories: true
    },
    {
      id: '2',
      username: 'mike',
      profilePicture: 'https://i.pravatar.cc/150?img=11',
      contentUrl:
        'https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful scenes',
      likes: 542,
      isHavingStories: false
    }
  ];

  it('renders a Post component for each post in the array', async () => {
    render(<Posts posts={mockPosts} />);
    const postElements = await screen.findAllByRole('post');

    expect(postElements).toHaveLength(2);
  });

  it('renders each Post component with the correct data', () => {
    render(<Posts posts={mockPosts} />);

    mockPosts.forEach((post) => {
      const postContainer = screen.getByTestId(`posts-${post.id}`);
      const username = screen.getByTestId(`post-username-${post.id}`);
      const contentImage = screen.getByTestId(`post-content-image-${post.id}`);
      const caption = screen.getByText(post.caption);

      expect(postContainer).toBeInTheDocument();
      expect(username).toHaveTextContent(post.username);
      expect(contentImage).toBeInTheDocument();
      expect(caption).toBeInTheDocument();
    });
  });
});
