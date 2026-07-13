import Link from 'next/link';
import { useEffect , useState} from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Modal from './modal';
import { getEventListeners } from 'events';
// interface
// interface DropDownValues {
//     setDropDown: (a:boolean) => void;
//     isDropDownOpen: (Dispatch<SetStateAction<Boolean>>) => boolean;

// }

export default function Dropdown({divHeight}:{divHeight: Number}) {
  // ...
    function clear(){
        setIsDropdownOpen(false);
        setBurgerSrc(normal);
    }
    const normal ="/portfolio/burger.svg";
    const opened = '/portfolio/x.svg'
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [burger, setBurgerSrc] = useState(normal);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        function clickOut(){
            setIsDropdownOpen(false);
            setBurgerSrc(normal);
        }
        if (isDropdownOpen){
            window.addEventListener('click', clickOut);
        } 

        return () => window.removeEventListener('click', clickOut);
    }, [isDropdownOpen, burger])

    // console.log(divHeight)
                    console.log(isDropdownOpen);
  return (    
    
      <div id="navBarMobile" >
        <button onClick={ (e) => {
                if(isDropdownOpen === false) {
                    setIsDropdownOpen(true); setBurgerSrc(opened);
                } else {
                    setIsDropdownOpen(false); setBurgerSrc(normal);
                } 
                e.stopPropagation(); 
            }    
        } className="float-right px-8 py-8" >
            <Image className="" src={burger} width={50} height={50} alt="Menu"></Image>
        </button>
            { isDropdownOpen && createPortal(
                <div className="right-0 absolute" style={{top:divHeight.toString()+"px"}}> 
                    <ul className="flex flex-col ">
                        <li className="bg-zinc-800 flex items-center gap-2 p-4 hover:bg-blue-100" onClick={() => clear()}><Link className="" href="/projects">Projects</Link></li>
                        <li className="bg-zinc-800 flex items-center gap-2 p-4 hover:bg-blue-100" onClick={() => clear()}><Link className="" href="/experience">Experience</Link></li>
                        <li className="bg-zinc-800 flex items-center gap-2 p-4 hover:bg-blue-100"><a className="" onClick={(e) => { e.stopPropagation(); setShowModal(true);}}>Contact Me</a></li>
                        {showModal && createPortal(
                                            // onClick={() => setShowModal(false)}
                                <div className="w-screen h-screen backdrop-blur-lg top-0 fixed"  onClick={() => {setShowModal(false); clear()}}>
                                    <Modal onClose={() => {setShowModal(false); clear()}} />
                                </div>,
                                document.body
                        )}
                    </ul>
                </div>
                
                ,
                document.getElementById("navBarMobile") as HTMLBaseElement
            )
            
            }
            
    </div>
    )
}