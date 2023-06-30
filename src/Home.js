import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This will be logged every time this effect is run
    console.log("use effect ran");

    // We use setTimeout to simulate a delay in the response from the server
    setTimeout(() => {
      // Make a fetch request to the server
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          // When the request is done, parse the response as JSON
          return res.json();
        })
        .then((data) => {
          // Once the data is ready, log it to the console
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // If there is an error, log it to the console
          setError(err.message);
          setIsPending(false);
        });
      // Since the dependency array is empty, this effect will only run once, when the component is first rendered
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!!!"
        />
      )}

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="All Mario's Blogs!!!"
      /> */}
    </div>
  );
};

export default Home;
