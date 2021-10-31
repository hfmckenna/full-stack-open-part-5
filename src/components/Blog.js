import React, { useState } from 'react';

const Blog = ({ blog }) => {
  const [blogDetailDisplay, setBlogDetailDisplay] = useState(false);
  const toggleView = () => {
    setBlogDetailDisplay(current => !current);
  };
  const addLike = () => {};

  return (
    <div style={{ border: '2px solid black', marginBottom: '8px' }}>
      <p>
        {blog.title} {blog.author}
        <button onClick={toggleView}>view</button>
      </p>
      <div style={blogDetailDisplay ? {display: 'inline'} : {display: 'none'}}>
        <p>{blog.url}</p>
        <p>
          likes {blog.likes}
          <button onClick={addLike}>like</button>
        </p>
        <p>{blog.user.name}</p>
      </div>
    </div>
  );
};

export default Blog;
