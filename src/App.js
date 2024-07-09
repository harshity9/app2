import { useState,useEffect } from "react";

function App() {

  const [reqType, setReqType] = useState('Users')
  const [items, setItem] = useState([])

  useEffect(()=>{

  fetch(`https://jsonplaceholder.typicode.com/${reqType}`)
  .then(response => response.json())
  .then(json => setItem(json))
  }, [reqType])

  

  function changeToComment(){
    setReqType('Comments')
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
      {items.map(item => {
        return <li>{JSON.stringify(item)}</li>
      })}
    </div>
  );
}

export default App;
