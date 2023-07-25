import type { PostData } from "lib/types/main";
import { Link } from "react-router-dom";

const Content = ({ contentData }: { contentData: PostData }) => {
  return (
    <div>
      <h2 className="text-4xl my-5">{contentData.title}</h2>
      <Link to={`/about/${contentData.userId}`}>
        <span className="text-sm">
          Written by <strong>{contentData.userId}</strong>
        </span>
      </Link>

      <p className="text-lg my-5">{contentData.body}</p>
    </div>
  );
};

export default Content;
