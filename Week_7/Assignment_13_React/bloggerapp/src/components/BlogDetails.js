import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div className="v1">
      <h1>Blog Details</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <strong>{blog.author}</strong>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
