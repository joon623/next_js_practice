export type ImagePathsType = {
  src: string;
};

export type CommentsType = {
  User: { nickname: string; id: number };
  content: string;
};

export type UserType = {
  id: number;
  nickname: string;
};

export type MainPostType = {
  id: number;
  User: UserType;
  content: string;
  Images: ImagePathsType[];
  Comments: CommentsType[];
};

export type PostStateType = {
  mainPosts: MainPostType[];
  imagePaths: ImagePathsType[];
  postAdded: boolean;
};
