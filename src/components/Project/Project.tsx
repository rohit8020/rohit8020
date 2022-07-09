import React from "react";
import Technology from "../Technology/Technolgy";
import "./Project.css";
interface project {
  img: string;
  content: string;
  github: string;
  link: string;
  name: string;
  technology: any;
}

function Project(props: project) {
  return (
    <div className="main_container mx-auto flex justify-start w-4/5 mt-20">
      <div className="project_container flex justify-center p-1 rounded-md">
        <div className="project_content_container p-5 flex flex-col justify-between h-full w-full bg-gray-800 rounded-md text-white">
          <div>
          <h1 className="project_name text-5xl">{props.name}</h1>
          <div className="project_content mt-7 text-1xl pr-10">{props.content}</div>
          </div>
          <div className="links flex gap-10 mt-10">
          <div className="demo_link bg_slider p-1 rounded">
            <a href={props.link} target='_blank'>Demo Link</a>
          </div>
          <div className="github_link bg_slider p-1 rounded">
            <a href={props.github} target='_blank'>Github Link</a>
          </div>
          </div>
        </div>
        <div className="project_img_tech_container p-1 rounded-md">
          <div className="project_img_video h-4/5">
            <img className=" h-full w-full rounded-t-md" src={props.img} alt="project" />
          </div>
          <div className="technologies flex flex-row gap-1 items-center h-1/5 pl-2 bg-white">
            {props.technology.map((tech: any) => (
              <Technology key={Math.floor(Math.random() *1000000000000).toString()} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
