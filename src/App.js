import { useState,useEffect } from "react";

function App() {
  const API_URL= 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('Users')
  
  function changeToComment(){
    setReqType('comments')
  }
  function changeToPost(){
  setReqType('Posts')
  }
  function changeToUser(){
    setReqType('Users')
  }

  return (
    <div className="App">
      <button onClick={changeToUser}>Users</button>
      <button onClick={changeToPost}>Posts</button>
      <button onClick={changeToComment}>Comments</button>
      <h1>{reqType}</h1>
    </div>
  );
}

export default App;
