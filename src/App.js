import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import Login from './components/Login';
import CreateBlog from './components/CreateBlog';
import blogService from './services/blogs';

const App = () => {
  const fetchUserStorage = () => {
    return JSON.parse(localStorage.getItem('userData'));
  };

  const setUserStorage = (user) => {
    localStorage.setItem('userData', JSON.stringify(user));
  };

  const destroyUser = () => {
    setUser(null);
    localStorage.removeItem('userData');
  };

  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(fetchUserStorage());

  useEffect(() => {
    const fetchBlogs = async () => {
      const latestBlogs = await blogService.getAll();
      setBlogs(latestBlogs);
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    setUserStorage(user);
  }, [user]);

  if (user === null) {
    return (
      <Login
        setUser={setUser}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    );
  }
  return (
    <div>
      <h2>blogs</h2>
      <div>
        <p>{user.name} is logged in</p>
        <button onClick={destroyUser}>Logout</button>
      </div>
      <CreateBlog user={user} />
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default App;
