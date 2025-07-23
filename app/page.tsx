import projectsJson from '../public/projects.json';
const projects = projectsJson;
function BulletList({list}:{list:String[]}){
  const listItems = list.map(item =>
    <li className="pl-5 text-lg0" key={list.indexOf(item)}>{item}</li>
  )
  return (<ul className="list-disc mt-5 mb-10 pl-5">{listItems}</ul>);
}

export default function Page(){
    const gridItems = projects.map(project => 
    <div key ={project.id} className="bg-gray-500 m-8 p-5 rounded-lg">
      <div className="flex">
        <a href={project.github} target="_blank"><img className="inline-block" src={project.img} height={project.height} width={project.width}></img></a>
        <div><h2 className="text-3xl m-4">{project.projName}</h2></div>
      </div>
      <br/>
      <p className="text-xl">{project.info}</p>
      <br/>
      <div className="relative flex bottom-1">
        <a className="ml-4 mt-5" target="_blank" href={project.github}><img src="https://twenty-icons.com/github.com" className="bg-white rounded-full" width={48} height={32} alt="Github Logo"/></a>
        <a className="ml-4 mt-5" target="_blank" href={project.github}>Github</a>
        <p className="flex-grow"></p>
        {project.id != 2   &&
            <a className="mr-4 mt-5" target="_blank">Live site</a>
        }


      </div>
    </div>
  )
    return (
        <div>
            
            <div className="hidden h-1/2 grid-cols-2 bg-gray-700 p-10 text-white md:grid">
            <div className="px-5 py-10">

                <br />
                <br />
                <p className="text-4xl m-5">Hi! I am Carlos Herrera.
                </p>
                <br />
                <br />
                <div className="mr-4">
                    <p className="text-xl"> I am a graduate of the University of Maryland with a strong interest in full-stack devlopment. I have experience working front-end frameworks like react, and have experiencce working with back-end technology such as Node.js, Express, and SQL/NOSQL databases.
                        I am looking for opportunities to improve my software devlopment skills and contribute to collaborative engineering teams. 
                    

                    <br></br>
                    <br></br>
                    This is my portfolio site! I will be adding some of the proejcts that I've worked on throughout my academic career.
                        Feel free to look through it and check back occasionally as I update it with new work.
                    </p>
                </div>
            </div>
            <div>
                <img className="rounded-full mx-auto px-5 py-10" src={"/portfolio/me.png"} />
            </div>
            </div>
        <div className="hidden grid-cols-2 bg-black text-white md:grid">
    
        {gridItems}
        </div>
    </div>

    );
}