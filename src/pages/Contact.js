import React from "react";

function Contact() {
  return (
    <div style={{ height: "100vh" }}>
      <section className="container message lrgsc sectionstyle">
        <div className="row">
          <div className="col-xs-4">
            <h1 style={{ color: "#2C1C47" }}>Send a Message</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="mb-3">
              <label for="name" className="form-label">
                Name:
              </label>
              <input type="text" className="form-control" id="name"></input>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address:
              </label>
              <input type="email" className="form-control" id="email"></input>
            </div>
            <div className="mb-3">
              <label for="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <div className="row">
              <div className="col-sm-3 mb-3">
                <button type="button" className="btn buttonstylez">
                  Send!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
