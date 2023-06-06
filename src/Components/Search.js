import React, { useContext, useState } from 'react'
import { ContextPosts } from '../App'
export default function Search() {

  const [search,setSearch] = useState("")
  const {setPosts} = useContext(ContextPosts)

  function fetchData(value){
    fetch("https://dummyjson.com/posts").then((response)=>response.json()).then((json)=>{
      
      let results = json.posts.filter((post)=>{
        return (
          value && post && post.body && post.body.toLowerCase().includes(value)
        )
      })

      setPosts(results)
      console.log(results)
      
    })
  }

  function handleSearch(event){
    setSearch(event.target.value)
    fetchData(event.target.value)
  }

  return (
    <div className="grid justify-items-center">
      <input className="outline mt-5 w-1/2 outline-2 outline-slate-200 h-14 rounded-full pl-4" name="search" value={search}  onChange={(event)=>handleSearch(event)}type='text' placeholder='Search here'/>
    </div>
  )
}
