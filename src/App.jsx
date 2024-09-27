import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import ProfileSection from "./components/profile/Profile";
import { CardHoverEffectDemo } from "./components/skills/CardHoverEffectDemo";
import { Projects } from "./components/project/Projects";
import Footer from "./components/footer/Footer";
import { cursorJs } from "./components/cursor/cursorJs";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    cursorJs();
  }, []);

  return (
    <div className="appDiv bg-black ">
      <Cursor />
      <Navbar />
      <div id="/">
        <ProfileSection />
      </div>
      <div id="skills">
        <CardHoverEffectDemo />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
