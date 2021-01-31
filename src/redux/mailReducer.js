const OPEN_SEND_MESSAGE = 'OPEN_SEND_MESSAGE';
const CLOSE_SEND_MESSAGE = 'CLOSE_SEND_MESSAGE';
const SELECT_MAIL = 'SELECT_MAIL';

const initialState = {
    sendMessageIsOpen: false,
    selectedMail: null
}

const mailReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SEND_MESSAGE:
            return {...state, sendMessageIsOpen: true}
        case CLOSE_SEND_MESSAGE:
            return {...state, sendMessageIsOpen: false}
        case SELECT_MAIL:
            return {...state, selectedMail: action.payload}
        default:
            return state;
    }
}

export const openSendMessage = () => ({
    type: OPEN_SEND_MESSAGE
})

export const closeSendMessage = () => ({
    type: CLOSE_SEND_MESSAGE
})

export const selectMail = (payload) => ({
    type: SELECT_MAIL,
    payload
})

export default mailReducer;