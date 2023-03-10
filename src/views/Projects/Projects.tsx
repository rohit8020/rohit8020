import React from "react";
import Project from "../../components/Project/Project";
import Images from "../../Exproter/ExportImages";

interface pjct {
  img: string;
  content: any;
  github: string;
  link: string;
  name: string;
  technology: any;
}

const Projects = () => {
  let projects = [
    {
      img: "https://user-images.githubusercontent.com/76878634/178085755-99821c46-1318-4836-b3b9-81eb0ea4e0fc.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
          This is the platform where students can <b>BUY, SELL and DONATE</b> their used items in college(KNIT, SULTANPUR).
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            Students can post the item on the website and the one who need it, can contact with the person with the <b>College Gmail Id.</b> 
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
        <p>🟤</p>{" "}
        <p>
          I used <b>Node.js, MongoDB, Express.js, Gmail API, EJS, HTML, CSS, and JavaScript</b> to create this project.
        </p>
      </div>,
      ],
      github: "https://github.com/rohit8020/knitsales",
      link: "https://knitsales.up.railway.app/",
      name: "KNITSALES",
      technology: [
        Images.nodejs,
        Images.expressjs,
        Images.googleconsole,
        Images.mongodb,
        Images.html,
        Images.css,
        Images.git,
        Images.javascript,
      ],
    },
    {
      img: "https://user-images.githubusercontent.com/76878634/178100324-4fa4f2df-95e3-4235-815b-f3d57b4e3ac6.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            This is a <b>IP-TV Application</b> in which you run the <b>Free Channels of Indian Television.</b>
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            I make this project by <b>Extracting the video links from the IP-TV org reposiotry's Playlist</b>.
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
        <p>🟤</p>{" "}
        <p>
          I used <b>Node.js, Express.js, EJS, HTML, CSS, and JavaScript</b> to create this project.
        </p>
      </div>,
      ],
      github: "https://github.com/rohit8020/IPTV_app",
      link: "https://iptvapp.up.railway.app/",
      name: "IP-TV",
      technology: [
        Images.expressjs,
        Images.nodejs,
        Images.html,
        Images.css,
        Images.git,
        Images.javascript,
      ],
    },
    {
      img: "https://user-images.githubusercontent.com/76878634/178085555-187dcafb-f15a-419c-8349-7242940a2293.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            This is a <b>Remote Notes Taking Application</b>.
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            You can <b>access your notes from anywhere online.</b>
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
        <p>🟤</p>{" "}
        <p>
          I used <b>React.js and Firebase</b> to create this project.
        </p>
      </div>,
      ],
      github: "https://github.com/rohit8020/ANYPLACE-NOTES",
      link: "https://anyplacenotes.netlify.app/",
      name: "Anyplace Notes App",
      technology: [
        Images.firebase,
        Images.reactjs,
        Images.html,
        Images.css,
        Images.git,
        Images.javascript,
      ],
    },
    {
      img: "https://user-images.githubusercontent.com/76878634/178099905-c135297d-6bd3-4324-8506-846150b161ed.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            This is a <b>Burger Builder Application</b> in which you can make the Burger according to your wish.
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            You can add the ingredients you want to add and can remove according to your choice.
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
        <p>🟤</p>{" "}
        <p>
          This application was created using <b>React.js, Redux, Firebase, HTML, CSS, JavaScript.</b> .
        </p>
      </div>
      ],
      github: "https://github.com/rohit8020/burger-builder-app",
      link: "https://burger-builder-30783.web.app/",
      name: "Burger Builder App",
      technology: [
        Images.reactjs,
        Images.redux,
        Images.firebase,
        Images.html,
        Images.css,
        Images.javascript,
      ],
    },
    {
      img: "https://user-images.githubusercontent.com/76878634/177907251-b773fda1-d273-4da1-84b0-c396ebf9c3ed.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            This is the clone of the <a href="https://seekho.ai/" style={{'color':'skyblue','fontWeight':'bold'}}>seekho.ai</a> website.
          </p>
        </div>,
        <div className="flex space-x-3">
          <p>🟤</p>{" "}
          <p>
            I used <b>React.js library</b> to create this project and <b>HTML, CSS, and JavaScript</b> also.
          </p>
        </div>,
      ],
      github: "https://github.com/rohit8020/seekho.ai_clone",
      link: "https://capable-gelato-f80083.netlify.app/",
      name: "Seekho.ai Clone",
      technology: [
        Images.git,
        Images.javascript,
        Images.reactjs,
        Images.git,
        Images.html,
        Images.css,
      ],
    },
    {
      img: "https://user-images.githubusercontent.com/76878634/178084864-9547f7f6-4b1c-42bd-b290-c6a274b9e3d3.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            This is a <b>Realtime Create, Read, Update, Delete</b> operation application.
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            The effect you make on <b>one Client affects the Post in realtime in all the Clients(Browser).</b>
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
        <p>🟤</p>{" "}
        <p>
          The <b>Backend</b> of the application was built with <b>Node.js, Express.js, MongoDB and Socket.IO</b> and the <b>Frontend</b> of the application is built with <b>React.js, SemanticUI, HTML, CSS, JavaScript.</b>
        </p>
      </div>,
      ],
      github: "https://github.com/rohit8020/CRUD_Frontend_Socket.IO_React",
      link: "https://rtcrud.netlify.app/",
      name: "Realtime CRUD App",
      technology: [
        Images.nodejs,
        Images.expressjs,
        Images.mongodb,
        Images.git,
        Images.reactjs,
        Images.html,
        Images.css,
        Images.git,
        Images.javascript,
      ],
    },
    {
      img: "https://user-images.githubusercontent.com/76878634/146632620-e03fc7c4-b9fb-4a74-b7b5-a2e610831bbe.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            This is a <b>Simple Breakout</b> game made using <b>HTML CSS JavaScript</b>.
          </p>
        </div>,
        <div className="flex space-x-3">
          <p>🟤</p>{" "}
          <p>
            This was made with the <b>JavaScript Class and Object</b>.
          </p>
        </div>
      ],
      github: "https://github.com/rohit8020/breakout_game",
      link: "https://rohit8020.github.io/breakout_game/",
      name: "Breakout Game",
      technology: [
        Images.html,
        Images.css,
        Images.javascript,
      ],
    },
    {
      img: "https://user-images.githubusercontent.com/76878634/178100696-e55c6278-cea7-4c54-b84d-ea28598d2f62.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
          This is a simple  <b>Tic-Tac-Toe Game</b>.
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            This is a one on one game. 
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
        <p>🟤</p>{" "}
        <p>
          I used <b>HTML, CSS, Javascript</b> to create this project.
        </p>
      </div>,
      ],
      github: "https://github.com/rohit8020/tic-tac-toe_Game",
      link: "https://rohit8020.github.io/tic-tac-toe_Game/",
      name: "Tic-Tac-Toe",
      technology: [
        Images.html,
        Images.css,
        Images.git,
        Images.javascript,
      ],
    },
    {
      img: "https://user-images.githubusercontent.com/76878634/178101015-106991b3-6cc0-4ebc-94d3-5be9b53a77bd.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
          This is a simple  <b>Calculator App</b>.
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
            You can use this <b>Calculator App</b> to do simple mathematical calculations. 
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
        <p>🟤</p>{" "}
        <p>
          I used <b>HTML, CSS, Javascript</b> to create this project.
        </p>
      </div>,
      ],
      github: "https://github.com/rohit8020/calculator_app",
      link: "https://rohit8020.github.io/calculator_app/",
      name: "Calculator App",
      technology: [
        Images.html,
        Images.css,
        Images.git,
        Images.javascript,
      ],
    },
    {
      img: "https://user-images.githubusercontent.com/76878634/178101209-e40816f6-b3c3-473f-9e17-fe077af50ecd.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
          This is a simple  <b>Stop Watch</b>.
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
        <p>🟤</p>{" "}
        <p>
          I used <b>HTML, CSS, Javascript</b> to create this project.
        </p>
      </div>,
      ],
      github: "https://github.com/rohit8020/stop-watch-app",
      link: "https://rohit8020.github.io/stop-watch-app/",
      name: "Stop Watch",
      technology: [
        Images.html,
        Images.css,
        Images.git,
        Images.javascript,
      ],
    },
    {
      img: "https://user-images.githubusercontent.com/76878634/178101276-4b4981d8-d4a1-40fa-92fd-9eeb0de06543.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
          This is a simple  <b>Digital Clock App</b>.
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
        <p>🟤</p>{" "}
        <p>
          I used <b>HTML, CSS, Javascript</b> to create this project.
        </p>
      </div>,
      ],
      github: "https://github.com/rohit8020/digital_clock_app",
      link: "https://rohit8020.github.io/digital_clock_app/",
      name: "Digital Clock",
      technology: [
        Images.html,
        Images.css,
        Images.git,
        Images.javascript,
      ],
    },
    {
      img: "https://github.com/rohit8020/form-validation/raw/main/Screenshot%20from%202021-12-16%2018-43-39.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
          This is a simple  <b>Form Validation App</b>.
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
        <p>🟤</p>{" "}
        <p>
          I used <b>HTML, CSS, Javascript</b> to create this project.
        </p>
      </div>,
      ],
      github: "https://github.com/rohit8020/form-validation",
      link: "https://rohit8020.github.io/digital_clock_app/",
      name: "Form Validation App",
      technology: [
        Images.html,
        Images.css,
        Images.git,
        Images.javascript,
      ],
    },
    {
      img: "https://github.com/rohit8020/password_generator/raw/main/password_generator_webapp.png",
      content: [
        <div className="flex space-x-3 my-3">
          <p>🟤</p>{" "}
          <p>
          This is a simple  <b>Password Generator App</b>.
          </p>
        </div>,
        <div className="flex space-x-3 my-3">
        <p>🟤</p>{" "}
        <p>
          I used <b>HTML, CSS, Javascript</b> to create this project.
        </p>
      </div>,
      ],
      github: "https://github.com/rohit8020/password_generator",
      link: "https://rohit8020.github.io/password_generator/",
      name: "Password Generator App",
      technology: [
        Images.html,
        Images.css,
        Images.git,
        Images.javascript,
      ],
    },
  ];

  return (
    <React.Fragment>
      <main>
        <div className="projects mt-20">
          {projects.map((project: pjct) => (
            <Project key={Math.floor(Math.random() * 1000000000).toString()} {...project} />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Projects;
