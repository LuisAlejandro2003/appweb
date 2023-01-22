import styles from "../../assets/styles/Header.css";
import Me from "../../assets/images/Me.svg";
import information from "../../data/information.js";
const Header = () => {
  return (
    <div className="header">
      <div className="imagen">
        <img src={Me} className="Circle" alt="me" />
      </div>
      <div className="Text">
        <div className="name">
          <h1 className="title">{information.Nombre}</h1>
        </div>
        <div className="profesion">
          <p>{information.Profesion}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
