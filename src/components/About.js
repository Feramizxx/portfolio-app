import React from "react";
import myimg from "./portphoto1.JPG";
import {IconContext} from "react-icons";
import {FaGithub,FaCss3Alt,FaHtml5,FaJs,FaBootstrap,FaReact} from 'react-icons/fa'
export default function About() {
  return (
    <>
      <div id="about" className="about container mt-3 mb-5">
        <div className="text-center post-heading">
          <h3 className="font-weight-bold display-4">About me</h3>
          <hr className="w-50 mx-auto " />
        </div>

        <div className="row ">
          <div className="col-lg-6 col-md-6 col-12">
            <img className="img-fluid" src={myimg} />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <h2 className="text-center">Wanna Know me?</h2>
            <hr />
            <p>
              Hi, I’ am Feramiz. I am passionate about writing pure code and
              creating web-apps with JavaScript. I am geniuenly love to learn
              how to handle some problems and solve them. I am currently looking
              for the right opportunity to work in an environment that will help
              me progress into a front-end role.{" "}
            </p>
            <button className="btn mb-5  button w-50">
              <a href="#" className="buttonContent text-light">
                KNOW MORE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column  col-10">
        <div className="mr-auto mt-5 ml-auto">
          <h2>Skills</h2>
          <hr/>
        </div>
        <div className="row  ">
        <IconContext.Provider value={{ className: "myReact-icons"}}>
            <div className="row w-100  mt-4 mt-lg-4 mt-md-5 ml-auto pt-4 pb-4 mr-auto ">
              <div className="col-md-2  d-flex justify-content-center align-items-center col-sm-2 w-100 col-lg-2">
                <a className="mb-2"><FaGithub/></a>
              </div>
              <div className="col-md-2 d-flex justify-content-center align-items-center  col-sm-2 col-lg-2">
                <a className="mb-2"><FaCss3Alt/></a>
              </div>
              <div className="col-md-2 d-flex justify-content-center align-items-center col-sm-2 col-lg-2">
                <a className="mb-2"><FaHtml5/></a>
              </div>
              <div className="col-md-2 d-flex justify-content-center align-items-center col-sm-2 col-lg-2">
              <a className="mb-2"><FaBootstrap/></a>
              </div>
              <div className="col-md-2 d-flex justify-content-center align-items-center col-sm-2 col-lg-2">
              <a className="mb-2"><FaJs/></a>
              </div>
              <div className="col-md-2 d-flex justify-content-center align-items-center col-sm-2 col-lg-2">
              <a className="mb-2"><FaReact/></a>
              </div>
             
            </div>
            </IconContext.Provider>
          </div>
        </div>
    </>
  );
}
