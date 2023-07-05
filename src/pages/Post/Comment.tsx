import type { CommentData } from "../../lib/types/main";

const Comment = ({ commentData }: { commentData: CommentData }) => {
  return (
    <div>
      <div>
        <span>{commentData.name}</span>
        <span>{commentData.email}</span>
      </div>
      <div>{commentData.body}</div>
    </div>
  );
};

export default Comment;
