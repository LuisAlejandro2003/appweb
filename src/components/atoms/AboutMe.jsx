import styles from "../../assets/styles/AboutMe.css"
import information from "../../data/information.js";
const AboutMe = () => {
    return ( 
        <div className="aboutMe">
          <h1>Sobre mi</h1>
          <p>{information.AboutMeText}</p>
        </div>
     );
}
 
export default AboutMe;