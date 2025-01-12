import { gql } from '@apollo/client';

export interface PostDataType {
  _id: number;
  title: string;
  createdAt: number;
  article: string;
  categoryId: number;
}

export interface PostDetailDataType extends PostDataType {
  likeCount: number;
  commentCount: number;
}

export interface GetLatestPostsVars {
  page: number;
}

export interface GetLastestPostsQueryType {
  getLatestPosts: PostDetailDataType[];
}

export const GET_LATEST_POSTS = gql`
  query ($page: Int!) {
    getLatestPosts(page: $page) {
      _id
      title
      createdAt
      article
      likeCount
      commentCount
    }
  }
`;

export interface FindPostByIdVars {
  id: string;
}

export interface FindPostByIdQueryType {
  findPostById: PostDetailDataType;
}

export const FIND_POST_BY_ID = gql`
  query ($id: String!) {
    findPostById(id: $id) {
      _id
      title
      createdAt
      article
      categoryId
      likeCount
      commentCount
    }
  }
`;

export interface FindSameCategoryPostsVars {
  categoryId: number;
}

export interface FindSameCategoryPostsQueryType {
  findSameCategoryPosts: {
    post: PostDetailDataType[];
    category: { title: string };
  };
}

export const FIND_SAME_CATEGORY_POSTS = gql`
  query ($categoryId: Int!) {
    findSameCategoryPosts(categoryId: $categoryId) {
      post {
        _id
        title
        article
        createdAt
        likeCount
        commentCount
      }
      category {
        title
      }
    }
  }
`;

export interface SearchPostVars {
  keyword: string;
}

export interface SearchPostQueryType {
  search: { result: { post: PostDataType; content: string }[] };
}

export const SEARCH = gql`
  query ($keyword: String!) {
    search(keyword: $keyword) {
      result {
        post {
          _id
          title
          createdAt
          categoryId
        }
        content
      }
    }
  }
`;

export interface WritePostVars {
  title: string;
  createdAt: Date;
  article: string;
  category: string;
}

export interface WritePostQueryType {
  writePost: { _id: number };
}

export const WRITE_POST = gql`
  mutation ($title: String!, $createdAt: DateTime, $article: String!, $category: String!) {
    writePost(title: $title, createdAt: $createdAt, article: $article, category: $category) {
      _id
    }
  }
`;

export interface DeletePostVars {
  id: number;
}

export interface DeletePostQueryType {
  deletePost: {
    isSuccess: boolean;
    categoryId?: number;
  };
}

export const DELETE_POST = gql`
  mutation ($id: Int!) {
    deletePost(id: $id) {
      isSuccess
      categoryId
    }
  }
`;

export interface EditPostVars {
  id: number;
  title: string;
  article: string;
  category: string;
}

export interface EditPostQueryType {
  editPost: void;
}

export const EDIT_POST = gql`
  mutation ($id: Int!, $title: String!, $article: String!, $category: String!) {
    editPost(id: $id, title: $title, article: $article, category: $category)
  }
`;
