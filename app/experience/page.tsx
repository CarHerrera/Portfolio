import Image from "next/image";
import Timeline from '../ui/timeline';
// import History from '../ui/work';


export default function Home() {
  return (
    <div>
        <div className="m-30 hidden md:grid">
          <h1 className="text-5xl">Education</h1>

          <br></br>

          <Timeline size={175} version={0} />
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h1 className="text-5xl">Profession Experience</h1>
          <Timeline size={175} version={1} />
        </div>

        <div className="md:hidden m-5">
          <h1 className="text-2xl">Education</h1>

          <br></br>

          <Timeline size={75} version={0}/>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h1 className="text-2xl">Professional Experience</h1>
          <Timeline size={75} version={1}/>
          {/* <History/> */}
        </div>
    </div>
  );
}
