interface User {
  id: string;
  username: string;
  profilePicture: string;
  stories: Story[];
}

interface Story {
  id: string;
  username: string;
  contentUrl: string;
}

interface Post {
  id: string;
  username: string;
  profilePicture: string;
  contentUrl: string;
  caption: string;
  likes: number;
  isHavingStories?: boolean;
}

interface IResponse<t> {
  success: boolean;
  data: t;
  error?: { message: string; details: unknown };
}
