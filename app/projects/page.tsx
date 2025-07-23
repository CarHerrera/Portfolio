import Image from "next/image";
import Projects from "../ui/projects";
export default function Home() {
  return (
    <div>
        <div className="hidden h-1/3 grid-cols-2 bg-gray-700 p-10 text-white md:grid">
            <div className="px-5 py-10">
                  <p className="text-4xl">Projects!</p>
                  <br></br>
                  <br></br>
                  <p className="text-3xl">This page showcases some of the work that I am most proud of. 
                    Each of these projects came with their own set of challenges and I am proud for overcoming each and every one of them. These projects helped me hone some of my skills and they made a stronger and more confident developer.
                    <br></br>
                    <br></br>
                    Feel free to take a look at each one!
                    </p>
            </div>
            <div className="relative">
                <Image className="rounded-full mx-auto px-5 py-10" src={"/portfolio/me.png"} alt="A picture of me" fill={true}/>
            </div>
        </div>
        <Projects/>
    </div>
  );
}
