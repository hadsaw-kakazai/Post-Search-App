import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHome,faThumbsUp } from "@fortawesome/free-solid-svg-icons";


import { ContextPosts } from '../App'

export default function Post() {

  const {posts} = useContext(ContextPosts)

  return (
    <>
    {posts.map((item)=>(
      <div key={item.id} className='shadow-xl container px-2 py-2 h-64 mx-auto bg-slate-100 mt-5 mb-5'>
      <h2 className='font-semibold text-3xl py-2 text-slate-900'>{item.title}</h2>
      <p className='text-xl h-32 py-2'>{item.body}</p>
      <span className='font-bold'>{item.reactions}</span> <FontAwesomeIcon className="text-slate-900 pr-4" icon={faThumbsUp} />
      {item.tags.map((tag)=>(
        <span className='rounded-full px-2 py-2 mr-3 bg-slate-500 text-white'>#{tag}</span>
      ))}
      

    </div>
    ))}

    </>
    
    
  )
}
