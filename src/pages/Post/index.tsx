import { useLoaderData } from "react-router-dom";
import Content from "./Content";
import Comments from "./Comments";
import type { CommentData, PostData } from "../../lib/types/main";

const Post = () => {
  const postData = useLoaderData() as {
    content: PostData;
    comments: CommentData[];
  };

  return (
    <div>
      <Content contentData={postData.content} />
      <Comments commentsData={postData.comments} />
    </div>
  );
};

export default Post;
