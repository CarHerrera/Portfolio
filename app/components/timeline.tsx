import Image from 'next/image';
import jobsJson from "../../public/jobs.json";
const schools = [
    {
        id:0,
        name:"University of Maryland",
        title:"Bachelor of Science in Computer Science",
        time: "Fall 2022 - Spring 2025",
        img: '/portfolio/UMD_SEAL.png',
        alt:"University of Maryland seal",
        loc:""
    },
    {
        id:1,
        name:"Montgomery College",
        title:"Associate of Arts in Computer Science",
        time: "Fall 2019 - Spring 2022",
        img:"/portfolio/MC.png",
        alt: "Montgomery College logo",
        loc:""
    },
    {
        id:2,
        name:"Wilson High School",
        time: "Fall 2015 - Spring 2019",
        title:"",
        img:"/portfolio/wilson.png",
        alt: "Wilson High School logo",
        loc:""
    }
];


// TODO make the lines touch automatically
function Line(){
  return(
    <div className={`min-h-full h-full ml-4.5 border-gray-50 border-l-3`}></div>
  )
}

function Circle(){
  return (<div className={`items-baseline w-10 h-10 bg-gray-200 rounded-full border border-white dark:border-gray-900 dark:bg-gray-700`}></div>)
}
interface TimelineTypes {
  version:number,
  size:number
}
export default function Timeline({version,size}:TimelineTypes) {
  // ...
  const objects = version == 0 ? schools : jobsJson;
  const listItems = objects.map(obj => 
    <div  key={obj.id} className="">
        <div className="h-full md:flex bl-4 mt-4 hidden">
          <div>
          <Circle />
          { obj.id != (objects.length-1) &&
            <Line />
          }
            
          </div>

          
          <Image className ="rounded-full ml-15" src={obj.img} width={size} height={size} alt={obj.alt}/>
    
          {/* Text about the obj */}
          <div className="mt-4 ml-7">
              <p className="text-2xl">{obj.name}</p>
              <p className="text-2xl">{obj.title}</p>
            </div>
            <div className="flex-grow"></div>
            <div className="mt-4">
                    <p className="text-2xl">{obj.time}</p>
                    <p className="text-2xl text-right">{obj.loc}</p>
              </div>
          
        </div>

        <div className="flex flex-row h-full md:hidden">

          <div>
             <Circle />
          { obj.id != (objects.length-1) &&
              //  <Line left={mobile.lineLeft} top={mobile.lineTop} height={mobile.lineHeight}></Line>    
              <div className="h-full ml-4.5 border-gray-50 border-l-3"></div>

          }
            
          </div>

          <div className="flex-col">
              <Image className ="rounded-full ml-10" src={obj.img} width={size} height={size} alt={obj.alt}/>
    
              <div className="mt-4 ml-7">
                <p className="text-lg">{obj.name}</p>
                <p className="text-lg">{obj.title}</p>
                <p className="text-lg">{obj.time}</p>
                <p className="text-lg">{obj.loc}</p>
              </div>
          </div>
          
          {/* <div className="text-2xl mt-4">{school.time}</div> */}
          
        </div>
      </div>
    
            
  );
  return <div className="grid auto-rows-fr m-4 gap-2" >{listItems}</div>
}