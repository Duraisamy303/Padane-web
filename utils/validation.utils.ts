import * as Yup from 'yup';

export const createLeadValidation = Yup.object().shape({
    name: Yup.string().required('Lead Name is required'),
    lead_owner: Yup.string().required('Lead Manager is required'),
    address: Yup.string().required('Address is required'),
    company_website: Yup.string().required('Website is required'),
    status: Yup.string().required('Status is required'),
    lead_type: Yup.string().required('Lead Type is required'),
    focus_segment: Yup.string().required('Company Segment is required'),
    market_segment: Yup.string().required('Market Segment is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    vertical: Yup.string().required('Vertical is required'),
    assigned_to: Yup.string().required('Assign To is required'),
    contact_name: Yup.string().required('Name is required'),
    email_id: Yup.string().required('Email is required'),
    designation: Yup.string().required('Designation is required'),
    department: Yup.string().required('Department is required'),
    phone_number: Yup.string().required('Phone Number is required'),
    lead_source: Yup.string().required('Source is required'),
    contact_status: Yup.string().required('Contact Status is required'),

});

export const updateLeadValidation = Yup.object().shape({
    name: Yup.string().required('Lead Name is required'),
    lead_owner: Yup.string().required('Lead Manager is required'),
    // company_email: Yup.string().email('Invalid email').required('Email is required'),
    company_website: Yup.string().required('Website is required'),
    // company_number: Yup.string().required('Number is required'),
    department: Yup.string().required('Department is required'),
    status: Yup.string().required('Status is required'),

    lead_type: Yup.string().required('Lead Type is required'),
    // created_by: Yup.string().required('Created By is required'),
    // annual_revenue: Yup.number().nullable().required('Annual Revenue is required').typeError('Annual Revenue must be a number'),
    // tags: Yup.array().min(1, 'At least one tag is required'),
    focus_segment: Yup.string().required('Focus Segment is required'),
    market_segment: Yup.string().required('Market Segment is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    vertical: Yup.string().required('Vertical is required'),
    assigned_to: Yup.string().required('Assign To is required'),
    lead_source: Yup.string().required('Lead Source is required'),
    lead_source_from: Yup.string().required('Lead Source From is required'),
    primary_contact: Yup.object().shape({
        phone_number: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits') // Example validation for phone number
            .required('Phone number is required'),
        email_id: Yup.string()
            .email('Invalid email address') // Validate email format
            .required('Email ID is required'),
    }),
});

export const createOppValidation = Yup.object().shape({
    // lead: Yup.string().required('Lead is required'),
    opp_name: Yup.string().required('Name is required'),
    // lead_manager: Yup.string().required('Lead Manager is required'),
    stage: Yup.string().required('Stage is required'),
    opp_value: Yup.string().required('Opportunity Value is required'),
    opp_value_per_year: Yup.string().required('Recurring Value Per Year is required'),
    // currency_type: Yup.string().required('Currency Type is required'),
    opp_closing_date: Yup.string().required('Closing Date is required'),
    opp_percentage: Yup.string().required('Probability In Percentage is required'),
    contact_name: Yup.string().required('Contact Name is required'),
    email_id: Yup.string().email('Invalid email').required('Email is required'),
    designation: Yup.string().required('Designation is required'),
    department: Yup.string().required('Department is required'),
    phone_number: Yup.string().required('Phone Number is required'),
    lead_source: Yup.string().required('Source is required'),
    contact_status: Yup.string().required('Contact Status is required'),
    // file: Yup.mixed().required('File is required')
    // .test('fileSize', 'File size is too large', (value) => {
    //     return value && value.size <= 2000000;  // 2MB
    // }).test('fileType', 'Unsupported file type', (value) => {
    //     return value && ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'].includes(value.type);
    // }),
});

export const createOppsValidation = Yup.object().shape({
    opp_name: Yup.string().required('Name is required'),
    owner: Yup.string().required('Owner is required'),
    opp_stage: Yup.string().required('Stage is required'),
    opportunity_value: Yup.string().required('Opportunity Value is required'),
    recurring_value_per_year: Yup.string().required('Recurring Value Per Year is required'),
    currency_type: Yup.string().required('Currency Type is required'),
    closing_date: Yup.string().required('Closing Date is required'),
    probability_in_percentage: Yup.string().required('Probability In Percentage is required'),
});

export const createNote = Yup.object().shape({
    note: Yup.string().required('Notes is required'),
});

export const updateLog = Yup.object().shape({
    logStage: Yup.string().required('Log Stage is required'),
});

export const createLog = Yup.object().shape({
    logStage: Yup.string().required('Log Stage is required'),
    focus_segment: Yup.string().required('Focus Segment is required'),
});

export const createContact = Yup.object().shape({
    contact_status: Yup.string().required('Contact status is required'),
    lead_source: Yup.string().required('Lead source is required'),
    source_from: Yup.string().required('Source Details is required'),
    department: Yup.string().required('Department is required'),
    designation: Yup.string().required('Designation is required'),
    phone_number: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
    email_id: Yup.string().required('Email is required').email('Must be a valid email'),
    contact_name: Yup.string().required('Contact name is required'),
    // company_name: Yup.string().required('Company name is required'),

});

export const createNewContact = Yup.object().shape({
    status: Yup.string().required('Contact status is required'),
    lead_source: Yup.string().required('Lead source is required'),
    source_from: Yup.string().required('Source Details is required'),
    department: Yup.string().required('Department is required'),
    designation: Yup.string().required('Designation is required'),
    phone_number: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
    email_id: Yup.string().required('Email is required').email('Must be a valid email'),
    name: Yup.string().required('Contact name is required'),
    lead: Yup.string().when('moveToLead', {
        is: true, // Condition: Check if `is_archive` is true
        then: Yup.string().required('Lead is required'),
        otherwise: Yup.string().nullable(), // Make it optional when condition is not met
    }),
    // company_name: Yup.string().required('Company name is required'),

});

export const createNewContactWithLead = Yup.object().shape({
    status: Yup.string().required('Contact status is required'),
    lead_source: Yup.string().required('Lead source is required'),
    source_from: Yup.string().required('Source Details is required'),
    department: Yup.string().required('Department is required'),
    designation: Yup.string().required('Designation is required'),
    phone_number: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
    email_id: Yup.string().required('Email is required').email('Must be a valid email'),
    name: Yup.string().required('Contact name is required'),
    lead: Yup.string().when('moveToLead', {
        is: true, // Condition: Check if `is_archive` is true
        then: Yup.string().required('Lead is required'),
        otherwise: Yup.string().nullable(), // Make it optional when condition is not met
    }),
    company_name: Yup.string().required('Company name is required'),

    lead_owner: Yup.string().required('Lead Manager is required'),
    address: Yup.string().required('Address is required'),
    company_website: Yup.string().required('Website is required'),
    lead_status: Yup.string().required('Status is required'),
    lead_type: Yup.string().required('Lead Type is required'),
    focus_segment: Yup.string().required('Company Segment is required'),
    market_segment: Yup.string().required('Market Segment is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    vertical: Yup.string().required('Vertical is required'),
    assigned_to: Yup.string().required('Assign To is required'),
  


});


export const createNewContactWithOpp = Yup.object().shape({
    status: Yup.string().required('Contact status is required'),
    lead_source: Yup.string().required('Lead source is required'),
    source_from: Yup.string().required('Source Details is required'),
    department: Yup.string().required('Department is required'),
    designation: Yup.string().required('Designation is required'),
    phone_number: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
    email_id: Yup.string().required('Email is required').email('Must be a valid email'),
    name: Yup.string().required('Contact name is required'),
    // company_name: Yup.string().required('Company name is required'),
    lead: Yup.string().when('moveToLead', {
        is: true, // Condition: Check if `is_archive` is true
        then: Yup.string().required('Lead is required'),
        otherwise: Yup.string().nullable(), // Make it optional when condition is not met
    }),
    opp_name: Yup.string().required('Name is required'),
    opp_value: Yup.string().required('Opportunity value is required'),
    closing_date: Yup.string().required('Closing Date is required'),
    opp_value_per_year: Yup.string().required('Opportunity Value Per Year is required'),
    opp_percentage: Yup.string().required('Opportunity Percentage is required'),
   stage: Yup.string().required('Stage is required'),


});



export const createTask = Yup.object().shape({
    lead: Yup.string().required('Lead is required'),
    contact: Yup.string().required('Contact is required'),
    tasktype: Yup.string().required('Task Type is required'),
    assigned_to: Yup.array()
        .of(
            Yup.object().shape({
                value: Yup.number().required('Value is required'),
                label: Yup.string().required('Label is required'),
            })
        )
        .nullable() // Allow null values
        .min(1, 'At least one assigned member is required')
        .required('Assigned to is required'),
});

export const assignTask = Yup.object().shape({
    assigned_to: Yup.string().required('Select assigned user'),
});

export const createLeadLog = Yup.object().shape({
    log_type: Yup.string().required('Select log type'),
    logStage: Yup.string().required('Select log stage type'),
    // focus_segment: Yup.string().required('Select focus segment'),
    // primary_contact: Yup.string().required('Select primary contact'),
});
export const createLeadsLog = Yup.object().shape({
    assigned_to: Yup.number().required('Select assign user'),
    task_type: Yup.string().required('Select task type'),
    logStage: Yup.string().required('Select log stage type'),
    log_type: Yup.string().required('Select log type'),
    task_assignment: Yup.string().required('Select log type'),
    // focus_segment: Yup.string().required('Select focus segment'),
    // primary_contact: Yup.string().required('Select primary contact'),
});
