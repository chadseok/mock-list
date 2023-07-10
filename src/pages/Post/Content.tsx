import type { PostData } from "lib/types/main";

const Content = ({ contentData }: { contentData: PostData }) => {
  return (
    <div>
      <h2>{contentData.title}</h2>
      <p>{contentData.body}</p>
    </div>
  );
};

export default Content;
