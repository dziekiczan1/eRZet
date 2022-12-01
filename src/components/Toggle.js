import { useState } from "react";

const Toggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex flex-row items-center justify-center overflow-hidden">
      <label class="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={enabled}
          readOnly
        />
        <div
          onClick={() => {
            setEnabled(!enabled);
          }}
          className="w-10 h-4 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"
        ></div>
      </label>
    </div>
  );
};

export default Toggle;
