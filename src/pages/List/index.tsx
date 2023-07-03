import useAxiosLoaderData from "../../lib/hooks/useAxiosLoaderData";
import PostPreview from "./PostPreview";
import type { PostData } from "../../lib/types/main";

const List = () => {
  const postDataList = useAxiosLoaderData() as PostData[];

  return (
    <div>
      {postDataList.map((postData) => (
        <PostPreview key={postData.id} postData={postData} />
      ))}
    </div>
  );
};

export default List;
