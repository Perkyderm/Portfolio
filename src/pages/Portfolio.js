import React from "react";
import Adventureops from "../images/Adventureops.PNG";
import Notetaker from "../images/note-taker.png";
import ReadME from "../images/readmePlaceholder.jpg";
import Tacos from "../images/Tacos.png";
import TimedQuiz from "../images/timedquizss.png";
import Weather from "../images/Weather.png";

function Portfolio() {
  return (
    <div style={{ height: "100vh" }}>
      <section
        className="container lrgscn sectionstyle folio"
        style={{ marginRight: "200px" }}
      >
        {/* title */}
        <div className="row">
          <div className="col-sm-4">
            <h1 style={{ color: "#2C1C47" }}>Project Portfolio</h1>
          </div>
        </div>
        {/* Projects row 1 */}
        <div className="row no-gutters" style={{ padding: "10px" }}>
          {/* project 1.1 */}
          <div className="col-xl-4">
            <div className="card" style={{ width: "18rem" }}>
              <a
                href="https://codingcobrascoding.github.io/CobrasCalorieCounter/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="card-img-top" src={Tacos} alt="Card" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Recipe Finder & Meal Planner</h5>
                <p className="card-text"></p>
                <a
                  href="https://codingcobrascoding.github.io/CobrasCalorieCounter/"
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  The App{" "}
                </a>
                <a
                  href="https://github.com/CodingCobrasCoding/CobrasCalorieCounter"
                  target="_blank"
                  className="card-link"
                  rel="noreferrer"
                >
                  The Repository
                </a>
              </div>
            </div>
          </div>
          <br />
          {/* pr 1.2 */}
          <div className="col-xl-4">
            <div className="card" style={{ width: "18rem" }}>
              <a
                href="https://perkyderm.github.io/WeatherDashboard/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="card-img-top" src={Weather} alt="Card cap" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text"></p>
                <a
                  href="https://perkyderm.github.io/WeatherDashboard/"
                  target="_blank"
                  className="card-link"
                  rel="noreferrer"
                >
                  The App{" "}
                </a>
                <a
                  href="https://github.com/Perkyderm/WeatherDashboard"
                  target="_blank"
                  className="card-link"
                  rel="noreferrer"
                >
                  The Repository
                </a>
              </div>
            </div>
          </div>
          <br />
          {/* pr 1.2 */}
          <div className="col-xl-4">
            <div className="card" style={{ width: "18rem" }}>
              <a
                href="https://perkyderm.github.io/TimedQuiz/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="card-img-top" src={TimedQuiz} alt="Card cap" />
              </a>
              <div className="card-body">
                <h5 className="card-title">Timed Quiz</h5>
                <p className="card-text"></p>
                <a
                  href="https://perkyderm.github.io/TimedQuiz/"
                  target="_blank"
                  className="card-link"
                  rel="noreferrer"
                >
                  The App{" "}
                </a>
                <a
                  href="https://github.com/Perkyderm/TimedQuiz"
                  target="_blank"
                  className="card-link"
                  rel="noreferrer"
                >
                  The Repository
                </a>
              </div>
            </div>
          </div>

          {/* Projects row 2 */}
          <div className="row no-gutters" style={{ padding: "10px" }}>
            {/* pr 2.1 */}
            <div className="col-xl-4">
              <div className="card" style={{ width: "18rem" }}>
                <a
                  href="https://adventureops.herokuapp.com/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="card-img-top"
                    src={Adventureops}
                    alt="Card cap"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Outdoor Recreation Socializer</h5>
                  <p className="card-text"></p>
                  <a
                    href="https://adventureops.herokuapp.com/login"
                    target="_blank"
                    className="card-link"
                    rel="noreferrer"
                  >
                    The App{" "}
                  </a>
                  <a
                    href="https://github.com/Perkyderm/Adventureops"
                    target="_blank"
                    className="card-link"
                    rel="noreferrer"
                  >
                    The Repository
                  </a>
                </div>
              </div>
            </div>
            <br />
            {/* pr 2.2 */}
            <div className="col-xl-4">
              <div className="card" style={{ width: "18rem" }}>
                <a
                  href="https://still-fjord-82931.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="card-img-top"
                    src={Notetaker}
                    alt="Card cap"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Note Taker</h5>
                  <p className="card-text"></p>
                  <a
                    href="https://still-fjord-82931.herokuapp.com/"
                    target="_blank"
                    className="card-link"
                    rel="noreferrer"
                  >
                    The App{" "}
                  </a>
                  <a
                    href="https://github.com/Perkyderm/Note-Taker"
                    target="_blank"
                    className="card-link"
                    rel="noreferrer"
                  >
                    The Repository
                  </a>
                </div>
              </div>
            </div>
            <br />
            {/* pr 2.3 */}
            <div className="col-xl-4">
              <div className="card" style={{ width: "18rem" }}>
                <a
                  href="https://github.com/Perkyderm/READMEGenerator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="card-img-top" src={ReadME} alt="Card cap" />
                </a>
                <div className="card-body">
                  <h5 className="card-title">README Generator</h5>
                  <p className="card-text"></p>
                  <a
                    href="https://github.com/Perkyderm/READMEGenerator"
                    target="_blank"
                    className="card-link"
                    rel="noreferrer"
                  >
                    The App{" "}
                  </a>
                  <a
                    href="https://github.com/Perkyderm/READMEGenerator"
                    target="_blank"
                    className="card-link"
                    rel="noreferrer"
                  >
                    The Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* closing projects */}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
