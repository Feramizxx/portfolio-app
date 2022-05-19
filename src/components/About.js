import React from 'react'
import myimg from "./portphoto1.JPG"
export default function About() {
  return (
    <>
      <div id='about' className='about container mt-3 mb-5'>
        <div className='text-center post-heading'>
          <h3 className='font-weight-bold display-4'>About me</h3>
          <hr className='w-50 mx-auto ' />
        </div>

        <div className='row '>
          <div className='col-lg-6 col-md-6 col-12'>
            <img className='img-fluid' src={myimg} />
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <h2 className='text-center'>Wanna Know me?</h2>
            <hr />
            <p>Hi, I’ am Feramiz. I am passionate about  writing pure code and creating web apps with JavaScript. I am geniuenly love to learn how to handle some problems and solve them. I am currently looking for the right opportunity to work in an environment that will help me progress into a front-end role. </p>
            <button className='btn mb-5  button w-50'><a href='#' className='buttonContent text-light'>KNOW MORE</a></button>
          </div>
        </div>
      </div>

    </>
  )
}
