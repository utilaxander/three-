
import React from 'react';

const StepIndicator = ({ currentStep, totalSteps }) => {
    return (
        <div className="step-indicator-container">
            {Array.from({ length: totalSteps }).map((_, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isCompleted = stepNumber < currentStep;

                return (
                    <React.Fragment key={index}>
                        <div
                            className={`step-circle ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                        >
                            {isCompleted ? '✓' : stepNumber}
                        </div>
                        {index < totalSteps - 1 && (
                            <div
                                className={`step-line ${isCompleted ? 'completed' : ''}`}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default StepIndicator;
