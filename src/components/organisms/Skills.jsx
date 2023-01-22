import styles from "../../assets/styles/Skills.css"
import Title from "../atoms/Title";
import Graficas from "../../assets/images/Graficas.png"
const Skills = () => {
    return ( 
        <div className="Skills">
            <Title>Habilidades</Title>
            <div className="Graficas">
            <img src={Graficas} alt="Graficas" />
            </div>
           
        </div>
     );
}
 
export default Skills;