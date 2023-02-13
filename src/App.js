import { useState } from "react";
import "./App.css";
import StepList from "./components/step-list";
import Header from "./components/header";
import StepOne from "./components/step-one";
import StepTwo from "./components/step-two";
import StepThree from "./components/step-three";
import StepFour from "./components/step-four";
import ThankYou from "./components/thank-you";

function App() {
  let [index, setIndex] = useState(0);
  const handleNextStep = () => {
    setIndex(++index);
  };
  const handleBackStep = () => {
    setIndex(--index);
  };
  const changePlan = () => {
    setIndex(1);
  };
  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="aside">
            <StepList index={index > 3 ? 3 : index} />
          </div>
          <div className="main">
            {index < 4 ? (
              <>
                <Header index={index} />
                {index === 0 ? (
                  <StepOne />
                ) : index === 1 ? (
                  <StepTwo />
                ) : index === 2 ? (
                  <StepThree />
                ) : (
                  index === 3 && <StepFour changePlan={changePlan} />
                )}
                {index > 0 && (
                  <button
                    type="button"
                    className="back"
                    onClick={handleBackStep}
                  >
                    Go Back
                  </button>
                )}
                <button
                  type="button"
                  className="next"
                  onClick={() => {
                    handleNextStep();
                  }}
                >
                  {index === 3 ? "Confirm" : "Next Step"}
                </button>
              </>
            ) : (
              <ThankYou />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
