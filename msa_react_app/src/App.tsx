import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostCard from "./components/PostCard_comp";
import PostGrid from "./components/PostGrid_comp";
import AddPost from "./components/AddPost";

function App() {
  return (
    <div>
      <PostGrid />
    </div>
  );
}

export default App;
