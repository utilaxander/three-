export const emailConfig = {
    form1: {
        serviceId: 'service_3jtl9wi',
        templateId: 'template_2yrx0ya',
        publicKey: 'RzOIxQFZN8abF6fsz',
        productId: 'product_1' // Default ID, change as needed
    },
    form2: {
        serviceId: 'service_3jtl9wi',
        templateId: 'template_q5ahy3i',
        publicKey: 'RzOIxQFZN8abF6fsz',
        productId: 'product_2'
    },
    form3: {
        serviceId: 'service_jm10f18',
        templateId: 'template_8ib7am5',
        publicKey: 'TMR23fVdqEG54VQKF',
        productId: 'product_3'
    },
    form4: {
        serviceId: 'service_jm10f18',
        templateId: 'template_ra4m2vl',
        publicKey: 'TMR23fVdqEG54VQKF',
        productId: 'product_4'
    }
};

export const getConfig = (formId) => {
    const key = `form${formId}`;
    return emailConfig[key] || emailConfig.form1; // Default to form1
};
