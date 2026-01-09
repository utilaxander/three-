
import React from 'react';

const Step4 = ({ formData }) => {
    return (
        <div className="step-container">
            <h2>Step 4: Review & Submit</h2>

            <div className="review-section">
                <h3>Personal Details</h3>
                <p><strong>Title:</strong> {formData.title}</p>
                <p><strong>Full Name:</strong> {formData.fullName}</p>
                <p><strong>Date of Birth:</strong> {formData.dob}</p>
                <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>
            </div>

            <div className="review-section">
                <h3>Address Details</h3>
                <p><strong>Full Address:</strong> {formData.fullAddress}</p>
                <p><strong>Post Code:</strong> {formData.postCode}</p>
                <p><strong>Time on Address:</strong> {formData.timeOnAddress} years</p>
                <p><strong>Residence Status:</strong> {formData.residenceStatus}</p>
            </div>

            <div className="review-section">
                <h3>Financial Details</h3>
                <p><strong>Bank Name:</strong> {formData.bankName}</p>
                <p><strong>Time with Bank:</strong> {formData.timeWithBank} years</p>
                <p><strong>Sort Code:</strong> {formData.sortCode}</p>
                <p><strong>Account Number:</strong> {formData.accountNumber}</p>
                <div style={{ marginTop: '0.5rem' }}>
                    <p><strong>Name on Card:</strong> {formData.nameOnCard}</p>
                    <p><strong>Card:</strong> **** **** **** {formData.longCardNumber?.slice(-4)}</p>
                    <p><strong>Expiry:</strong> {formData.exp}</p>
                </div>
            </div>

            <div className="confirmation-text">
                <p>Please review your information above before submitting.</p>
            </div>
        </div>
    );
};

export default Step4;
