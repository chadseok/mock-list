import { useLoaderData } from "react-router-dom";
import Content from "./Content";
import Comments from "./Comments";
import type { CommentData, PostData } from "lib/types/main";

const Post = () => {
  const postData = useLoaderData() as {
    content: PostData;
    comments: CommentData[];
  };

  return (
    <div className="flex flex-col gap-4 w-[48rem] mx-auto p-10">
      <Content contentData={postData.content} />
      <Comments commentsData={postData.comments} />
    </div>
  );
};

export default Post;
