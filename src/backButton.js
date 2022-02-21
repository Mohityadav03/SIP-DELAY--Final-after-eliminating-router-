import React, { useState } from "react";
import proptypes from "prop-types";
import Navigation from "./navigation";
import SliderComponent from "./slidersComponent";

// Back button + sip delay calculator name heading component
function BackButton(props) {
  const textStyle = {
    fontSize: "2rem",
    fontWeight: "500",
    letterSpacing: "0",
    lineHeight: "1rem",
    Color: "#333333",
  };

  const [backBtn, setBackBtn] = useState(false);

  function handleOnClick() {
    setBackBtn(true);
  }
  return (
    <>
      {backBtn === false && (
        <div className="outer-container " style={{ padding: "1rem 2rem" }}>
          <h1 style={textStyle}>SIP DELAY CALCULATOR</h1>
          <div className="back-btn">
            <button
              onClick={handleOnClick}
              style={{
                textDecoration: "none",
                color: "#333333",
                border: "none",
                background: "none",
              }}
            >
              <i
                className="bi bi-arrow-left-circle"
                style={{ fontSize: "3rem" }}
              ></i>
              <span
                style={{
                  fontSize: "1.8rem",
                  color: "#333333",
                }}
              >
                Back
              </span>
            </button>
          </div>
          <div
            className="container"
            style={{
              boxShadow: "2px  2px 10px 0px rgb(0 0 0/66%)",
              margin: "5rem",
              marginTop: "1rem",
              overflowX: "scroll",
              height: "40rem",
            }}
          >
            {/* Calling Slider Component  */}
            <SliderComponent />
          </div>
        </div>
      )}
      {backBtn === true && (
        <div>
          {/* Calling Home page when back button clicked */}
          <Navigation backBtnState="true" />
        </div>
      )}
    </>
  );
}

// default props
BackButton.propTypes = {
  headingText: proptypes.string,
};

export default BackButton;
