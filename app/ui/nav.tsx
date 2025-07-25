'use client'
import Link from 'next/link';
import { useState, useRef, useEffect} from 'react';
import { createPortal } from 'react-dom';
import Modal from './modal';
import Image from 'next/image';
import Dropdown from './dropdown'
export default function Nav() {
  // ...
  const [height, setHeight] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const refCont = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (refCont.current) {
            setHeight(refCont.current.clientHeight);
        }
    }, []);
    return (
    <nav>
        <div className="hidden flex-row bg-zinc-800 text-white md:flex">
            <Link className="" href="/">
            <div className="hover:bg-blue-100 px-8 py-8">
                Carlos Herrera
            </div></Link>
            <div className="flex-grow"></div>
            <div className= "flex-none flex-row right-full place-content-end">
                <a className="float-right  px-8 py-8 hover:bg-blue-100" onClick={() => setShowModal(true)}>Contact Me</a>
                {showModal && createPortal(
                    // onClick={() => setShowModal(false)}
                    <div className="w-screen h-screen backdrop-blur-lg top-0 fixed"  onClick={() => setShowModal(false)}>
                        <Modal onClose={() => setShowModal(false)} />
                    </div>,
                  document.body
                  )}
                  <Link className="float-right px-8 py-8 hover:bg-blue-100" href="/projects">Projects</Link>
                  <Link className="float-right  px-8 py-8 hover:bg-blue-100" href="/experience">Experience</Link>
            </div>
        </div>
        <div ref={refCont} id="navBar"  className="md:hidden grid grid-cols-2 bg-zinc-800">
            <Link className="" href="/">
            <div className="hover:bg-blue-100 px-8 py-8 text-xl">
                Carlos Herrera
            </div></Link>
            
            <Dropdown divHeight={height}></Dropdown>
            
        </div>
    </nav>
    )
}