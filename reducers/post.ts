import { MainPostType, PostStateType } from '../types/post';

export const ADD_POST = 'ADD_POST' as const;
export const DELETE_POST = 'DELETE_POST' as const;

export const addPostAction = (payload: MainPostType[]) => {
  return {
    type: ADD_POST,
    payload,
  };
};

type PostAction = ReturnType<typeof addPostAction>;

export const initialState: PostStateType = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'Jun',
      },
      content: '첫 번째 게시글',
      Images: [
        {
          src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
            id: 1122,
          },
          content: '우와 개정판이 나왔군요~',
        },
        {
          User: {
            nickname: 'hero',
            id: 1122,
          },
          content: '얼른 사고싶어요~',
        },
      ],
    },
    {
      id: 1,
      User: {
        id: 1,
        nickname: '준',
      },
      content: '두 번째 게시글',
      Images: [
        {
          src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
      Comments: [
        {
          User: {
            id: 1122,
            nickname: 'nero',
          },
          content: '우와 개정판이 나왔군요~',
        },
        {
          User: {
            id: 1122,
            nickname: 'hero',
          },
          content: '얼른 사고싶어요~',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

export default (state = initialState, action: PostAction) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [...action.payload, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return { ...state };
  }
};
