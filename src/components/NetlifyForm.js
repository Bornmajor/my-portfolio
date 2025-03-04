import React from 'react'

const NetlifyForm = () => {
  return (
    <div>
    <form method='post' name="inquiries">
    <input type="hidden" name="form-name" value="inquiries" /> 
  <div className="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" name='email' placeholder="name@example.com" required />
  <label for="floatingInput">Your email address</label>
  </div>
  
  <div class="form-floating mb-3">
  <select class="form-select" id="floatingSelect"  name='category'>
      <option selected>Choose an item</option>
      <option value="app">App</option>
      <option value="webites">Website</option>
      <option value="others">others</option>
    </select>
    <label for="floatingSelect">Product type</label>
  </div>
  
  <div class="form-floating">
  <textarea class="form-control" placeholder="Price,Type app..." id="floatingTextarea" name='message'  required></textarea>
  <label for="floatingTextarea2">More details</label>
  </div>
  
  <button type='submit' class='btn btn-success mt-3'>Send</button>
  
  </form>
  </div>     
  )
}

export default NetlifyForm