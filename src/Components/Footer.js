import { React } from "react";

function Footer() {
  return (
    <div className="footer-container flex justify-center">
      <p className="footer-content flex align-center">
        Developed with &nbsp;
        <span className="heart">
          {" "}
          <ion-icon name="heart" className="heart"></ion-icon>
        </span>
        &nbsp;© 2023
      </p>
    </div>
  );
}
export default Footer;
