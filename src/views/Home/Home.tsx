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
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

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
              MERN Developer, Algorithms <br /> Expert & Competitive <br />{" "}
              Programmer.
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
              Hello, I'm Rohit Gangwar. Currently, I am a final year student pursuing a Bachelor of Technology in Information Technology at Kamla Nehru Institute of Technology, Sultanpur.
              </p>
            </div>
            <div className="flex space-x-2">
              <p>🟤</p>
              <p>
              I am an MERN Stack Developer and have designed and built so many apps and websites for personal, group, and college projects. I am also a competitive programmer on Codechef, Codeforces, and Leetcode. I am very passionate about learning new Technologies, Algorithms and Data Structures.
              </p>
            </div>
            <div className="flex space-x-2">
              <p>🟤</p>
              <p>
              It is my pleasure to be a member of Programming Club KNIT. I am making the website for the club. Additionally, I have taken workshops on Web Development and taught it to juniors from my college. 
              </p>
            </div>
            <div className="flex space-x-2">
              <p>🟤</p>
              <p>
              As well as being a developer, I contribute to Open Source projects. It was my pleasure to contribute to Hacktober Fest and other open source organizations.
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
