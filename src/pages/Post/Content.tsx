import type { PostData } from "lib/types/main";

const Content = ({ contentData }: { contentData: PostData }) => {
  return (
    <div>
      <h2 className="text-4xl my-5">{contentData.title}</h2>
      <p className="text-lg my-5">{contentData.body}</p>
    </div>
  );
};

export default Content;
