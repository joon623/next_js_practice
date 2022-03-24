import { Button, Form, Input } from 'antd';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCommentAction } from '../reducers/post';
import { MainPostType } from '../types/post';

interface CommentFormProps {
  post: MainPostType;
}

const CommentForm = ({ post }: CommentFormProps) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState('');

  const onSubmitComment = useCallback(() => {
    dispatch(
      addCommentAction({
        User: { nickname: 'asd', id: 1123 },
        content: commentText,
        postId: post.id,
      })
    );
  }, [commentText]);

  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea
          rows={4}
          value={commentText}
          onChange={onChangeCommentText}
        />
        <Button
          style={{ position: 'absolute', right: 0, bottom: -40 }}
          type="primary"
          htmlType="submit"
        >
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
