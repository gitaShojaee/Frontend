import { useState } from "react";
import "./App.css";
import data from "../data.json";
import Comment from "./Components/Comments";
function App() {
  const comments = data["comments"].map((comment) => {
    return <Comment key={comment.id} comment={comment} />;
  });
  return <div className="App">{comments}</div>;
}

export default App;
