import { Link } from "react-router-dom";
import type { PostData } from "../../lib/types/main";

type Props = {
  postData: PostData;
};

const PostPreview = ({ postData }: Props) => {
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
