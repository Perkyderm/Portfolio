import React from "react";
import Me from "../images/me.jpg";
import Bouldering from "../images/BeachScram.jpg";

function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <div className="container aboutme lrgsc sectionstyle">
        <div className="row">
          <div className="col-sm-4">
            <h1 style={{ color: "#2C1C47" }}>About Me!</h1>
          </div>
        </div>

        <section className="row">
          <div className="col-lg-12 thumbnail">
            <img
              src={Me}
              alt="Me"
              style={{
                float: "left",
                marginRight: "10px",
                maxHeight: "50%",
                maxWidth: "50% ",
              }}
            />
            <p>
              Hey there,
              <br />
              Welcome to my about me and portfolio site! I really need to spends
              some time to fill this out....wrting about yourself is tough. In
              the meantime, use the links in the footer to learn about me, both
              professionaly and recreationaly.{" "}
            </p>
            <br />
            <img
              src={Bouldering}
              alt="Climbing in Hawaii"
              style={{
                float: "right",
                height: "200px",
                marginBottom: "40px",
                marginLeft: "5px",
                position: "relative",
                right: "0px",
              }}
            />
            <p>
              commodi quas animi quos ab. Saepe vitae dolorum minus expedita
              animi cupiditate enim, quo ipsa quibusdam voluptas? Voluptate sunt
              quis eligendi nobis quo eos odio labore nostrum quaerat esse?
              Blanditiis et quisquam laborum cum accusamus, i
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
