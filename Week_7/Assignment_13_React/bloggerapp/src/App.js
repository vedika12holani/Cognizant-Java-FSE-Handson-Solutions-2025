import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

import { books } from './data/books';
import { courses } from './data/courses';
import { blogs } from './data/blogs';

import './App.css';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div className="container">
      {/* Conditional Rendering - Ternary */}
      {showBooks ? <BookDetails books={books} /> : <p>No Books Found</p>}

      {/* Conditional Rendering - AND (&&) */}
      {showBlogs && <BlogDetails blogs={blogs} />}

      {/* Conditional Rendering - if else before return */}
      {showCourses && <CourseDetails courses={courses} />}
    </div>
  );
}

export default App;
