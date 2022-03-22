import Link from 'next/link';
import styled from '@emotion/styled';
import { Button, Form, Input } from 'antd';
import useInput from '../hooks/useInput';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

function LoginForm() {
  const [id, setId] = useInput();
  const [password, setPassword] = useInput();
  const dispatch = useDispatch();

  const onSubmitForm = useCallback(() => {
    dispatch(loginAction());
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <InputWrapper type="text" required onChange={setId} value={id} />
      </div>
      <div>
        <label htmlFor="user-id">비밀번호</label>
        <br />
        <InputWrapper
          type="text"
          required
          onChange={setPassword}
          value={password}
        />
      </div>
      <div>
        <ButtonWrapper type="primary" htmlType="submit" loading={false}>
          로그인
        </ButtonWrapper>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
    </Form>
  );
}

export default LoginForm;

const ButtonWrapper = styled(Button)`
  margin: 0 10px 0 0;
`;

const InputWrapper = styled(Input)`
  max-width: 300px;
`;
