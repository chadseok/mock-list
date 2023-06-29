import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
});

export const getPostList = () => {
  return api.get(`/posts`);
};

export const getPostContent = (postId: number) => {
  return api.get(`/posts/${postId}`);
};

export const getPostComments = (postId: number) => {
  return api.get(`/posts/${postId}/comments`);
};

export const getUserInfo = (userId: number) => {
  return api.get(`/users/${userId}`);
};

export const getUserPosts = (userId: number) => {
  return api.get(`/users/${userId}/posts`);
};
