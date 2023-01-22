import styles from "../../assets/styles/Header.css";
import Me from "../../assets/images/Me.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="imagen">
        <img src={Me} className="Circle" alt="me" />
      </div>
      <div className="Text">
        <div className="name">
          <h1>Luis Alejandro Martinez Montoya</h1>
        </div>
        <div className="profesion">
          <p>Ingeniero en desarrollo de software</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
