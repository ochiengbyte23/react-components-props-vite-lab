import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      {/* Display blog header with the blog name from data */}
      <Header name={blogData.name} />
      
      {/* Display about section with blog image and description */}
      <About image={blogData.image} about={blogData.about} />
      
      {/* Display list of all blog posts */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;