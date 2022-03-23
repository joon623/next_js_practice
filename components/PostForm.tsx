import React, { useCallback, useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addPostAction } from '../reducers/post';

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
  const dispatch = useDispatch();
  const [text, setText] = useState<string>('');
  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onFinish = useCallback(() => {
    console.log('alkj');
    dispatch(
      addPostAction([
        {
          id: 22,
          User: {
            id: 22,
            nickname: 'Random',
          },
          content: text,
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
          Comments: [],
        },
      ])
    );
  }, [text]);

  const onChangeImages = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.files);
    },
    []
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
      onFinish={onFinish}
    >
      <Input.TextArea
        maxLength={140}
        placeholder="자신의 행복한 일상을 공유해봐요 ~!"
        onChange={onChangeText}
      />
      <div>
        <input
          type="file"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
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
