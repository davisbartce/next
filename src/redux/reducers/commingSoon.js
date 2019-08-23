import {
    SAVE_SUSCRIBER,
    SAVE_SUSCRIBER_SUCCESS,
    SAVE_SUSCRIBER_FAILURE
} from '../types'

const INIT_STATE = {
    message: 'Welcome',
    users: {}
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case SAVE_SUSCRIBER:
            return { ...state, }

        case SAVE_SUSCRIBER_SUCCESS:
            return { ...state, }

        case SAVE_SUSCRIBER_FAILURE:
            return { ...state, }
        default:
            return { ...state }
    }
}
