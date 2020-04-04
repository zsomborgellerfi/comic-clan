export const actionTypes = {
    GET_COMICS: 'GET_COMICS',
    COMICS_RECEIVED: 'COMICS_RECEIVED'
}

export const getComics = (searchText) => ({
    type: actionTypes.GET_COMICS,
    payload: searchText
});