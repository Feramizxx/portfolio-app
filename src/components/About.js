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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className='btn mb-5  button w-50'><a href='#' className='buttonContent text-light'>KNOW MORE</a></button>
          </div>
        </div>
      </div>

    </>
  )
}
