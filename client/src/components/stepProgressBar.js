// import React from 'react';
// import '../styles/stepProgressBar.css';

// const StepProgressBar = ({ currentStep }) => {
//   const steps = ['Upload Resume', 'Job Role Result', 'Check Your Skills'];

//   return (
//     <div className="step-progress-bar">
//       {steps.map((step, index) => (
//         <div
//           key={index}
//           className={`step-item ${currentStep === index + 1 ? 'active' : ''}`}
//         >
//           <div className="step-number">{index + 1}</div>
//           <div className="step-label">{step}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StepProgressBar;

import React from 'react';
import '../styles/stepProgressBar.css';

const StepProgressBar = ({ currentStep }) => {
  const steps = ['Upload Resume', 'Job Role Result', 'Check Your Skills'];
  const isStepActive = (index) => currentStep === index + 1;

  return (
    <div className="step-progress-bar">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={`step-item ${isStepActive(index) ? 'active' : ''}`}>
            <div className="step-number">{index + 1}</div>
            <div className="step-label">{step}</div>
          </div>
          {index < steps.length - 1 && (
            <div className={`step-line ${isStepActive(index + 1) ? 'active-line' : ''}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepProgressBar;