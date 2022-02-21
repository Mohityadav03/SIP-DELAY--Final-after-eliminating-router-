import React, { useState } from "react";
import finance from "./finance.png";
import stepup from "./stepup.png";
import sipdelay from "./sipdelay.png";
import "./homepage.css";
import BackButton from "./backButton";

function Navigation(props) {
  let homePageStyle = {
    margin: "7rem",
    marginLeft: "9rem",
  };

  const [sipDelayClick, setSipDelayClick] = useState(false);

  function onSipDelayClick() {
    setSipDelayClick(true);
  }

  //
  if (props.backBtnState === true) {
    setSipDelayClick(false);
  }

  return (
    <>
      {sipDelayClick === false && (
        <div>
          <div className="wrap">
            <div className="home-page" style={homePageStyle}>
              <div className="horizontal-grouping">
                <div className="card-1">
                  <div className="card-image">
                    <img src={finance} alt="financeImage" />
                  </div>
                  <div className="card-info">
                    <div className="card-name">
                      <a
                        href="/"
                        disabled
                        style={{ pointerEvents: "none", cursor: "default" }}
                      >
                        <h2>SIP Calculator</h2>
                      </a>
                    </div>
                    <div className="card-desc">
                      Future projection of SIP amount with given expected return
                      %
                    </div>
                  </div>
                </div>

                {/* card 2 */}
                <div className="card-2">
                  <div className="card-image">
                    <img src={finance} alt="financeImage" />
                  </div>
                  <div className="card-info">
                    <div className="card-name">
                      <a
                        href="/"
                        disabled
                        style={{ pointerEvents: "none", cursor: "default" }}
                      >
                        <h2>STP Calculator</h2>
                      </a>
                    </div>
                    <div className="card-desc">
                      <p>
                        Back-tested STP Calculation with PDF export to be
                        presented to client
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 3 */}

              <div className="horizontal-grouping">
                <div className="card-3" style={{ margin: "-1rem" }}>
                  <div className="card-image">
                    <img src={finance} alt="financeImage" />
                  </div>
                  <div className="card-info">
                    <div className="card-name">
                      <a
                        href="/"
                        disabled
                        style={{ pointerEvents: "none", cursor: "default" }}
                      >
                        <h2>SWP Calculator</h2>
                      </a>
                    </div>
                    <div className="card-desc">
                      Back-tested SWP Calculation with PDF export to be
                      presented to client.
                    </div>
                  </div>
                </div>

                {/* card 4 */}
                {/* SIP DELAY CALCULATOR  OUR PROJECT */}

                <div className="card-4">
                  <div className="card-image">
                    <img
                      id="small-image-1"
                      src={sipdelay}
                      alt="sipdelayImage"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-name">
                      <button
                        onClick={onSipDelayClick}
                        style={{
                          pointerEvents: "auto",
                          cursor: "default",
                          border: "none",
                          background: "none",
                        }}
                      >
                        <h2>SIP Delay Calculator</h2>
                      </button>
                    </div>
                    <div className="card-desc">
                      Future projection if SIP instalment is delayed
                    </div>
                  </div>
                </div>
              </div>

              {/* 5th */}

              <div className="card-5" style={{ margin: "1.5rem 0rem" }}>
                <div className="card-image">
                  <img id="small-image-2" src={stepup} alt="financeImage" />
                </div>
                <div className="card-info">
                  <div className="card-name">
                    <a
                      href="/"
                      disabled
                      style={{ pointerEvents: "none", cursor: "default" }}
                    >
                      <h2>SIP Step-Up Calculator</h2>
                    </a>
                  </div>
                  <div className="card-desc">
                    Future projection of SIP with yearly increment in yearly
                    amount
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {sipDelayClick === true && (
        <div>
          <BackButton />
        </div>
      )}
    </>
  );
}

Navigation.defaultProps = {
  backBtnState: "notclicked",
};

export default Navigation;
