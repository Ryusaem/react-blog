import { useParams, useHistory } from "react-router-dom";

const BlogDetails = ({ blogs, deleteBlog }) => {
  const { id } = useParams();
  // const {
  //   data: blog,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  const handleClick = () => {
    deleteBlog(blog.id);
    history.push("/");
  };

  return (
    <div className="blog-details">
      {/* {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>} */}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
