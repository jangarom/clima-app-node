const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: { 'X-RapidAPI-Key': 'c9cbcba7c9msh4b85c6d2a6ba530p1c931djsnc3a4151e203a' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}