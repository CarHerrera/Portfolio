import Link from 'next/link'
import { MouseEventHandler } from 'react'
export default function Modal({onClose}:{onClose: undefined | MouseEventHandler}) {
  // ...
  return (    
    <div className="bg-black h-screen fixed top-0 left-1/4 mt-[10vh] w-1/2">
      <div className="flex flex-row">
        <p>Contact me!</p>
        <div className="flex-grow"></div>
        <button onClick={onClose}>Close</button>
      </div>
    
      <form action="mailto:herrera4345@gmail.com">
        <label>Please enter your name</label>
        <input type="text" className="bg-white text-black" placeholder='Carlos Herrera'/>
        <br/>
        <br/>
        <label>Please enter your email</label>
        <input type="text" className="bg-white text-black" placeholder='someone@example.com'/>
        <br/>
        <br/>
        <label>Please enter your message</label>
        <br/>
        <textarea className="bg-white text-black  w-full h-full" rows={10} defaultValue="" />
        <button type="submit" className="bg-red-800">Submit</button>
      </form>
      
      <div className="fixed bottom-0 left-1/4">This is where the images will go.</div>
      
    </div>)
}