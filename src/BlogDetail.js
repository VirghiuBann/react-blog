import React from 'react';
import { useParams } from 'react-router';

const BlogDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Detail blog - {id}</h2>
    </div>
  );
};

export default BlogDetail;
