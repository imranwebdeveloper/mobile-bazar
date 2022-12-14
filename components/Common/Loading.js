import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div
        className="animate-spin inline-block w-12 h-12  border-4 rounded-full text-blue-600"
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default Loading;
