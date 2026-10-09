import { useState } from "react";
import CreateBlog from "./CreateBlog";
import ShowBlog from "./ShowBlog";

type BlogObject = {
  title: string;
  content: string;
};

const Home = () => {
  const [blogArray, setBlogArray] = useState<BlogObject[]>([]);

  const handleSaveBlog = (blogTitle: string, blogContent: string) => {
    const newBlog: BlogObject = {
      title: blogTitle,
      content: blogContent,
    };

    setBlogArray((prevBlogs) => [...prevBlogs, newBlog]);
  };

  const handleDeleteBlog = (deletIindex: number) => {
    setBlogArray((prevBlogs) =>
      prevBlogs.filter((blogArray, index) => index !== deletIindex),
    );
  };

  return (
    <>
      <CreateBlog handleSaveBlog={handleSaveBlog} />
      <ShowBlog blogArray={blogArray} handleDeleteBlog={handleDeleteBlog} />
    </>
  );
};

export type { BlogObject };
export default Home;
