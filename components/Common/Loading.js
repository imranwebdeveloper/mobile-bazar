import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div
        class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
