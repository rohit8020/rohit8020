import React from "react";
import rohitphoto1 from "../../images/rohit_img_1.png";
import githublogo from "../../images/github.png";
import linkedinlogo from "../../images/linkedin.png";
import twitterlogo from "../../images/twitter.png";
import codecheflogo from "../../images/codechef.svg";
import codeforceslogo from "../../images/codeforces.png";
import rohitprofileimg from "../../images/rohit_profile_img.png";
import leetcode from "../../images/leetcode.png";

import "./Home.css";
const Home = () => {
  return (
    <React.Fragment>
      <main>
        <div className="landing_page flex justify-between items-center mt-24">
          <div className="introduction flex flex-col ml-10 mb-40 justify-between">
            <div className="name_heading flex flex-col items-start">
              <div className="rohit_profile_img flex justify-center">
                <img src={rohitprofileimg} alt=".</rohit8020>" />
              </div>
              <h1 className="rohit_name mt-8">Rohit Gangwar</h1>
            </div>

            <div className="main_headline mt-2">
              Ex-SDE Intern @AnaStrat <br /> ICPC Regionalist'22 <br />
              MERN Stack Developer <br/>
              Competitive Programmer
            </div>
          </div>

          <div className="rohit_img_1 mr-44">
            <img src={rohitphoto1} alt=".</rohit8020>" />
            <a href="https://github.com/rohit8020" target="_blank">
              <img className="github_logo p-1" src={githublogo} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-gangwar-9b65281b4/"
              target="_blank"
            >
              <img
                className="linkedin_logo p-1"
                src={linkedinlogo}
                alt="github"
              />
            </a>
            <a href="https://twitter.com/rohit_8020" target="_blank">
              <img
                className="twitter_logo p-1"
                src={twitterlogo}
                alt="github"
              />
            </a>
            <a href="https://leetcode.com/rohit8020/" target="_blank">
              <img
                className="leetcode_logo p-1"
                src={leetcode}
                alt="leetcode"
              />
            </a>
            <a href="https://www.codechef.com/users/rohit8020" target="_blank">
              <img
                className="codechef_logo p-1"
                src={codecheflogo}
                alt="codechef"
              />
            </a>
            <a href="https://codeforces.com/profile/rohit8020" target="_blank">
              <img
                className="codeforces_logo p-1"
                src={codeforceslogo}
                alt="codeforces"
              />
            </a>
          </div>
        </div>
        <div className="about flex flex-col items-center justify-center my-5 text-white ">
          <h1 className=" text-6xl ">About Me</h1>
          <div className="about_me flex flex-col space-y-6 items-center m-16 text-2xl text-justify card px-12 py-10">
            <div className="flex space-x-2">
              <p>🟤</p>
              <p>
              Hello there! I am a recent graduate from Kamla Nehru Institute of Technology, specializing in Information Technology. Throughout my academic journey, I have gained valuable knowledge and hands-on experience in various aspects of web development.
              </p>
            </div>
            <div className="flex space-x-2">
              <p>🟤</p>
              <p>
              During my time as a full-stack intern, I primarily focused on backend development. I had the opportunity to work with cutting-edge technologies such as Node.js and Express.js to build and consume RESTful APIs. Additionally, I utilized MongoDB to design and implement efficient data models for the projects I worked on.
              </p>
            </div>
            <div className="flex space-x-2">
              <p>🟤</p>
              <p>
              One of the notable projects I contributed to was a trading platform. This platform involved real-time updates to market data, customer management, and order placement. Furthermore, I was involved in the development of a CRM system that included lead management, customer tracking, and sales forecasting. I also had the chance to work on a trading platform with course management and tracking features.
              </p>
            </div>
            <div className="flex space-x-2">
              <p>🟤</p>
              <p>
              Throughout my internships, I consistently delivered results by developing new features and resolving bugs within tight deadlines. Collaborating with cross-functional teams, I actively contributed to enhancing the overall code quality of three projects.
              </p>
            </div>
            <div className="flex space-x-2">
              <p>🟤</p>
              <p>
              In addition to my academic and professional experience, I am also an avid competitive programmer. I enjoy participating in coding competitions and solving algorithmic challenges. This passion for competitive programming has honed my problem-solving skills, strengthened my understanding of data structures and algorithms, and taught me to write efficient and optimized code.
              </p>
            </div>
            <div className="flex space-x-2">
              <p>🟤</p>
              <p>
              I am passionate about leveraging technology to create innovative solutions and enhance user experiences. With my solid foundation in web development and dedication to continuous learning, I am excited to embark on new professional opportunities and contribute to the ever-evolving field of Information Technology.
              </p>
            </div>
          </div>
        </div>  

        <div className="contact h-28 mx-auto w-11/12 text-center text-white text-lg">
            <p>Contact Me at : <a href="mailto:rohitgangwar8020@gmail.com" target="_blank">rohitgangwar8020@gmail.com</a> </p>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
