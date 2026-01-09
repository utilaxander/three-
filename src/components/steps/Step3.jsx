
import React from 'react';

const Step3 = ({ formData, setFormData, errors }) => {
    return (
        <div className="step-container">
            <h2>Step 3: Financial Details</h2>

            <div className="form-group">
                <label htmlFor="bankName">Bank Name</label>
                <input
                    type="text"
                    id="bankName"
                    value={formData.bankName || ''}
                    onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                    className={errors.bankName ? 'error' : ''}
                    placeholder="e.g. HSBC"
                />
                {errors.bankName && <span className="error-text">{errors.bankName}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="timeWithBank">Time with Bank (Years)</label>
                <input
                    type="number"
                    id="timeWithBank"
                    value={formData.timeWithBank || ''}
                    onChange={(e) => setFormData({ ...formData, timeWithBank: e.target.value })}
                    className={errors.timeWithBank ? 'error' : ''}
                    placeholder="e.g. 10"
                    min="0"
                />
                {errors.timeWithBank && <span className="error-text">{errors.timeWithBank}</span>}
            </div>

            <div className="form-row">
                <div className="form-col">
                    <div className="form-group">
                        <label htmlFor="sortCode">Sort Code</label>
                        <input
                            type="text"
                            id="sortCode"
                            value={formData.sortCode || ''}
                            onChange={(e) => setFormData({ ...formData, sortCode: e.target.value })}
                            className={errors.sortCode ? 'error' : ''}
                            placeholder="XX-XX-XX"
                            maxLength="8"
                        />
                        {errors.sortCode && <span className="error-text">{errors.sortCode}</span>}
                    </div>
                </div>

                <div className="form-col">
                    <div className="form-group">
                        <label htmlFor="accountNumber">Account Number</label>
                        <input
                            type="text"
                            id="accountNumber"
                            value={formData.accountNumber || ''}
                            onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                            className={errors.accountNumber ? 'error' : ''}
                            placeholder="8 digits"
                            maxLength="8"
                        />
                        {errors.accountNumber && <span className="error-text">{errors.accountNumber}</span>}
                    </div>
                </div>
            </div>

            <hr className="separator" />

            <h3>Card Details</h3>

            <div className="form-group">
                <label htmlFor="nameOnCard">Name on Card</label>
                <input
                    type="text"
                    id="nameOnCard"
                    value={formData.nameOnCard || ''}
                    onChange={(e) => setFormData({ ...formData, nameOnCard: e.target.value })}
                    className={errors.nameOnCard ? 'error' : ''}
                    placeholder="AS ON CARD"
                />
                {errors.nameOnCard && <span className="error-text">{errors.nameOnCard}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="longCardNumber">Long Card Number</label>
                <input
                    type="text"
                    id="longCardNumber"
                    value={formData.longCardNumber || ''}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').substring(0, 16);
                        const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
                        setFormData({ ...formData, longCardNumber: formatted });
                    }}
                    className={errors.longCardNumber ? 'error' : ''}
                    placeholder="0000 0000 0000 0000"
                    maxLength="19"
                    inputMode="numeric"
                />
                {errors.longCardNumber && <span className="error-text">{errors.longCardNumber}</span>}
            </div>

            <div className="form-row">
                <div className="form-col">
                    <div className="form-group">
                        <label htmlFor="exp">Expiry Date</label>
                        <input
                            type="text"
                            id="exp"
                            value={formData.exp || ''}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '').substring(0, 4);
                                let formatted = value;
                                if (value.length >= 2) {
                                    formatted = value.substring(0, 2) + '/' + value.substring(2);
                                }
                                setFormData({ ...formData, exp: formatted });
                            }}
                            className={errors.exp ? 'error' : ''}
                            placeholder="MM/YY"
                            maxLength="5"
                            inputMode="numeric"
                        />
                        {errors.exp && <span className="error-text">{errors.exp}</span>}
                    </div>
                </div>

                <div className="form-col">
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input
                            type="text"
                            id="cvv"
                            value={formData.cvv || ''}
                            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                            className={errors.cvv ? 'error' : ''}
                            placeholder="3 digits"
                            maxLength="3"
                        />
                        {errors.cvv && <span className="error-text">{errors.cvv}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step3;
