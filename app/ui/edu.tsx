import Image from 'next/image';
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

// TODO make the lines touch automatically

export default function Timeline({size}:{size:number}) {
  // ...
  const listItems = schools.map(school => 
    <li  key={school.id} className="">
        <div className="md:flex bl-4 mt-4 hidden">
          {/* These are the borders */}
          { school.id != (schools.length-1) &&
              <div className="absolute mt-10 left-33.5 border-gray-50 border-l-3 h-45"></div>
          }
          {/* This is the dot */}
          <div className="ml-30 absolute w-10 h-10 bg-gray-200 rounded-full mt-6.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          {/* Image obviously */}
          <Image className ="rounded-full ml-15" src={school.img} width={size} height={size} alt={school.alt}/>
    
          {/* Text about the school */}
          <div className="mt-4 ml-7">
            <p className="text-2xl">{school.name}</p>
            <p className="text-2xl">{school.title}</p>
          </div>
          <div className="flex-grow"></div>
          <div className="text-2xl mt-4">{school.time}</div>
          
        </div>

        <div className=" bl-4 mt-4 md:hidden">
          { school.id != (schools.length-1) &&
              <div className="absolute mt-10 left-[5vw] border-gray-50 border-l-3 h-[35vh]"></div>
          }
          
          <div className="ml-[3vw] absolute w-10 h-10 bg-gray-200 rounded-full mt-6.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>


          <Image className ="rounded-full ml-10" src={school.img} width={size} height={size} alt={school.alt}/>
    
          <div className="mt-4 ml-7">
            <p className="text-xl">{school.name}</p>
            <p className="text-xl">{school.title}</p>
            <p className="text-xl">{school.time}</p>
          </div>
          {/* <div className="text-2xl mt-4">{school.time}</div> */}
          
        </div>
      </li>
    
            
  );
  return <ul>{listItems}</ul>
}