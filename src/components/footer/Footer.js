import React from "react";
import Silo from "../../images/climbsilo.png";
function Footer() {
  return (
    <div>
      <footer class="footerstyle">
        <div className="container-fluid" style={{ position: "relative" }}>
          <div style={{ position: "absolute", bottom: "0px" }}>
            <i class="fas fa-envelope-open-text">
              {" "}
              <a
                href="mailto: ncgoedecke@gmail.com"
                target="_blank"
                style={{ color: "#2C1C47" }}
                rel="noreferrer"
              >
                ncgoedecke@gmail.com
              </a>
            </i>
            <br />
            <i class="fas fa-phone-square-alt"> 303-907-9759</i>
          </div>
          <a
            href="https://www.linkedin.com/in/nick-goedeke-823592133/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin linkedIn"></i>
          </a>
          <a
            href="https://github.com/Perkyderm"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github gitHub"></i>
          </a>
          <a
            href="https://www.instagram.com/perkyderm/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-instagram IGlogo"></i>
          </a>

          <p style={{ fontSize: "40px", textAlign: "center" }}>≈♦≈</p>

          <a
            href="https://www.mountainproject.com/user/200485331/nick-g"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Silo} alt="climber" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
