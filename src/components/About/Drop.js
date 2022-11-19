import React from "react";
import dropItems from "./DropItems";

const Drop = () => {
  return (
    <>
      {dropItems?.map((drop) => (
        <div key={drop.id} className="w-auto flex justify-center items-center">
          <div
            className={`${drop.bgColor} relative w-[400px] h-[400px] ${drop.boxShadow} ${drop.borderRadius} ${drop.boxShadowAfter} after:absolute ${drop.afterTop} ${drop.afterLeft} ${drop.afterWidth} ${drop.afterHeight} after:rounded-full after:opacity-90 ${drop.boxShadowBefore} before:absolute ${drop.beforeTop} ${drop.beforeLeft} ${drop.beforeWidth} ${drop.beforeHeight} before:rounded-full before:opacity-90 duration-500 ease-in-out hover:rounded-full`}
          >
            <div className="flex justify-center items-center flex-col text-center p-10 gap-4">
              <div
                className={`w-[80px] h-[80px] rounded-full flex justify-center items-center text-2xl ${drop.logoColor} ${drop.logoBoxShadow} mt-4 mb-12`}
              >
                <svg width="34px" height="34px" viewBox="0 0 24 24">
                  <path fill="currentColor" d={drop.svgD} />
                </svg>
              </div>
              <p className="text-white">{drop.content}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Drop;
