import Link from 'next/link'
export default function Projects() {
  // ...
  return (<>
    <div className="hidden grid-cols-2 grid-rows-2 bg-black text-white md:grid">
    
        <div className="bg-gray-500 m-8 p-5 rounded-lg">
            <h2>Project 1</h2>
            <br/>
            This is a project description that each project will eventually have (each one different obv).
            This is a project description that each project will eventually have (each one different obv).
            This is a project description that each project will eventually have (each one different obv).
            This is a project description that each project will eventually have (each one different obv).
            This is a project description that each project will eventually have (each one different obv).
            </div>
            <div className="bg-gray-500 m-8 p-5 rounded-lg">
            <h2>Project 2</h2>
            <br/>
            This is a project description that each project will eventually have (each one different obv).
            </div>
            <div className="bg-gray-500 m-8 p-5 rounded-lg">
            <h2>Project 3</h2>
            <br/>
            This is a project description that each project will eventually have (each one different obv).
            </div>
            <div className="bg-gray-500 m-8 p-5 rounded-lg">
            <h2>Project 4</h2>
            <br/>
            This is a project description that each project will eventually have (each one different obv).
        </div>
    </div>
  </>)
}