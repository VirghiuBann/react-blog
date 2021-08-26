import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:8000/blogs');
      const data = await resp.json();
      console.log(data);
      setBlogs(data);
    }
    fetchData();
  }, []);

  return (
    <div className='home'>
      {blogs && (
        <BlogList
          blogs={blogs}
          title={'All Blogs'}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default Home;
