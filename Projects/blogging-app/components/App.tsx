import NavBar from "./NavBar";
import Home from "./Home";

const BlogApp = () => {
  return (
    <>
      <NavBar />
      <main className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-6 py-10">
        <Home />
      </main>
    </>
  );
};

export default BlogApp;
