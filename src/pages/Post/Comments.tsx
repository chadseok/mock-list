import { CommentData } from "../../lib/types/main";
import Comment from "./Comment";

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
