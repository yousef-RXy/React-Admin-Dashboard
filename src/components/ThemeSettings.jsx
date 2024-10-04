import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484b52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:bg-light-gray hover:dop-shadow-xl "
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="mt-4">
            <input
              name="theme"
              type="radio"
              id="light"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            <label htmlFor="light" className="cursor-pointer ml-2 text-md">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              name="theme"
              type="radio"
              id="dark"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === 'Dark'}
            />
            <label htmlFor="dark" className="cursor-pointer ml-2 text-md">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((color, index) => (
              <TooltipComponent
                key={index}
                content={color.name}
                position="TopCenter"
              >
                <button
                  type="button"
                  onClick={setColor}
                  value={color.color}
                  style={{ backgroundColor: color.color }}
                  className="flex justify-center items-center  w-10 h-10 rounded-full border-2 border-transparent hover:border-gray-500"
                >
                  <BsCheck
                    className={`text-2xl text-white ${
                      color.color === currentColor ? 'block' : 'hidden'
                    }`}
                  />
                </button>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
