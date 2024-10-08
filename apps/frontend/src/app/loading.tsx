import React from "react";
import "@/styles/typing-loading.css";

const loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="typewriter">
        <div className="slide">
          <i></i>
        </div>
        <div className="paper"></div>
        <div className="keyboard"></div>
      </div>
    </div>
  );
};

export default loading;
