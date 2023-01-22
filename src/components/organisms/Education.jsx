import styles from "../../assets/styles/Education.css"
import information from "../../data/information";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
const Education = () => {
    return ( 
        <div className="Education">
           <Title>Formacion</Title>
           <Text>{information.Secundaria}</Text>
           <Text>{information.Preparatoria}</Text>
           <Text>{information.Universidad}</Text>

           <Title>{information.ap}</Title>
           <Text>{information.Iniciativa}</Text>
           <Text>{information.Trabajo}</Text>
           <Text>{information.Resolucion}</Text>
           <Text>{information.Comu}</Text>
        </div>
        
     );
}
 
export default Education;