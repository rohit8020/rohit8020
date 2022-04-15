import React from 'react'
import Project from '../../components/Project/Project';

interface pjct {
  img: string;
  content: string;
  github: string;
  link:string;
  name: string;
  technology: any;
}

const Projects = () => {

  let projects=[
    {
      img: "https://user-images.githubusercontent.com/76878634/146632620-e03fc7c4-b9fb-4a74-b7b5-a2e610831bbe.png",
      content: "This is brakout game in which we can move bouncer horizontly.I  use html, css, javascript",
      github: "https://github.com/rohit8020/breakout_game",
      link:"https://rohit8020.github.io/breakout_game/",
      name: "Breakout Game",
      technology: [<i className="fa fa-sign-in" aria-hidden="true"></i>,<i className="fa fa-sign-in" aria-hidden="true"></i>,<i className="fa fa-sign-in" aria-hidden="true"></i>]
    },
  
  
  ]

  return (
    <React.Fragment>
      <main>
        <div className="projects mt-20">
        {projects.map((project:pjct)=><Project {...project} />)}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Projects
