
import React from 'react';

const Step1 = ({ formData, setFormData, errors }) => {
    return (
        <div className="step-container">
            <h2>Step 1: Personal Details</h2>

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <select
                    id="title"
                    value={formData.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className={errors.title ? 'error' : ''}
                >
                    <option value="">Select Title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
                {errors.title && <span className="error-text">{errors.title}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    value={formData.fullName || ''}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={errors.fullName ? 'error' : ''}
                    placeholder="John Doe"
                />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                    type="text"
                    id="dob"
                    value={formData.dob || ''}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').substring(0, 8);
                        let formatted = value;
                        if (value.length >= 3) {
                            formatted = value.substring(0, 2) + '/' + value.substring(2);
                        }
                        if (value.length >= 5) {
                            formatted = formatted.substring(0, 5) + '/' + formatted.substring(5, 9);
                        }
                        setFormData({ ...formData, dob: formatted });
                    }}
                    className={errors.dob ? 'error' : ''}
                    placeholder="DD/MM/YYYY"
                    maxLength="10"
                    inputMode="numeric"
                />
                {errors.dob && <span className="error-text">{errors.dob}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="maritalStatus">Marital Status</label>
                <select
                    id="maritalStatus"
                    value={formData.maritalStatus || ''}
                    onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
                    className={errors.maritalStatus ? 'error' : ''}
                >
                    <option value="">Select Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                </select>
                {errors.maritalStatus && <span className="error-text">{errors.maritalStatus}</span>}
            </div>
        </div>
    );
};

export default Step1;
