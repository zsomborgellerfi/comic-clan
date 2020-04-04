import _ from 'lodash';
export const comicsFilterKeys = ['year', 'owner', 'writer', 'artist', 'random'];

export const getFilteredComics = comics => {
    const comicsGroupByKeys = {};
    comicsFilterKeys.forEach(key => {
        if (key === "random") {
            comicsGroupByKeys[key] = _.shuffle(comics);
        } else {
            comicsGroupByKeys[key] = _.groupBy(comics, comic => comic[key]);
        }
    });
    return comicsGroupByKeys;
};
