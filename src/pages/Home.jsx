import Header from "../components/atoms/Header";
import AboutMe from "../components/atoms/AboutMe";
import Skills from "../components/atoms/Skills";
import Contact from "../components/atoms/Contact";
import Education from "../components/atoms/Education";
import styles from "../assets/styles/Home.css"
const Home = () => {
    return ( 
        <>
         <Header></Header>
        <div className="body">
        <AboutMe></AboutMe>
        <Skills></Skills>
        </div>
      
        {/* <div className="body">
        <Contact></Contact>
        <Education></Education>
        </div> */}
          
        </>
     );
}
 
export default Home;