import Header from "../components/atoms/Header";
import AboutMe from "../components/atoms/AboutMe";
import Skills from "../components/atoms/Skills";
import Contact from "../components/atoms/Contact";
import Education from "../components/atoms/Education";
import styles from "../assets/styles/Home.css";
const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="home">
        <div className="left">
         
          <AboutMe></AboutMe>
          <Contact></Contact>
        </div>
        <div className="right">
          <Skills></Skills>
          <Education></Education>
        </div>
      </div>
    </>
  );
};

export default Home;
