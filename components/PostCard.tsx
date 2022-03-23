import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import {
  RetweetOutlined,
  HeartTwoTone,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import styled from '@emotion/styled';

import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import PostImages from './PostImages';
import FollowButton from './FollowButton';
import { MainPostType } from '../types/post';

interface PostCardProps {
  post: MainPostType;
}

const PostCard = ({ post }: PostCardProps) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [liked, setLiked] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <CardWrapper>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <Popover
            key="ellipsis"
            content={
              <Button.Group>
                <Button>신고</Button>
                <Button>수정</Button>
                <Button danger>삭제</Button>
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        extra={<FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => {
              return (
                <li>
                  <Comment
                    author={item.User.nickname}
                    avatar={
                      <Link
                        href={{
                          pathname: '/user',
                          query: { id: item.User.id },
                        }}
                        as={`/user/${item.User.id}`}
                      >
                        <a>
                          <Avatar>{item.User.nickname}</Avatar>
                        </a>
                      </Link>
                    }
                    content={item.content}
                  />
                </li>
              );
            }}
          />
        </>
      )}
    </CardWrapper>
  );
};

export default PostCard;

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;
