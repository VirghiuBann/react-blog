import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('http://localhost:8000/blogs');
      const data = await resp.json();
      setBlogs(data);
      setIsPending(false);
    }
    fetchData();
  }, []);

  return (
    <div className='home'>
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={'All Blogs'} />}
    </div>
  );
}

export default Home;
