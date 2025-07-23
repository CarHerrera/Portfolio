import Link from 'next/link';
import { FormEvent, MouseEventHandler } from 'react';

// interface
export default function Modal({onClose}:{onClose: undefined | MouseEventHandler}) {
  // ...

  const size = 64;
  return (    
    <div className="p-4 bg-black h-3/4 fixed top-0 left-1/4 mt-[10vh] mb-[10vh] w-1/2 rounded-4xl" onClick={e => e.stopPropagation()}>
      <div className="flex flex-row ">
        <p className="text-3xl">Contact me!</p>
        <div className="flex-grow"></div>
        <button onClick={onClose} className="text-3xl">Close</button>
      </div>
    
    <br></br>
      <form className="m-5" onSubmit={(e:React.SyntheticEvent)=>{
        e.preventDefault();
        const target = e.target as typeof e.target & {
          name: { value: string };
          email: { value: string };
          msg: {value:string};
        };
        window.open("mailto:herrera4345@gmail.com?subject=" + target.name.value +"&body="+target.msg.value);
      }}>
        <label className="mr-2">Please enter your name:</label>
        <input type="text" className="bg-white text-black rounded-xl" name="name" placeholder='Carlos Herrera'/>
        <br/>
        <br/>
        <label className="mr-2">Please enter your email:</label>
        <input type="text" className="bg-white text-black rounded-xl" name="email"placeholder='someone@example.com'/>
        <br/>
        <br/>
        <label>Please enter your message</label>
        <br/>
        <textarea className="bg-white text-black  w-full h-full rounded-xl" name="msg" rows={10} defaultValue="" />
        <button type="submit" className="block bg-red-800 rounded-full p-4 mx-auto mt-5">Submit</button>
      </form>

      <p className="absolute text-2xl bottom-40 left-0 right-0 mx-auto size-fit block">Or reach out to me on any of these websites!</p>
      <div className="absolute bottom-10 left-0 right-0 mx-auto size-fit flex flex-row gap-5">  
        <a href="https://github.com/CarHerrera" target="_blank"><img src="https://twenty-icons.com/github.com" width={size} height={size} alt="Github Logo"/></a>
        <a href="https://www.linkedin.com/in/carherr/" target="_blank"><img src="https://twenty-icons.com/linkedin.com" width={size} height={size} alt="Linkedin Logo"/></a>
        <a href="https://portfolium.com/cherrer6" target="_blank"><img src="https://portfolium.com/assets/images/favicons/favicon.png" width={size} height={size} alt="Portfolium Logo"/></a>
      </div>
      
    </div>)
}