const projects = [
  {
    projName: "Co$t4Equality",
    info: "This was a website that I created when I was working at iStrategyLabs. This was a summer internship that I secured and our goal was to create a website that talked about some\
    problems that we felt passionate about at the time. There were 3 of us working on the webpage and each of us were focused on different aspects of the project. I was the main person that\
    worked on the front end portions and the backend portions. This project was the project that made me want to pursue computer science as career while in Highschool.",
    date: "",
    github:"https://github.com/CarHerrera/Cost4EqualityNew",
    img:"/C4ELogo.png",
    height: 50,
    width: 250,
    id: 3
  },
  {
    projName: "Discord Bot",
    info: "This was an application that I had created while I was at Montgomery College. I was looking for opportunities to practice and develop some of my python skills and found a library\
    that gave me the tools to create a discord bot. After intializing the bot and adding some base commands, I started to add some custom commands. I added the ability for the bot to randomly\
    respond to user messages, allowed it to play soundbytes, and created a social currency system that correlated with the user activity on the server.",
    date: "",
    github:"https://github.com/CarHerrera/DiscordJesusBot",
    img:"/disc.png",
    height: 50,
    width: 65,
    id: 2
  },
  {
    projName: "Health App Project",
    info: "This was a project that was created in a Human-Computer Interaction Course.\
     This project was different to some of my others as we were not focusing on creating a functional app. Instead, the professor wanted to make an app that prioritized the user and their experiences.\
     An added constraint was that it was meant to be designed on a 640x960 application and we could not use anything outside of the base HTML, CSS, and JS.\
     With a group of 3 other classmates, we created this simulated mobile app and utilized everything we learned from class to make the app as appealing as possible. ",
    date: "",
    github:"https://github.com/CarHerrera/434-HealthApp",
    img:"/dumbbell.png",
    height: 50,
    width: 50,
    id: 1
  }, 
  {
    projName: "Drink and Food Recipe Site",
    info: "This was one my final project for my Javascript and Web Applications course. The project was open ended but it must use at least one GET and POST request.\
    I decided to make a recipe book site for both cocktails and food recipes. It would generate recipes based on the query by the user. For example if they wanted only\
    drinks with rum, it would make a call to the cocktaildb and popualte results. I also allowed users to enter some ingredients that they had and it would also populate a table\
    with recipes that could be made from those ingredients.",
    date: "",
    github:"https://github.com/CarHerrera/CMSC335Final",
    img:"/cocktail.png",
    height: 50,
    width: 60,
    id: 0
  },
];

function BulletList({list}:{list:String[]}){
  const listItems = list.map(item =>
    <li className="pl-5 text-lg0" key={list.indexOf(item)}>{item}</li>
  )
  return (<ul className="list-disc mt-5 mb-10 pl-5">{listItems}</ul>);
}

export default function Page(){
    const gridItems = projects.map(project => 
    <div key ={project.id} className="bg-gray-500 m-8 p-5 rounded-lg">
      <div className="flex">
        <a href={project.github} target="_blank"><img className="inline-block" src={project.img} height={project.height} width={project.width}></img></a>
        <div><h2 className="text-3xl m-4">{project.projName}</h2></div>
      </div>
      <br/>
      <p className="text-xl">{project.info}</p>
      <br/>
      <div className="relative flex bottom-1">
        <img src="https://twenty-icons.com/github.com" className="bg-white rounded-full" width={48} height={32} alt="Github Logo"/>
        <a className="ml-4 mt-5" target="_blank" href={project.github}>Github</a>
        <p className="flex-grow"></p>
        {project.id != 2   &&
            <a className="mr-4 mt-5" target="_blank">Live site</a>
        }


      </div>
    </div>
  )
    return (
        <div>
            
            <div className="hidden h-1/2 grid-cols-2 bg-gray-700 p-10 text-white md:grid">
            <div className="px-5 py-10">

                <br />
                <br />
                <p className="text-4xl m-5">Hi! I am Carlos Herrera.
                </p>
                <br />
                <br />
                <div className="mr-4">
                    <p className="text-xl"> I am a graduate of the University of Maryland with a strong interest in full-stack devlopment. I have experience working front-end frameworks like react, and have experiencce working with back-end technology such as Node.js, Express, and SQL/NOSQL databases.
                        I am looking for opportunities to improve my software devlopment skills and contribute to collaborative engineering teams. 
                    

                    <br></br>
                    <br></br>
                    This is my portfolio site! I will be adding some of the proejcts that I've worked on throughout my academic career.
                        Feel free to look through it and check back occasionally as I update it with new work.
                    </p>
                </div>
            </div>
            <div>
                <img className="rounded-full mx-auto px-5 py-10" src={"/me.png"} />
            </div>
            </div>
        <div className="hidden grid-cols-2 bg-black text-white md:grid">
    
        {gridItems}
        </div>
    </div>

    );
}