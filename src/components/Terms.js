import React from "react";

const spanStyling = {
  textDecoration: "underline",
  cursor: "pointer",
};

function Terms() {
  return (
    <div>
      <div className="container body">
        <div className="container_form">
          <form method="post">
            <div>
              <input type="checkbox" name="tandc" required />
              &nbsp;I agree to the&nbsp;
              <span id="show_terms" style={spanStyling} onclick="flag=1;">
                Terms & Conditions&nbsp;
                <i id="arrow" className="fas fa-caret-up"></i>
              </span>
            </div>
            <br />
            <div id="terms" className="input_form menu">
              <ul>
                <li>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </li>
                <li>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </li>
                <li>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </li>
                <li>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </li>
              </ul>
            </div>
            <br />
            <div className="btn_box">
              <button
                type="submit"
                className="btn"
                name="submit_test"
                title="Begin Your Test"
              >
                <span>Begin Test </span>
                <i className="fas fa-arrow-right"></i>
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

export default Terms;
