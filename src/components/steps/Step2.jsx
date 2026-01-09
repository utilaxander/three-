
import React from 'react';

const Step2 = ({ formData, setFormData, errors }) => {
    return (
        <div className="step-container">
            <h2>Step 2: Address Details</h2>

            <div className="form-group">
                <label htmlFor="fullAddress">Full Address</label>
                <input
                    type="text"
                    id="fullAddress"
                    value={formData.fullAddress || ''}
                    onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
                    className={errors.fullAddress ? 'error' : ''}
                    placeholder="123 Main St, Apt 4B"
                />
                {errors.fullAddress && <span className="error-text">{errors.fullAddress}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="postCode">Post Code</label>
                <input
                    type="text"
                    id="postCode"
                    value={formData.postCode || ''}
                    onChange={(e) => setFormData({ ...formData, postCode: e.target.value })}
                    className={errors.postCode ? 'error' : ''}
                    placeholder="SW1A 1AA"
                />
                {errors.postCode && <span className="error-text">{errors.postCode}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="timeOnAddress">Time on Address (Years)</label>
                <input
                    type="number"
                    id="timeOnAddress"
                    value={formData.timeOnAddress || ''}
                    onChange={(e) => setFormData({ ...formData, timeOnAddress: e.target.value })}
                    className={errors.timeOnAddress ? 'error' : ''}
                    placeholder="e.g. 5"
                    min="0"
                />
                {errors.timeOnAddress && <span className="error-text">{errors.timeOnAddress}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="residenceStatus">Residence Status</label>
                <select
                    id="residenceStatus"
                    value={formData.residenceStatus || ''}
                    onChange={(e) => setFormData({ ...formData, residenceStatus: e.target.value })}
                    className={errors.residenceStatus ? 'error' : ''}
                >
                    <option value="">Select Status</option>
                    <option value="Homeowner">Homeowner</option>
                    <option value="Tenant">Tenant</option>
                    <option value="Living with Parents">Living with Parents</option>
                    <option value="Other">Other</option>
                </select>
                {errors.residenceStatus && <span className="error-text">{errors.residenceStatus}</span>}
            </div>
        </div>
    );
};

export default Step2;
