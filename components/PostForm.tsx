import React, { useCallback, useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: '첫 번째 게시글',
      img: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    },
  ],
};

const PostForm = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();
  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onFinish = useCallback(
    (values: any) => {
      console.log('Success:', values);
      console.log(text);
    },
    [text]
  );

  const onChangeText = useCallback(
    (e: React.FormEvent<HTMLTextAreaElement>) => {
      setText((e.target as HTMLTextAreaElement).value);
    },
    [text]
  );

  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType="multipart/form-data"
      // autoComplete="off"
      onFinish={onFinish}
    >
      <Input.TextArea
        maxLength={140}
        placeholder="자신의 행복한 일상을 공유해봐요 ~!"
        onChange={onChangeText}
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {dummy.imagePaths.map((v) => {
          return (
            <div key={v} style={{ display: 'inline-block' }}>
              <img
                src={`http://localhost:3065/${v}`}
                style={{ width: '200px' }}
                alt={v}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
