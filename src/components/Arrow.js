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
            d="M10,4H14V13L17.5,9.5L19.92,11.92L12,19.84L4.08,11.92L6.5,9.5L10,13V4Z"
          />
        </svg>
      </div>
    </>
  );
};

export default Arrow;
