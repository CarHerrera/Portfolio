import Link from 'next/link'
export default function Page(){
    return (
        <div>
            <div className="flex-row hidden grid grid-cols-2 bg-zinc-800 text-white md:flex">
                <div className="flex-grow px-8 py-8">Carlos Herrera</div>
                <div className= "flex-none flex-row right-full place-content-end">
                    <Link className="float-right px-8 py-8 hover:bg-blue-100" href="About">About</Link>
                    <a className="float-right px-8 py-8 hover:bg-blue-100">Projects</a>
                    <a className="float-right  px-8 py-8 hover:bg-blue-100">Experience</a>
                    <a className="float-right  px-8 py-8 hover:bg-blue-100">Contact Me</a>
                </div>
            </div>
            <div className="hidden h-1/2 grid-cols-2 bg-gray-700 p-10 text-white md:grid">
            <div className="px-5 py-10">
                This is text
                <br />
                <br />
                This is more text describing me I guess and some of my specialties
                <br />
                <br />
                <div className="flex flex-row">Wooooooooooooooooooooooooooow</div>
                </div>
                <div>
                <img className="rounded-full px-5 py-10" src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" />
                </div>
            </div>
              <div className="hidden grid-cols-2 grid-rows-2 bg-black text-white md:grid">
    
    <div className="bg-gray-500 m-8 rounded-lg">
        <h2>Project 1</h2>
        <br/>
        This is a project description that each project will eventually have (each one different obv).
        </div>
        <div className="bg-gray-500 m-8 rounded-lg">
        <h2>Project 2</h2>
        <br/>
        This is a project description that each project will eventually have (each one different obv).
        </div>
        <div className="bg-gray-500 m-8 rounded-lg">
        <h2>Project 3</h2>
        <br/>
        This is a project description that each project will eventually have (each one different obv).
        </div>
        <div className="bg-gray-500 m-8 rounded-lg">
        <h2>Project 4</h2>
        <br/>
        This is a project description that each project will eventually have (each one different obv).
    </div>
  </div>
        </div>

    );
}