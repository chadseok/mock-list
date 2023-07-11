import { Link } from "react-router-dom";
import type { PostData } from "lib/types/main";

const PostPreview = ({ postData }: { postData: PostData }) => {
  return (
    <div className="w-[40rem] px-4 py-6 border-b border-solid border-slate-100">
      <Link to={`/post/${postData.id}`}>
        <h3 className="text-xl mb-2">{postData.title}</h3>
        <p className="text-slate-500 text-sm">{postData.body}</p>
      </Link>
    </div>
  );
};

export default PostPreview;
