import { createContext, useState } from 'react';
import Post from './Components/Post';
import Search from './Components/Search';
import logo from './logo.svg';

const ContextPosts = createContext()
function App() {

  const [posts,setPosts] = useState([]) 
  return (
    <div>
      <ContextPosts.Provider value={{posts,setPosts}}>
        <Search/>
        <Post/>
      </ContextPosts.Provider>
     
    </div>
  );
}

export default App;
export {ContextPosts}