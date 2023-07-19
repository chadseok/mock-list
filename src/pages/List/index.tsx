import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import PostPreview from "components/PostPreview";
import type { PostData } from "lib/types/main";
import Pagination from "./Pagination";

const List = () => {
  const [page, setPage] = React.useState(1);
  const postDataList = useLoaderData() as PostData[];

  return (
    <div className="my-0 mx-auto p-10 w-[48rem]">
      <div className="flex gap-2 mb-10">
        <FaQuoteLeft />
        <h2 className="text-3xl">POSTS</h2>
        <FaQuoteRight />
      </div>
      <div>
        {postDataList.slice(10 * (page - 1), 10 * page).map((postData) => (
          <PostPreview key={postData.id} postData={postData} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default List;
