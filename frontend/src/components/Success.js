import React, { useEffect } from "react";
import "./Success.css";
  

  const Success = ({ reset }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        reset();
      }, 5000);
      return () => clearTimeout(timer);
    }, [reset]);
  
    return (
      <div className="success-container">
        <h1>Form Submitted Successfully!</h1>
        <p>We will get back to you shortly. Thank you!</p>
        <div className="success-animation">😊 🎉 🥳</div>
      </div>
    );
  };


export default Success;


