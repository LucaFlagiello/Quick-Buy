import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../state/themeSlice.js";

export default function SettingsBtn () {

  const [settingsOn, setSettingsOn] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.value);

  function showSettings() {
    setSettingsOn(prevSettings => !prevSettings);
  }

  return (
    <div className={settingsOn ? "fixed top-[50%] right-[0] rounded-[8px] bg-white z-[99999] p-[14px] shadow-mid-shadow transform transition-all duration-[.5s]" : "fixed top-[50%] right-[-175px] rounded-[8px] bg-white z-[99999] p-[14px] shadow-light-shadow transform transition-all duration-[.5s]"}>
      <div className="font-Roboto">
        <h3 className="font-medium text-[18px]">Themes settings</h3>
        <h4 className="text-[14px] font-medium  text-light-gray-price">Primary Color</h4>
        <ul className="flex gap-x-2 mt-2">
          <li onClick={() => dispatch(changeTheme('primary-color'))} className={`bg-primary-color rounded-[5px] w-[30px] h-[30px] cursor-pointer hover:transform hover:scale-[1.1] border-0 transition duration-[.2s] ease`}></li>
          <li onClick={() => dispatch(changeTheme('primary-color2'))} className=" bg-primary-color2 rounded-[5px] w-[30px] h-[30px] cursor-pointer hover:transform hover:scale-[1.1] border-0 transition duration-[.2s] ease"></li>
          <li onClick={() => dispatch(changeTheme('primary-color3'))} className="bg-primary-color3  rounded-[5px] w-[30px] h-[30px] cursor-pointer hover:transform hover:scale-[1.1] border-0 transition duration-[.2s] ease"></li>
          <li onClick={() => dispatch(changeTheme('primary-color4'))} className="bg-primary-color4 rounded-[5px] w-[30px] h-[30px] cursor-pointer hover:transform hover:scale-[1.1] border-0 transition duration-[.2s] ease"></li>
        </ul>
      </div>

      <button style={{backgroundColor: theme}} onClick={() => showSettings()} className={`absolute top-[15px] left-[-43px] bg-${theme} rounded-[4px]  p-[6px] hover:shadow-lg`}>
      <svg className="animate-spin-slow" xmlns="http://www.w3.org/2000/svg"  height="1.4em" viewBox="0 0 32 32"><path fill="white" d="m13.188 3l-.157.813l-.594 2.968a9.939 9.939 0 0 0-2.593 1.532l-2.906-1l-.782-.25l-.406.718l-2 3.438l-.406.719l.594.53l2.25 1.97C6.104 14.948 6 15.46 6 16s.105 1.05.188 1.563l-2.25 1.968l-.594.532l.406.718l2 3.438l.406.718l.782-.25l2.906-1a9.939 9.939 0 0 0 2.594 1.532l.593 2.968l.156.813h5.626l.156-.813l.593-2.968a9.939 9.939 0 0 0 2.594-1.532l2.907 1l.78.25l.407-.718l2-3.438l.406-.718l-.593-.532l-2.25-1.968C25.895 17.05 26 16.538 26 16c0-.54-.105-1.05-.188-1.563l2.25-1.968l.594-.531l-.406-.72l-2-3.437l-.406-.718l-.782.25l-2.906 1a9.939 9.939 0 0 0-2.593-1.532l-.594-2.968L18.812 3zm1.624 2h2.376l.5 2.594l.125.593l.562.188a8.017 8.017 0 0 1 3.031 1.75l.438.406l.562-.187l2.532-.875l1.187 2.031l-2 1.781l-.469.375l.157.594c.128.57.187 1.152.187 1.75c0 .598-.059 1.18-.188 1.75l-.125.594l.438.375l2 1.781l-1.188 2.031l-2.53-.875l-.563-.187l-.438.406a8.017 8.017 0 0 1-3.031 1.75l-.563.188l-.125.593l-.5 2.594h-2.375l-.5-2.594l-.124-.593l-.563-.188a8.017 8.017 0 0 1-3.031-1.75l-.438-.406l-.562.187l-2.531.875L5.875 20.5l2-1.781l.469-.375l-.156-.594A7.901 7.901 0 0 1 8 16c0-.598.059-1.18.188-1.75l.156-.594l-.469-.375l-2-1.781l1.188-2.031l2.53.875l.563.187l.438-.406a8.017 8.017 0 0 1 3.031-1.75l.563-.188l.124-.593zM16 11c-2.75 0-5 2.25-5 5s2.25 5 5 5s5-2.25 5-5s-2.25-5-5-5m0 2c1.668 0 3 1.332 3 3s-1.332 3-3 3s-3-1.332-3-3s1.332-3 3-3"/></svg>
      </button>
    </div>
  )
}