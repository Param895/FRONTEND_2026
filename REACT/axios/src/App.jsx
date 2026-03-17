import {useState,useEffect} from 'react';
import axios from 'axios';

function App(){
  const [posts,setPosts] = useState([]);

  async function getPost(){
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(result.data);
    console.log("result",result);
    console.log("Posts",posts);
  };

  useEffect(()=>{
    getPost();
  }, [])

  return(
    <>
      <h1>This is elon musk</h1>
      {posts && posts.map((post)=>{
        return (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        )
      })}
    </>
  )
}

export default App;