import Image from "next/image";
import Projects from "../ui/projects"
export default function Home() {
  return (
    <div>
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
                <img className="rounded-full mx-auto px-5 py-10" src={"/me.png"} />
            </div>
        </div>
        <Projects/>
    </div>
  );
}
