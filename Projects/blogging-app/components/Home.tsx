import { useEffect, useState } from "react";
import CreateBlog from "./CreateBlog";
import ShowBlog from "./ShowBlog";

import { database } from "@/scripts/firebase";
import {
  onValue,
  push,
  ref,
  remove,
  serverTimestamp,
  set,
} from "firebase/database";

type BlogObject = {
  id: string;
  title: string;
  content: string;
};

const Home = () => {
  const [blogArray, setBlogArray] = useState<BlogObject[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const blogsRef = ref(database, "blogs");
    const unsubscribe = onValue(
      blogsRef,
      (snapshot) => {
        const blogs = snapshot.val() ?? {};
        setBlogArray(
          Object.entries(blogs as Record<string, { title?: string; content?: string }>).map(
            ([id, blog]) => ({
              id,
              title: blog.title ?? "",
              content: blog.content ?? "",
            }),
          ),
        );
        setError("");
      },
      (loadError) => {
        console.error(
          "Failed to load blogs from Realtime Database.",
          loadError,
        );
        setError("Unable to load blogs. Please try again.");
      },
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSaveBlog = async (blogTitle: string, blogContent: string) => {
    try {
      setError("");
      const blogRef = push(ref(database, "blogs"));
      if (!blogRef.key) {
        throw new Error("Realtime Database did not generate a blog ID.");
      }

      await set(blogRef, {
        title: blogTitle,
        content: blogContent,
        createdAt: serverTimestamp(),
      });
    } catch (saveError) {
      console.error("Failed to save blog to Realtime Database.", saveError);
      setError("Unable to save blog. Please try again.");
      throw saveError;
    }
  };

  const handleDeleteBlog = async (blogId: string) => {
    try {
      setError("");
      await remove(ref(database, `blogs/${blogId}`));
    } catch (deleteError) {
      console.error(
        "Failed to delete blog from Realtime Database.",
        deleteError,
      );
      setError("Unable to delete blog. Please try again.");
    }
  };

  return (
    <>
      <CreateBlog handleSaveBlog={handleSaveBlog} />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <ShowBlog blogArray={blogArray} handleDeleteBlog={handleDeleteBlog} />
    </>
  );
};

export type { BlogObject };
export default Home;
