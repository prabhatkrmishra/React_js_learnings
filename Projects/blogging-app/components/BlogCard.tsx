import type { BlogObject } from "./Home";

interface BlogCardProps {
  index: number;
  blog: BlogObject;
  handleDeleteBlog: (index: number) => void;
}

const BlogCard = (props: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm text-muted">Blog Id: {props.index}</p>
        <button
          type="button"
          onClick={() => props.handleDeleteBlog(props.index)}
          aria-label={`Delete blog: ${props.blog.title}`}
          className="-mt-1 shrink-0 rounded-md border border-border px-2 py-1 text-xs font-medium text-muted hover:border-red-500 hover:bg-red-500 hover:text-white"
        >
          Delete
        </button>
      </div>
      <p className="font-medium">{props.blog.title}</p>
      <p className="text-sm text-muted">{props.blog.content}</p>
    </div>
  );
};

export default BlogCard;
