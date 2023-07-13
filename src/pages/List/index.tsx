import { useLoaderData } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import PostPreview from "components/PostPreview";
import type { PostData } from "lib/types/main";

const List = () => {
  const postDataList = useLoaderData() as PostData[];

  return (
    <div className="my-0 mx-auto p-10 w-[48rem]">
      <div className="flex gap-2 mb-10">
        <FaQuoteLeft />
        <h2 className="text-3xl">POSTS</h2>
        <FaQuoteRight />
      </div>
      <div>
        {postDataList.map((postData) => (
          <PostPreview key={postData.id} postData={postData} />
        ))}
      </div>
    </div>
  );
};

export default List;
