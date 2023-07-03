import BlogList from "./BlogList";

const Home = ({ blogs }) => {
  return (
    <div className="home">
      {/* {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>} */}
      {/* {blogs && ( */}
      <BlogList
        blogs={blogs}
        title="All Blogs!!!"
      />
      {/* )} */}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="All Mario's Blogs!!!"
      /> */}
    </div>
  );
};

export default Home;
