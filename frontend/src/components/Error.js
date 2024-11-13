import React, { useEffect } from "react";
import "./Error.css";

const Error = ({ reset }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      reset();
    }, 5000);
    return () => clearTimeout(timer);
  }, [reset]);

  return (
    <div className="error-container">
      <h1>Oops! Something went wrong.</h1>
      <p>Error submitting data. Please try again later.</p>
      <div className="error-animation">😢 🔄</div>
    </div>
  );
};

export default Error;
