import React, { useEffect } from 'react'
import { useContext } from 'react';
import MyContext from '../context/context';

const GoToBtn = () => {

    useEffect(()=>{
        // Get the button
        var goUpButton = document.getElementById("goUpBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                goUpButton.classList.add("visible");
                goUpButton.classList.remove("hidden");
            } else {
                goUpButton.classList.add("hidden");
                goUpButton.classList.remove("visible");
            }
        };

    },[])
      // Scroll to the top of the document when the button is clicked
      function goUp() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

  return (
    <div>
        <button id="goUpBtn" onClick={goUp} style={{}}>
        <i class="fas fa-chevron-up"></i>
        </button>
    </div>
  )
}

export default GoToBtn