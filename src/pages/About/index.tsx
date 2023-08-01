import React from "react";
import { useLoaderData } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import UserPosts from "./UserPosts";
import type { PostData, PersonalData } from "lib/types/main";

const About = () => {
  const aboutData = useLoaderData() as {
    personalInfo: PersonalData;
    userPosts: PostData[];
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto w-[40rem] px-4 py-8">
      <h2 className="font-bold text-3xl">{aboutData.personalInfo.name}</h2>
      <PersonalInfo personalInfo={aboutData.personalInfo} />
      <UserPosts userPosts={aboutData.userPosts} />
    </div>
  );
};

export default About;
