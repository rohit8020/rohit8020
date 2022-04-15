import React from "react";
import Technology from "../Technology/Technolgy";
import './Project.css'
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
    <div className="flex justify-center">
      <div className="project_container flex flex-col items-center w-11/12 bg-gray-50">
        <div className="project_content flex flex-row w-2/3">
          <h1 className="project_name">{props.name}</h1>
          <div className="project_content">{props.content}</div>
          <div className="demo_link">
            <a href={props.link}>Demo Link</a>
          </div>
          <div className="github_link">
            <a href={props.github}>Github Link</a>
          </div>
        </div>
        <div className="project_img_tech_container h-56 w-2/5">
          <div className="project_img_video">
            <img src={props.img} alt="project" />
          </div>
          <div className="technologies flex gap-5">
            {props.technology.map((tech: any) => (
              <Technology tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
