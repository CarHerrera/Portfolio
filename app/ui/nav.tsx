'use client'
import Link from 'next/link';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './modal'
export default function Nav() {
  // ...
  const [showModal, setShowModal] = useState(false);
  return (
    <nav>
        <div className="flex-row hidden grid grid-cols-2 bg-zinc-800 text-white md:flex">
            <a className="" href="/portfolio">
            <div className="hover:bg-blue-100 px-8 py-8">
                Carlos Herrera
            </div></a>
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
                  <a className="float-right px-8 py-8 hover:bg-blue-100" href="/portfolio/projects">Projects</a>
                  <a className="float-right  px-8 py-8 hover:bg-blue-100" href="/portfolio/experience">Experience</a>
            </div>
        </div>
    </nav>
    )
}