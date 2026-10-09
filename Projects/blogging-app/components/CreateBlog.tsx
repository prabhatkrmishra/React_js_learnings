import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type SyntheticEvent,
} from "react";

interface CreateBlogProps {
  handleSaveBlog: (blogTitle: string, blogContent: string) => void;
}

const CreateBlog = (props: CreateBlogProps) => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const blogTitleRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = e.target.name;
    const value = e.target.value;

    if (field == "blogTitle") {
      setBlogTitle(value);
    } else if (field == "blogContent") {
      setBlogContent(value);
    }
  };

  /* On the request of instructor, generally bad idea */
  useEffect(() => {
    blogTitleRef.current?.focus();
  }, []);

  const handleOnSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleSaveBlog(blogTitle, blogContent);
    setBlogTitle("");
    setBlogContent("");
    blogTitleRef.current?.focus();
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-3">
      <label className="flex flex-col gap-1 text-sm font-medium">
        Title:
        <input
          ref={blogTitleRef}
          type="text"
          name="blogTitle"
          onChange={handleOnChange}
          value={blogTitle}
          placeholder="Enter blog title"
          className="rounded-md border border-border bg-surface px-3 py-2 font-normal text-foreground outline-none placeholder:text-muted focus:border-foreground"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium">
        Content:
        <textarea
          name="blogContent"
          onChange={handleOnChange}
          value={blogContent}
          placeholder="Enter blog content"
          rows={4}
          className="resize-y rounded-md border border-border bg-surface px-3 py-2 font-normal text-foreground outline-none placeholder:text-muted focus:border-foreground"
        />
      </label>
      <button
        type="submit"
        className="self-start rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
      >
        Add Blog
      </button>
    </form>
  );
};

export default CreateBlog;
