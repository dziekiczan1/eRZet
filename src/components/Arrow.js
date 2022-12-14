import React from "react";

const Arrow = ({ color, props }) => {
  return (
    <>
      <div className="absolute w-[34px] top-[34px] border-b-2 border-orange-100 mt-2"></div>
      <div
        className="text-center bounce absolute cursor-pointer"
        onClick={props}
      >
        <svg width="36px" height="36px" viewBox="0 0 24 24">
          <path
            fill={color}
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          />
        </svg>
      </div>
    </>
  );
};

export default Arrow;
