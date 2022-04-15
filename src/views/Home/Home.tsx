import React from "react";
import rohitphoto1 from "../../images/rohit_img_1.png";
import githublogo from "../../images/github.png";
import linkedinlogo from "../../images/linkedin.png";
import twitterlogo from "../../images/twitter.png";
import codecheflogo from "../../images/codechef.svg";
import codeforceslogo from "../../images/codeforces.png";
import rohitprofileimg from "../../images/rohit_profile_img.png";

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
      </main>
    </React.Fragment>
  );
};

export default Home;
