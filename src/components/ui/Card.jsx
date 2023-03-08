import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
