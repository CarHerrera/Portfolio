import Link from 'next/link';
import { Dispatch, useState} from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Modal from './modal';
// interface
// interface DropDownValues {
//     setDropDown: (a:boolean) => void;
//     isDropDownOpen: (Dispatch<SetStateAction<Boolean>>) => boolean;

// }
export default function Dropdown() {
  // ...
    const normal ="/portfolio/burger.svg";
    const opened = '/portfolio/x.svg'
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [burger, setBurgerSrc] = useState(normal);
    const [showModal, setShowModal] = useState(false);
  return (    
    
      <div>
        <button onClick={ () => {if(isDropdownOpen === false) {setIsDropdownOpen(true)} else {setIsDropdownOpen(false)}} } className="float-right px-8 py-8" >
            <Image className="" onClick = {() => {if(burger === normal) {setBurgerSrc(opened)} else {setBurgerSrc(normal)}}} src={burger} width={50} height={50} alt="Menu"></Image>
        </button>
            { isDropdownOpen && createPortal(
                <div className="right-0 absolute"> 
                    <ul className="flex flex-col ">
                        <li className="bg-zinc-800 flex items-center gap-2 p-4 hover:bg-blue-100"><Link className="" href="/projects">Projects</Link></li>
                        <li className="bg-zinc-800 flex items-center gap-2 p-4 hover:bg-blue-100"><Link className="" href="/experience">Experience</Link></li>
                        <li className="bg-zinc-800 flex items-center gap-2 p-4 hover:bg-blue-100"><a className="" onClick={() => setShowModal(true)}>Contact Me</a></li>
                        {showModal && createPortal(
                                            // onClick={() => setShowModal(false)}
                                            <div className="w-screen h-screen backdrop-blur-lg top-0 fixed"  onClick={() => setShowModal(false)}>
                                                <Modal onClose={() => setShowModal(false)} />
                                            </div>,
                                          document.body
                        )}
                    </ul>
                </div>
                
                ,
                document.body
            )
            
            }
            
    </div>
    )
}