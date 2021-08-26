import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch('http://localhost:8000/blogs');
        if (!resp.ok) {
          throw new Error('Fetching data failed');
        }
        const data = await resp.json();
        setBlogs(data);
        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={'All Blogs'} />}
    </div>
  );
}

export default Home;
