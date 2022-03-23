import { Button, Form, Input } from 'antd';
import React, { useCallback, useState } from 'react';
import { MainPostType } from '../types/post';

interface CommentFormProps {
  post: MainPostType;
}

const CommentForm = ({ post }: CommentFormProps) => {
  const [commentText, setCommentText] = useState('');

  const onSubmitComment = useCallback(() => {
    console.log(post);
    console.log(commentText);
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
