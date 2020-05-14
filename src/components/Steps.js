import React from "react";

const btnWidth = {
  width: "290px",
};

export const StepsDetails = () => (
  <div>
    <div className="container flex_container">
      <div id="steps">
        <div className="step1 current">
          <span>Step 1</span>
          <br />
          <span className="step_title">Personal details </span>
          <i className="fas fa-info-circle"></i>
        </div>
        <div className="step2 next">
          <span>Step 2</span>
          <br />
          <span className="step_title">Terms & Conditions</span>
          <i className="fas fa-angle-double-right"></i>
        </div>
        <div className="step3 next">
          <span>Step 3</span>
          <br />
          <span className="step_title">Aptitude Test</span>
          <i className="fas fa-angle-double-right"></i>
        </div>
      </div>
    </div>
    <br />
  </div>
);

export const StepsTerms = () => (
  <div>
    <div className="container flex_container">
      <div id="steps">
        <div className="step1 next">
          <span>Step 1</span>
          <br />
          <span className="step_title">Personal details</span>
          <i className="fas fa-check"></i>
        </div>
        <div className="step2 current">
          <span>Step 2</span>
          <br />
          <span className="step_title">Terms & Conditions </span>
          <i className="far fa-file"></i>
        </div>
        <div className="step3 next">
          <span>Step 3</span>
          <br />
          <span className="step_title">Aptitude Test</span>
          <i className="fas fa-angle-double-right"></i>
        </div>
      </div>
    </div>
    <br />
  </div>
);

export const StepsTest = () => (
  <div>
    <div class="container flex_container">
      <div id="steps">
        <div class="step1 next">
          <span>Step 1</span>
          <br />
          <span class="step_title">Personal details</span>
          <i class="fas fa-check"></i>
        </div>
        <div class="step2 next">
          <span>Step 2</span>
          <br />
          <span class="step_title">Terms & Conditions</span>
          <i class="fas fa-check"></i>
        </div>
        <div class="step3 current">
          <span>Step 3</span>
          <br />
          <span class="step_title">Aptitude Test </span>
          <i class="far fa-clock"></i>
        </div>
      </div>
    </div>
    <br />
  </div>
);
