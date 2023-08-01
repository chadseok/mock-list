import React from "react";
import { useLoaderData } from "react-router-dom";
import Content from "./Content";
import Comments from "./Comments";
import type { CommentData, PostData } from "lib/types/main";

const Post = () => {
  const postData = useLoaderData() as {
    content: PostData;
    comments: CommentData[];
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-[40rem] mx-auto px-4 py-8">
      <Content contentData={postData.content} />
      <Comments commentsData={postData.comments} />
    </div>
  );
};

export default Post;
