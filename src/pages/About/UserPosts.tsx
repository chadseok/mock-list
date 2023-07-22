import PostPreview from "components/PostPreview";
import type { PostData } from "lib/types/main";

const UserPosts = ({ userPosts }: { userPosts: PostData[] }) => {
  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold">Posts</h3>
      {userPosts.map((userPost) => (
        <PostPreview postData={userPost} />
      ))}
    </div>
  );
};

export default UserPosts;
