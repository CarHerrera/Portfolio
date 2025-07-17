import Link from 'next/link'
export default function Nav() {
  // ...
  return (<>
    <nav>
        <div className="flex-row hidden grid grid-cols-2 bg-zinc-800 text-white md:flex">
            <Link className="" href="\">
            <div className="hover:bg-blue-100 px-8 py-8">
                Carlos Herrera
            </div></Link>
            <div className="flex-grow"></div>
            <div className= "flex-none flex-row right-full place-content-end">
                <Link className="float-right px-8 py-8 hover:bg-blue-100" href="about">About</Link>
                <a className="float-right px-8 py-8 hover:bg-blue-100" href="projects">Projects</a>
                <a className="float-right  px-8 py-8 hover:bg-blue-100" href="experience">Experience</a>
                <a className="float-right  px-8 py-8 hover:bg-blue-100" href="contact">Contact Me</a>
            </div>
        </div>
    </nav>
  </>)
}