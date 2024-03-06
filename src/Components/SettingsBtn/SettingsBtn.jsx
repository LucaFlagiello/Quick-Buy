import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../state/themeSlice.js";

export default function SettingsBtn () {

  const [settingsOn, setSettingsOn] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  function showSettings() {
    setSettingsOn(prevSettings => !prevSettings);
  }

  return (
    <div className={settingsOn ? "fixed top-[50%] right-[0] rounded-[8px] bg-white z-[99999] p-[14px] shadow-mid-shadow shadow-light-shadow  transform transition-all duration-[.5s]" : "fixed top-[50%] right-[-175px] rounded-[8px] bg-white z-[99999] p-[14px] transform transition-all duration-[.5s]"}>
      <div className="font-Roboto">
        <h3 className="font-medium text-[18px]">Themes settings</h3>
        <h4 className="text-[14px] font-medium  text-light-gray-price">Primary Color</h4>
        <ul className="flex mt-2 gap-x-2">
          <li onClick={() => dispatch(changeTheme('primary-color'))} className={`bg-primary-color rounded-[5px] w-[30px] h-[30px] cursor-pointer hover:transform hover:scale-[1.1] border-0 transition duration-[.2s] ease`}></li>
          <li onClick={() => dispatch(changeTheme('primary-color2'))} className=" bg-primary-color2 rounded-[5px] w-[30px] h-[30px] cursor-pointer hover:transform hover:scale-[1.1] border-0 transition duration-[.2s] ease"></li>
          <li onClick={() => dispatch(changeTheme('primary-color3'))} className="bg-primary-color3  rounded-[5px] w-[30px] h-[30px] cursor-pointer hover:transform hover:scale-[1.1] border-0 transition duration-[.2s] ease"></li>
          <li onClick={() => dispatch(changeTheme('primary-color4'))} className="bg-primary-color4 rounded-[5px] w-[30px] h-[30px] cursor-pointer hover:transform hover:scale-[1.1] border-0 transition duration-[.2s] ease"></li>
        </ul>
      </div>

      <button style={{backgroundColor: theme}} onClick={() => showSettings()} className={`flex absolute top-[15px] left-[-46px] bg-${theme} rounded-[4px]  p-[6px] hover:shadow-lg`}>
        <span className="icon-[la--cog] animate-spin-slow text-white w-[26px] h-[26px]"></span>
      </button>
    </div>
  )
}