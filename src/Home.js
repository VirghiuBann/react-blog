import { useState } from 'react';

function Home() {
  const [blogs, setBlogs] = useState([
    {
      title: 'My new website',
      body: 'lorem ipsum...1',
      author: 'mario',
      id: 1,
    },
    {
      title: 'Welcome to party',
      body: 'lorem ipsum...2',
      author: 'yoshi',
      id: 2,
    },
    {
      title: 'My web top tips',
      body: 'lorem ipsum...3',
      author: 'baki',
      id: 3,
    },
  ]);

  return (
    <div className='home'>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
