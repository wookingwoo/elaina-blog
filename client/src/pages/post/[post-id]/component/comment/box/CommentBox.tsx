import { useMutation } from '@apollo/client';

import { Comment, DELETE_COMMENT, EDIT_COMMENT, Reply } from 'src/query/comment';
import { DELETE_COMMENT_LOG } from 'src/query/comment-log';
import { useApollo } from 'src/apollo/apolloClient';
import { IS_AUTH } from 'src/query/user';

import { CommentBoxLayout } from './BoxLayout';

interface Props {
  isLogin: boolean;
  postId: number;
  isCommentFromAdmin: boolean;
  comment: Comment | Reply;
  author: string;
  commentIndex: number;
  setDeletedIndex: React.Dispatch<React.SetStateAction<number>>;
  children?: JSX.Element;
}

export function CommentBox(props: Props) {
  const client = useApollo();
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const [editComment] = useMutation(EDIT_COMMENT);
  const [deleteCommentLog] = useMutation(DELETE_COMMENT_LOG);

  async function handleEditComment(commentContent: string, password: string) {
    const AuthResponse = await client.query({ query: IS_AUTH });
    const isAuth = AuthResponse.data.isAuth.isAuth;

    if (!commentContent) {
      throw new Error('내용을 입력해 주세요.');
    }

    if (isAuth) {
      try {
        await editComment({
          variables: {
            _id: props.postId,
            index: props.commentIndex,
            newComment: commentContent
          }
        });
      } catch (err) {
        throw err;
      }
    } else {
      try {
        await editComment({
          variables: {
            _id: props.postId,
            index: props.commentIndex,
            newComment: commentContent,
            password
          }
        });
      } catch (err) {
        throw err;
      }
    }
  }

  async function handleDeleteComment(password: string) {
    const AuthResponse = await client.query({ query: IS_AUTH });
    const isAuth = AuthResponse.data.isAuth.isAuth;

    // Admin can delete all comments
    if (isAuth) {
      try {
        await deleteComment({
          variables: {
            _id: props.postId,
            index: props.commentIndex
          }
        });

        props.setDeletedIndex(props.commentIndex);
      } catch (err) {
        alert(err.message);
        return;
      }
    }
    // common users can delete only their comment
    else {
      try {
        await deleteComment({
          variables: {
            _id: props.postId,
            index: props.commentIndex,
            password
          }
        });

        props.setDeletedIndex(props.commentIndex);
      } catch (err) {
        alert(err.message);
        return;
      }
    }

    try {
      deleteCommentLog({
        variables: {
          postId: props.postId,
          commentIndex: props.commentIndex + 1
        }
      });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <CommentBoxLayout
      isLogin={props.isLogin}
      comment={props.comment}
      author={props.author}
      onEdit={handleEditComment}
      onDelete={handleDeleteComment}
    >
      {props.children}
    </CommentBoxLayout>
  );
}