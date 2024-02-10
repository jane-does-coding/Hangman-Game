import React from "react";
import Text from "../components/HomePageText/Text";
import SkillsSlider from "../components/SkillsSlider/SkillsSlider";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";

const HomePage = () => {
  return (
    <div>
      <div class="topline"></div>

      <Text />
      <SkillsSlider />
      <br />
      <Projects />
      <br />
      <br />
      {/*  <About />
      <br />
      <br /> */}
    </div>
  );
};

export default HomePage;
