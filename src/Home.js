import { useState } from 'react';
import BlogList from './BlogList';

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
      <BlogList blogs={blogs} />
    </div>
  );
}

export default Home;
