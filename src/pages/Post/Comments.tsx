import Comment from "./Comment";
import type { CommentData } from "lib/types/main";

const Comments = ({ commentsData }: { commentsData: CommentData[] }) => {
  return (
    <div>
      <div>
        <span>{commentsData.length}</span>
      </div>
      <div>
        {commentsData.map((commentData) => (
          <Comment commentData={commentData} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
