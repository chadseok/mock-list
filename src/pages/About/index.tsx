import { useLoaderData } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import UserPosts from "./UserPosts";
import type { PostData, PersonalData } from "../../lib/types/main";

const About = () => {
  const aboutData = useLoaderData() as {
    personalInfo: PersonalData;
    userPosts: PostData[];
  };

  return (
    <div>
      <PersonalInfo personalInfo={aboutData.personalInfo} />
      <UserPosts userPosts={aboutData.userPosts} />
    </div>
  );
};

export default About;
