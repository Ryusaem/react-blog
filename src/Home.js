import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', 
        body: 'lorem ipsum...', 
        author: 'mario', 
        id: 1 },
        { title: 'Test website',
        body: 'lorem iptsum...',
        author: 'saidy',
        id: 2 },
        { title: 'Welcome party!', 
        body: 'lorem ipsum...', 
        author: 'yoshi', 
        id: 3 },
        { title: 'Web dev top tips', 
        body: 'lorem ipsum...', 
        author: 'mario', 
        id: 4 }

    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!!!" />
            
            <BlogList blogs={blogs.filter( (blog) => blog.author === "mario")} title="All Mario's Blogs!!!" />
        </div>
     );
}
 
export default Home;