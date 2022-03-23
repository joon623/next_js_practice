import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { RootState } from '../reducers';
import { MainPostType } from '../types/post';

const Home = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user.user);
  const post = useSelector((state: RootState) => state.post);
  return (
    <div>
      <AppLayout>
        {!isLoggedIn && <PostForm />}
        {post.mainPosts.map((el: MainPostType) => {
          return <PostCard post={el} />;
        })}
      </AppLayout>
    </div>
  );
};

export default Home;
