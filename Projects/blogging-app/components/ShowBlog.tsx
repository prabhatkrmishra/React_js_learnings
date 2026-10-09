import type { BlogObject } from "./Home";
import BlogCard from "./BlogCard";

interface BlogArrayProp {
  blogArray: BlogObject[];
  handleDeleteBlog: (index: number) => void;
}

const ShowBlog = (props: BlogArrayProp) => {
  if (props.blogArray.length === 0) {
    return <p className="text-sm text-muted">No blogs yet.</p>;
  }

  return (
    <ul className="flex flex-col gap-3">
      {props.blogArray.map((blog, index) => (
        <li
          key={index}
          className="rounded-md border border-border bg-surface p-4"
        >
          <BlogCard
            index={index}
            blog={blog}
            handleDeleteBlog={props.handleDeleteBlog}
          />
        </li>
      ))}
    </ul>
  );
};

export default ShowBlog;
