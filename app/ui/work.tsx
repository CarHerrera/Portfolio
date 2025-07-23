import jobsJson from "../../public/jobs.json";
const jobs = jobsJson;
export default function History() {
  // ...
  const size = 175;
  const listItems = jobs.map(job => {
    if(job.id === (jobs.length-1)){
        return <li key={job.id}className="">
                <div className="flex bl-4 mt-4">
                  {/* <div className="absolute mt-10 left-33.5 border-gray-50 border-l-3 h-50"></div> */}
                  <div className="last-of-type:hidden ml-30 absolute w-10 h-10 bg-gray-200 rounded-full mt-6.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <img className ="ml-15 rounded-full" src={job.img} width={size} height={size} alt={job.alt}/>
            
                  <div className="mt-4 ml-7">
                    <p className="text-2xl">{job.name}</p>
                    <p className="text-2xl" >{job.title}</p>
                  </div>
                  <div className="flex-grow"></div>
                  <div className="mt-4">
                    <p className="text-2xl">{job.time}</p>
                    <p className="text-2xl text-right">{job.loc}</p>
                </div>
                  
                </div>
            </li>
    } else {
        return <li key={job.id} className="">
                <div className="flex bl-4 mt-4">
                  <div className="absolute mt-10 left-33.5 border-gray-50 border-l-3 h-45"></div>
                  <div className="ml-30 absolute w-10 h-10 bg-gray-200 rounded-full mt-6.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <img className ="ml-15 rounded-full" src={job.img} width={size} height={size} alt={job.alt}/>
            
                  <div className="mt-4 ml-7">
                    <p className="text-2xl">{job.name}</p>
                    <p className="text-2xl">{job.title}</p>
                  </div>
                  <div className="flex-grow"></div>
                  <div className="mt-4">
                    <p className="text-2xl">{job.time}</p>
                    <p className="text-2xl text-right">{job.loc}</p>
                </div>
                  
                </div>
            </li>
    }
  }
            
  );
  return <ul>{listItems}</ul>
}