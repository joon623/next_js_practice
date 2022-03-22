export const ADD_POST = 'ADD_POST' as const;
export const DELETE_POST = 'DELETE_POST' as const;

export const addPostAction = () => {
  return {
    type: ADD_POST,
  };
};

type MainPostType = {
  id: number;
  User: { id: number; nickname: string };

  content: string;
  Images: [];
};

type PostState = {
  mainPosts: any[];
  imagePaths: any[];
  postAdded: boolean;
};

export const initialState: PostState = {
  mainPosts: [],
  imagePaths: [],
  postAdded: false,
};
type PostAction = ReturnType<typeof addPostAction>;

export default (state = initialState, action: PostAction) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
