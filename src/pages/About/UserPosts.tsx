import { PostData } from "../../lib/types/main";
import PostPreview from "../List/PostPreview";

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
