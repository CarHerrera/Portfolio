import Image from "next/image";
import Timeline from '../ui/edu';
import History from '../ui/work';

export default function Home() {
  return (
    <div>
        <div className="m-30 hidden md:grid">
          <h1 className="text-5xl">Education</h1>

          <br></br>

          <Timeline size={175}/>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h1 className="text-5xl">Profession Experience</h1>
          <History/>
        </div>

        <div className="md:hidden m-5">
          <h1 className="text-2xl">Education</h1>

          <br></br>

          <Timeline size={75}/>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h1 className="text-5xl">Profession Experience</h1>
          <History/>
        </div>
    </div>
  );
}
