import React from "react";

const btnWidth = {
  width: "290px",
};

function Details() {
  return (
    <div>
      <div className="container body">
        <div className="container_form">
          <h5>Fill in your Personal Details-</h5>
          <br />
          <form method="post">
            <div className="input_form">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
              />
              <label>Full Name</label>
            </div>
            <div className="input_form">
              <select name="semester">
                <option value="None Selected">--Select Semester--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              <label className="select_label">Semester</label>
            </div>
            <div className="input_form">
              <select name="branch">
                <option value="None Selected">--Select Branch--</option>
                <option value="CS">CS</option>
                <option value="IT">IT</option>
                <option value="ETC">ETC</option>
                <option value="EE">EE</option>
                <option value="EEE">EEE</option>
                <option value="Mech.">Mech.</option>
                <option value="Civil">Civil</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
              </select>
              <label className="select_label">Branch</label>
            </div>
            <div className="input_form">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail Id"
                required
              />
              <label>E-mail Id</label>
            </div>
            <div className="input_form">
              <input
                type="text"
                id="mno"
                name="mno"
                placeholder="Mobile No."
                maxlength="13"
                required
              />
              <label>Mobile No.</label>
            </div>
            <br />
            <div className="btn_box">
              <button
                type="submit"
                className="btn"
                name="submit"
                title="View Terms & Conditions"
                style={btnWidth}
              >
                <span>View Terms & Conditions </span>
                <i className="far fa-file"></i>
              </button>
            </div>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Details;
