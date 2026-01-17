import Link from 'next/link'
import projectsJson from '../../public/projects.json';
import Image from 'next/image';
const projects = projectsJson;

function BulletList({list}:{list:String[]}){
  const listItems = list.map(item =>
    <li className="pl-5 text-lg0" key={list.indexOf(item)}>{item}</li>
  )
  return (<ul className="list-disc mt-5 mb-10 pl-5">{listItems}</ul>);
}

export default function Projects() {
  const size = 60;
  const gridItems = projects.map(project => 
    <div key ={project.id} className="bg-gray-500 m-8 p-5 rounded-lg">
      <div className="flex relative items-center">
        <a href={project.github} target="_blank"><Image className="inline-block height-auto" style={{objectFit:"contain"}} src={project.img} height={project.height} width={project.width} alt={project.alt}/></a>
        <div><h2 className="text-xl md:text-3xl m-4">{project.projName}</h2></div>
        <div className="m-4 md:absolute md:right-0">{project.date}</div>
      </div>
      <br/>
      <p className="text-xl">{project.info}</p>
      <br/>
      
        <p className="text-lg">Skills Learned</p>
        <BulletList list={project.skills}/>
      
      <div className="flex">
        <a className="ml-4" href={project.github}>Github</a>
        <p className="flex-grow"></p>
        <a className="mr-4" href={project.link} target="_blank"> Live site</a>
      </div>
    </div>
  )
  // ...
  return (<>
    <div className="bg-black text-white md:grid">
    
        {gridItems}
    </div>
  </>)
}