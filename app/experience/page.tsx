import Image from "next/image";
import Timeline from '../ui/edu';
import History from '../ui/work';

export default function Home() {
  return (
    <div className="m-30 hidden">
      <h1 className="text-5xl">Education</h1>

      <br></br>

      <Timeline />
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <h1 className="text-5xl">Profession Experience</h1>
      <History/>
    </div>
  );
}
