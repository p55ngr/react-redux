import React from "react";
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FetchedPosts from './components/FetchedPosts'
function App(props) {
  
  return <div className="container pt-3">
    <div className="row">
      <div className="col">
        <PostForm props={props}></PostForm>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>Синхронные посты</h2>
        <Posts props={props}></Posts>
      </div>
      <div className="col">
        <h2>Ассинхронные посты</h2>
        <FetchedPosts posts={[]}></FetchedPosts>
      </div>
    </div>
  </div>;
}

export default App;
