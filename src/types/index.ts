export interface IUser {
  id: string;
  username: string;
  profilePicture: string;
  stories: IStory[];
}

export interface IStory {
  id: string;
  contentUrl: string;
}

export interface IPost {
  id: string;
  username: string;
  profilePicture: string;
  contentUrl: string;
  caption: string;
  likes: number;
  isHavingStories?: boolean;
}

export interface IResponse<t> {
  success: boolean;
  data: t;
  error?: { message: string; details: unknown };
}
