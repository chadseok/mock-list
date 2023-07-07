import { Link } from "react-router-dom";
import type { PostData } from "../../lib/types/main";

const PostPreview = ({ postData }: { postData: PostData }) => {
  return (
    <div>
      <Link to={`/post/${postData.id}`}>
        <h3>{postData.title}</h3>
        <p>{postData.body}</p>
      </Link>
    </div>
  );
};

export default PostPreview;
