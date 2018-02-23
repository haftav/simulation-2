let initialState = {
    propName: '',
    propDescription: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    image: '',
    loanAmount: 0,
    monthlyMortgage: 0,
    desiredRent: 0,
    user: {}
}

const UPDATE_PROP_NAME = "UPDATE_PROP_NAME";
const UPDATE_PROP_DESCRIPTION = "UPDATE_PROP_DESCRIPTION";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGE = "UPDATE_IMAGE";
const UPDATE_LOAN_AMOUNT = "UPDATE_LOAN_AMOUNT";
const UPDATE_MONTHLY_MORTGAGE = "UPDATE_MONTHLY_MORTGAGE";
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";
const UPDATE_USER = "UPDATE_USER";

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROP_NAME:
            return Object.assign({}, state, { propName: action.payload })
        case UPDATE_PROP_DESCRIPTION:
            return Object.assign({}, state, { propDescription: action.payload })
        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: action.payload })
        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload })        
        case UPDATE_STATE:
            return Object.assign({}, state, { state: action.payload })
        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: action.payload })
        case UPDATE_IMAGE:
            return Object.assign({}, state, { image: action.payload })
        case UPDATE_LOAN_AMOUNT:
            return Object.assign({}, state, { loanAmount: action.payload })
        case UPDATE_MONTHLY_MORTGAGE:
            return Object.assign({}, state, { monthlyMortgage: action.payload })
        case UPDATE_DESIRED_RENT:
            return Object.assign({}, state, { desiredRent: action.payload })
        case UPDATE_USER:
            return Object.assign({}, state, { user: Object.assign({}, action.payload) })
        default: return state;
    }
}

export function updatePropName(name) {
    return {
        type: UPDATE_PROP_NAME,
        payload: name
    }
}

export function updatePropDescription(description) {
    return {
        type: UPDATE_PROP_DESCRIPTION,
        payload: description
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImage(image) {
    return {
        type: UPDATE_IMAGE,
        payload: image
    }
}

export function updateLoanAmount(loan) {
    return {
        type: UPDATE_LOAN_AMOUNT,
        payload: loan
    }
}

export function updateMonthlyMortgage(mortgage) {
    return {
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: mortgage
    }
}

export function updateDesiredRent(rent) {
    return {
        type: UPDATE_DESIRED_RENT,
        payload: rent
    }
}

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}