import Link from 'next/link';
import { Menu, Input, Button, Col, Row } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

interface AppLayoutProps {
  children: React.ReactChild;
}

function AppLayout({ children }: AppLayoutProps) {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://naver.com" target="_blank" rel="noreferrer noopener">
            Made by Jun
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default AppLayout;
