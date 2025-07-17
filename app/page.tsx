export default function Page(){
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
    <div className="hidden grid-cols-2 grid-rows-2 bg-black text-white md:grid">
    
    <div className="bg-gray-500 m-8 p-5 rounded-lg">
        <h2>Project 1</h2>
        <br/>
        This is a project description that each project will eventually have (each one different obv).
        This is a project description that each project will eventually have (each one different obv).
        This is a project description that each project will eventually have (each one different obv).
        This is a project description that each project will eventually have (each one different obv).
        This is a project description that each project will eventually have (each one different obv).
        </div>
        <div className="bg-gray-500 m-8 p-5 rounded-lg">
        <h2>Project 2</h2>
        <br/>
        This is a project description that each project will eventually have (each one different obv).
        </div>
        <div className="bg-gray-500 m-8 p-5 rounded-lg">
        <h2>Project 3</h2>
        <br/>
        This is a project description that each project will eventually have (each one different obv).
        </div>
        <div className="bg-gray-500 m-8 p-5 rounded-lg">
        <h2>Project 4</h2>
        <br/>
        This is a project description that each project will eventually have (each one different obv).
    </div>
  </div>
        </div>

    );
}