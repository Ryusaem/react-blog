import { Link } from "react-router-dom";

const BlogList = ({ title, blogs }) => {
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  return (
    <div className="blog-list">
      <h2>{title}</h2>

      {blogs.map((blog) => (
        <div
          className="blog-preview"
          key={blog.id}
        >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
            <p>id (temporary): {blog.id}</p>
          </Link>

          {/* <button onClick={ () => handleDelete(blog.id)}>Delete blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
