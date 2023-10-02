import { Link } from "react-router-dom";
import type { PostData } from "lib/types/main";

const PostPreview = ({ postData }: { postData: PostData }) => {
  return (
    <div className="w-full py-8 border-b border-solid border-slate-100">
      <Link to={`/about/${postData.userId}`}>
        <span className="text-sm">
          Written By <strong>{postData.userId}</strong>
        </span>
      </Link>
      <Link to={`/posts/${postData.id}`}>
        <h3 className="text-xl my-2 font-bold">{postData.title}</h3>
        <p className="text-slate-500 text-sm">{postData.body}</p>
      </Link>
    </div>
  );
};

export default PostPreview;
