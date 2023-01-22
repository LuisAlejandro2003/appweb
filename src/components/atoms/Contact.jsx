import styles from "../../assets/styles/Contact.css";
import Title from "./Title";
import Email from "../../assets/images/Email.svg";
import Text from "./Text";
import Phone from "../../assets/images/Phone.svg"
import Ubication from "../../assets/images/Vector.svg";
const Contact = () => {
  return (
    <div className="Contact">
      <Title>Contacto</Title>
      <div className="Email">
        <div className="imagen">
        <img src={Email} alt="Email" />
        </div>
        <Text>luisalejandro2003@gmail.com</Text>
      </div>

      <div className="Phone">
        <div className="imagen">
        <img src={Phone} alt="Phone" />
        </div>
        <Text>+52 961 3715046</Text>
      </div>

      <div className="Ubication">
        <div className="imagen">
        <img src={Ubication} alt="Phone" />
        </div>
        <Text>TGZ/Chiapas</Text>
      </div>


    </div>
  );
};

export default Contact;
