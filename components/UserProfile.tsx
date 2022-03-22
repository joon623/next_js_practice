import { Avatar, Card, Button } from 'antd';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../reducers/user';

const dummy = {
  nickname: '제로초',
  Posts: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

function UserProfile() {
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>내 프로필 </title>
      </Head>
      <Card
        actions={[
          <div key="twit">
            짹짹
            <br />
            {dummy.Posts.length}
          </div>,
          <div key="following">
            팔로잉
            <br />
            {dummy.Followings.length}
          </div>,
          <div key="follower">
            팔로워
            <br />
            {dummy.Followers.length}
          </div>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
          title={dummy.nickname}
        />
        <Button
          onClick={() => {
            dispatch(logoutAction());
          }}
        >
          로그아웃
        </Button>
      </Card>
    </>
  );
}

export default UserProfile;
