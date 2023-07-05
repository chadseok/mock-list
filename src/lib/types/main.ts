export type PostData = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type CommentData = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};
