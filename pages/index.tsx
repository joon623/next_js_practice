import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { RootState } from '../reducers';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '제로초',
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
    },
  ],
};

const Home = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user.user);
  return (
    <div>
      <AppLayout>{isLoggedIn && <PostForm />}</AppLayout>
    </div>
  );
};

export default Home;
