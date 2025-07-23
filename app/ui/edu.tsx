const schools = [
    {
        id:0,
        name:"University of Maryland",
        title:"Bachelor of Science in Computer Science",
        time: "Fall 2022 - Spring 2025",
        img: '/portfolio/UMD_SEAL.png',
        alt:"University of Maryland seal"
    },
    {
        id:1,
        name:"Montgomery College",
        title:"Associate of Arts in Computer Science",
        time: "Fall 2019 - Spring 2022",
        img:"/portfolio/MC.png",
        alt: "Montgomery College logo"
    },
    {
        id:2,
        name:"Wilson High School",
        time: "Fall 2015 - Spring 2019",
        title:"",
        img:"/portfolio/wilson.png",
        alt: "Wilson High School logo"
    }
];


export default function Timeline() {
  // ...
  const size = 175;
  const listItems = schools.map(school => {
    if(school.id === (schools.length-1)){
        return <li key={school.id} className="">
                <div className="flex bl-4 mt-4">
                  {/* <div className="absolute mt-10 left-33.5 border-gray-50 border-l-3 h-50"></div> */}
                  <div className="last-of-type:hidden ml-30 absolute w-10 h-10 bg-gray-200 rounded-full mt-6.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <img className ="rounded-full ml-15" src={school.img} width={size} height={size} alt={school.alt}/>
            
                  <div className="mt-4 ml-7">
                    <p className="text-2xl">{school.name}</p>
                    <p className="text-2xl">{school.title}</p>
                  </div>
                  <div className="flex-grow"></div>
                  <div className="text-2xl mt-4">{school.time}</div>
                  
                </div>
            </li>
    } else {
        return <li key={school.id} className="">
                <div className="flex bl-4 mt-4">
                  <div className="absolute mt-10 left-33.5 border-gray-50 border-l-3 h-45"></div>
                  <div className="ml-30 absolute w-10 h-10 bg-gray-200 rounded-full mt-6.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <img className ="rounded-full ml-15" src={school.img} width={size} height={size} alt={school.alt}/>
            
                  <div className="mt-4 ml-7">
                    <p className="text-2xl">{school.name}</p>
                    <p className="text-2xl">{school.title}</p>
                  </div>
                  <div className="flex-grow"></div>
                  <div className="text-2xl mt-4">{school.time}</div>
                  
                </div>
            </li>
    }
  }
            
  );
  return <ul>{listItems}</ul>
}