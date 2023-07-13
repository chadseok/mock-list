import PostPreview from "components/PostPreview";
import type { PostData } from "lib/types/main";

const UserPosts = ({ userPosts }: { userPosts: PostData[] }) => {
  return (
    <div>
      {userPosts.map((userPost) => (
        <PostPreview postData={userPost} />
      ))}
    </div>
  );
};

export default UserPosts;
