import { FaRegComment } from "react-icons/fa";
import Comment from "./Comment";
import type { CommentData } from "lib/types/main";

const Comments = ({ commentsData }: { commentsData: CommentData[] }) => {
  return (
    <div>
      <div className="flex gap-2 text-xl my-5 items-center">
        <FaRegComment />
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
