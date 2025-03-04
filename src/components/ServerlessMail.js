import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

const ServerlessMail = () => {
      const form = useRef();
      const [feedback,setFeedback] = useState('');
    const [showFeedback,setShowFeeback] = useState(false);
     const [isDisabled,setIsDisabled] = useState(false);


  const sendEmail = (e) => {
      e.preventDefault();
      setIsDisabled(true);
  
      emailjs.sendForm('service_umb69f9', 'template_xf56a8o', form.current, 'QYj0KZPrgUX544hWF')
        .then((result) => {

            console.log(result.text);
            document.getElementById('email').value = '';
            document.getElementById('category').value = '';
            document.getElementById('message').value = '';
            setFeedback('Email sent successfully!!');
            setIsDisabled(false);

        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
        {/* <input type="hidden" name="form-name" value="inquiries" />  */}
         {feedback &&    
         <Alert key="success" variant="success" dismissible> 
         {feedback} 
        </Alert>}
        <div className="form-floating mb-3">
        <input type="email" 
         class="form-control" 
         id="email" 
         name='email'
         placeholder="name@example.com" 
         required 
         />
        
        <label for="floatingInput">Your email address</label>
        </div>
        
        <div class="form-floating mb-3">
        <select class="form-select" id="category"  name='category'>
          <option selected>Choose an item</option>
          <option value="app">App</option>
          <option value="webites">Website</option>
          <option value="others">others</option>
        </select>
        <label for="floatingSelect">Product type</label>
        </div>
        
        <div class="form-floating">
        <textarea class="form-control" placeholder="Price,Type app..." id="message" name='message' style={{height: '150px'}}  required></textarea>
        <label for="floatingTextarea2">More details</label>
        </div>
        
        <button type='submit' class='btn btn-success mt-3 btn_submit' disabled={isDisabled} >Send</button>
        
        </form>
        )


}

export default ServerlessMail