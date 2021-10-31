import React, { useState } from 'react';
import blogService from '../services/blogs';

const Blog = ({ blog, user, setBlogs }) => {
  const [blogDetailDisplay, setBlogDetailDisplay] = useState(false);

  const toggleView = () => {
    setBlogDetailDisplay((current) => !current);
  };

  const addLike = async () => {
    const newLikes = blog.likes + 1;
    try {
      await blogService.like(blog.id, newLikes, user.token);
      setBlogs(existingBlogs => {
        const filteredBlogs = existingBlogs.filter(existingBlog => existingBlog.id !== blog.id);
        return [...filteredBlogs, {...blog, likes: newLikes}];
      })
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ border: '2px solid black', marginBottom: '8px' }}>
      <p>
        {blog.title} {blog.author}
        <button onClick={toggleView}>view</button>
      </p>
      <div
        style={blogDetailDisplay ? { display: 'inline' } : { display: 'none' }}
      >
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
