import { useLoaderData } from "react-router-dom";
import PostPreview from "./PostPreview";
import type { PostData } from "lib/types/main";

const List = () => {
  const postDataList = useLoaderData() as PostData[];

  return (
    <div>
      {postDataList.map((postData) => (
        <PostPreview key={postData.id} postData={postData} />
      ))}
    </div>
  );
};

export default List;
