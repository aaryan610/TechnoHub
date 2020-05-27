import React from "react";

const btnWidth = {
  width: "200px",
};

const topRight = {
  borderTopRightRadius: "0px",
};

const botRight = {
  borderBottomRightRadius: "0px",
};

const topLeft = {
  borderTopLeftRadius: "0px",
};

const botLeft = {
  borderBottomLeftRadius: "0px",
};

function Test() {
  return (
    <div>
      <div class="container body">
        <div class="timer_container">
          <div id="timer">
            <div class="box mins">
              <div id="min_value" class="value" style={topRight}></div>
              <div class="text" style={botRight}>
                Minute(s)
              </div>
            </div>
            <div class="box secs">
              <div id="sec_value" class="value" style={topLeft}></div>
              <div class="text" style={botLeft}>
                Second(s)
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="container_form">
          <form id="quiz" action="result.php" method="post">
            <div>
              <div class="input_form">
                <input value="Are you ready?" disabled />
                <label>Question 1.</label>
              </div>
              <br />
              <div class="options">
                <input type="radio" name="q1" value="blank" checked hidden />
                <input type="radio" name="q1" value="Yes" />
                &nbsp;&nbsp;Yes
                <br />
                <input type="radio" name="q1" value="No" />
                &nbsp;&nbsp;No
                <br />
                <input type="radio" name="q1" value="Not sure" />
                &nbsp;&nbsp;Not sure
                <br />
                <input type="radio" name="q1" value="Maybe" />
                &nbsp;&nbsp;Maybe
                <br />
              </div>
            </div>
            <br />
            <div>
              <div class="input_form">
                <input value="Are you ready?" disabled />
                <label>Question 2.</label>
              </div>
              <br />
              <div class="options">
                <input type="radio" name="q2" value="blank" checked hidden />
                <input type="radio" name="q2" value="Yes" />
                &nbsp;&nbsp;Yes
                <br />
                <input type="radio" name="q2" value="No" />
                &nbsp;&nbsp;No
                <br />
                <input type="radio" name="q2" value="Not sure" />
                &nbsp;&nbsp;Not sure
                <br />
                <input type="radio" name="q2" value="Maybe" />
                &nbsp;&nbsp;Maybe
                <br />
              </div>
            </div>
            <br />
            <div>
              <div class="input_form">
                <input value="Are you ready?" disabled />
                <label>Question 3.</label>
              </div>
              <br />
              <div class="options">
                <input type="radio" name="q3" value="blank" checked hidden />
                <input type="radio" name="q3" value="Yes" />
                &nbsp;&nbsp;Yes
                <br />
                <input type="radio" name="q3" value="No" />
                &nbsp;&nbsp;No
                <br />
                <input type="radio" name="q3" value="Not sure" />
                &nbsp;&nbsp;Not sure
                <br />
                <input type="radio" name="q3" value="Maybe" />
                &nbsp;&nbsp;Maybe
                <br />
              </div>
            </div>
          </form>
          <br />
          <div class="btn_box">
            <button
              type="submit"
              class="btn"
              onclick="if(confirm('Are you sure you want to submit the test?')) { submit_form(); }"
              title="Submit Your Test"
              style={btnWidth}
            >
              <span>Submit Test </span>
              <i class="fas fa-check"></i>
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Test;
