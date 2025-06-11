import PostDescription from "./Post.description";
import PostImages from "./Post.Images";
import PostTitle from "./Post.title";
import Postingee from "../../assets/charactors/postingee.png";
import NoImage from "../../assets/defaultImgs/noImage.png";
import FrontendIntro from "./Post.Content";

export const Posts = () => {
  return (
    <section className="z-auto mx-24 sm:mx-32 md:mx-40 lg:mx-56 pt-32 flex flex-col gap-7 font-gamja text-sm">
      <PostTitle className="">🖥️ Front-End란?</PostTitle>
      <PostDescription className="">
        <FrontendIntro />
      </PostDescription>
      <PostImages imageList={[Postingee, NoImage, Postingee]} />
    </section>
  );
};
