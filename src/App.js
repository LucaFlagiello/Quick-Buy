import Home from "./Pages/Home/Home";
import SettingsBtn from "./Components/SettingsBtn/SettingsBtn";


//Tailwind can't process dinamically variables changes, first it needs to see those classes somewhere in source code
const colorVariants = {
  primaryColor: 'hover:bg-primary-color bg-primary-color hover:text-primary-color text-primary-color border-primary-color hover:border-primary-color group-hover:text-primary-color',
  primaryColor2: 'hover:bg-primary-color2 bg-primary-color2 hover:text-primary-color2 text-primary-color2 border-primary-color2 hover:border-primary-color2 group-hover:text-primary-color2',
  primaryColor3: 'hover:bg-primary-color3 bg-primary-color3 hover:text-primary-color3 text-primary-color3 border-primary-color3 hover:border-primary-color3 group-hover:text-primary-colo3',
  primaryColor4: 'hover:bg-primary-color4 bg-primary-color4 hover:text-primary-color4 text-primary-color4 border-primary-color4 hover:border-primary-color4 group-hover:text-primary-color4',
}

function App() {
  return (
    <div className="App">
      <Home />
      <SettingsBtn />
    </div>
  );
}

export default App;
