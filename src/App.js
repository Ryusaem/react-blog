import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetail";
import NotFound from "./NotFound";
import { useState } from "react";

function App() {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const deleteBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const addBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route
              exact
              path="/"
            >
              <Home blogs={blogs} />
            </Route>
            <Route path="/create">
              <Create addBlog={addBlog} />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails
                blogs={blogs}
                deleteBlog={deleteBlog}
              />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
