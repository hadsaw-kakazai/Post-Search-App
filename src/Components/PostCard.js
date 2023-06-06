import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHome,faThumbsUp } from "@fortawesome/free-solid-svg-icons";
export default function PostCard({title,body,tags}) {
  return (
    <div className='shadow-xl container px-2 py-2 h-64 mx-auto bg-slate-100 mt-5 mb-5'>
      <h2 className='font-semibold text-5xl py-2 text-slate-900'>Title</h2>
      <p className='text-xl h-32 py-2'>I am body of the post....................................</p>
      <span className='font-bold'>1</span> <FontAwesomeIcon className="text-slate-900 pr-4" icon={faThumbsUp} />
      <span className='rounded-full px-2 py-2 bg-slate-500 text-white'>#history</span>

    </div>
  )
}
