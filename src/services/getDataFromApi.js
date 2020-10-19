const getDataFromApi = () => {
    // URL pensando en que partimos del directorio Public
    return fetch('./data.json')
    .then(response => response.json())
    .then(data => {
       return data.games;
    });
};

export default getDataFromApi;