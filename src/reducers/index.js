import { actionTypes } from '../actions'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_COMICS:
            return { ...state, comics: [], loading: true, comicsFetched: false };
        case actionTypes.COMICS_RECEIVED:
            return { ...state, comics: action.payload, loading: false, comicsFetched: true }
        default:
            return state;
    }
};
export default reducer;