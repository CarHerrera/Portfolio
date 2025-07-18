import Link from 'next/link'
const projects = [{
    projName: "Drink and Food Recipe Site",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros fermentum, tristique leo sit amet, blandit nunc. Etiam ac justo et nunc cursus malesuada et sit amet urna. Vestibulum hendrerit semper justo, ut auctor enim viverra non. Sed quis ex consequat, fermentum ipsum in, interdum lacus. Nam ornare viverra lorem, nec mattis felis faucibus sed. Suspendisse condimentum molestie nunc, vitae dapibus elit facilisis vitae. Praesent aliquet tristique sem, id gravida est eleifend ut. Cras aliquet, dui eget vestibulum varius, dui metus tempor turpis, a scelerisque felis magna vel diam. Nullam at fringilla ex, sollicitudin vulputate nisl. Aenean id lacus lacinia, dictum lorem quis, molestie lorem. Nullam tortor mi, suscipit quis aliquet consectetur, laoreet sed urna. Pellentesque eu odio bibendum, molestie arcu in, aliquet sapien. Quisque sed lobortis metus. Nullam et tempor lectus, quis viverra magna. Maecenas iaculis sed erat sed faucibus. Nulla eu odio velit. ",
    date: "",
    links:"",
    skills:["Created and hosted a website using Node.js", "Used API calls to generate drinks and recipes for the user based on inputted filters","Used mongodb to store information about the user."],
    img:"/cocktail.png",
    height: 50,
    width: 60,
    id: 0
  },
{
    projName: "Health App Project",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros fermentum, tristique leo sit amet, blandit nunc. Etiam ac justo et nunc cursus malesuada et sit amet urna. Vestibulum hendrerit semper justo, ut auctor enim viverra non. Sed quis ex consequat, fermentum ipsum in, interdum lacus. Nam ornare viverra lorem, nec mattis felis faucibus sed. Suspendisse condimentum molestie nunc, vitae dapibus elit facilisis vitae. Praesent aliquet tristique sem, id gravida est eleifend ut. Cras aliquet, dui eget vestibulum varius, dui metus tempor turpis, a scelerisque felis magna vel diam. Nullam at fringilla ex, sollicitudin vulputate nisl. Aenean id lacus lacinia, dictum lorem quis, molestie lorem. Nullam tortor mi, suscipit quis aliquet consectetur, laoreet sed urna. Pellentesque eu odio bibendum, molestie arcu in, aliquet sapien. Quisque sed lobortis metus. Nullam et tempor lectus, quis viverra magna. Maecenas iaculis sed erat sed faucibus. Nulla eu odio velit. ",
    date: "",
    links:"",
    skills:[""],
    img:"null",
    height: 50,
    width: 50,
    id: 1
  }, 
  {
    projName: "Discord Bot",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros fermentum, tristique leo sit amet, blandit nunc. Etiam ac justo et nunc cursus malesuada et sit amet urna. Vestibulum hendrerit semper justo, ut auctor enim viverra non. Sed quis ex consequat, fermentum ipsum in, interdum lacus. Nam ornare viverra lorem, nec mattis felis faucibus sed. Suspendisse condimentum molestie nunc, vitae dapibus elit facilisis vitae. Praesent aliquet tristique sem, id gravida est eleifend ut. Cras aliquet, dui eget vestibulum varius, dui metus tempor turpis, a scelerisque felis magna vel diam. Nullam at fringilla ex, sollicitudin vulputate nisl. Aenean id lacus lacinia, dictum lorem quis, molestie lorem. Nullam tortor mi, suscipit quis aliquet consectetur, laoreet sed urna. Pellentesque eu odio bibendum, molestie arcu in, aliquet sapien. Quisque sed lobortis metus. Nullam et tempor lectus, quis viverra magna. Maecenas iaculis sed erat sed faucibus. Nulla eu odio velit. ",
    date: "",
    links:"",
    skills:[""],
    img:"null",
    height: 50,
    width: 50,
    id: 2
  },
  {
    projName: "Co$t4Equality",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros fermentum, tristique leo sit amet, blandit nunc. Etiam ac justo et nunc cursus malesuada et sit amet urna. Vestibulum hendrerit semper justo, ut auctor enim viverra non. Sed quis ex consequat, fermentum ipsum in, interdum lacus. Nam ornare viverra lorem, nec mattis felis faucibus sed. Suspendisse condimentum molestie nunc, vitae dapibus elit facilisis vitae. Praesent aliquet tristique sem, id gravida est eleifend ut. Cras aliquet, dui eget vestibulum varius, dui metus tempor turpis, a scelerisque felis magna vel diam. Nullam at fringilla ex, sollicitudin vulputate nisl. Aenean id lacus lacinia, dictum lorem quis, molestie lorem. Nullam tortor mi, suscipit quis aliquet consectetur, laoreet sed urna. Pellentesque eu odio bibendum, molestie arcu in, aliquet sapien. Quisque sed lobortis metus. Nullam et tempor lectus, quis viverra magna. Maecenas iaculis sed erat sed faucibus. Nulla eu odio velit. ",
    date: "",
    links:"",
    skills:[""],
    img:"null",
    height: 50,
    width: 50,
    id: 3
  },
];

function BulletList({list}:{list:String[]}){
  const listItems = list.map(item =>
    <li className="pl-5" key={list.indexOf(item)}>{item}</li>
  )
  return (<ul className="list-disc mt-5 mb-10 pl-5">{listItems}</ul>);
}

export default function Projects() {
  const size = 60;
  const gridItems = projects.map(project => 
    <div key ={project.id} className="bg-gray-500 m-8 p-5 rounded-lg">
      <div className="flex">
        <img className="inline-block" src={project.img} height={project.height} width={project.width}></img>
        <div><h2 className="text-2xl m-4">{project.projName}</h2></div>
      </div>
      <br/>
      <p className="text-xl">{project.info}</p>
      <br/>
      
        <p>Skills Learned</p>
        <BulletList list={project.skills}/>
      
      <div className="flex">
        <a className="ml-4">Github</a>
        <p className="flex-grow"></p>
        <a className="mr-4">Live site</a>
      </div>
    </div>
  )
  // ...
  return (<>
    <div className="hidden bg-black text-white md:grid">
    
        {gridItems}
    </div>
  </>)
}