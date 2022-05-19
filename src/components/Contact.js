import React from 'react'

export default function Contact() {
  return (
    <>
   <div id='contact' className='container mx-auto w-50 contact mt-5 mb-5'>
       <div className='post-heading text-center'>
           <h3 className='display-4 font-weight-bold'>Contact Me</h3>
           <hr className='w-50 mx-auto'/>
       </div>
       <div class="container">
  
  <form action="/action_page.php">
  <div class="form-group">
      <label for="email">Full name:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
    <div class="form-group">
      <label for="pwd">Your Message:</label>
     <textarea className='form-control'></textarea>
    </div>
    <div class="checkbox">
      <label><input type="checkbox" name="remember"/> Remember me</label>
    </div>
    <button type="submit" class="btn btn-dark">Sent</button>
  </form>
</div>

   </div>
    </>
  )
}
