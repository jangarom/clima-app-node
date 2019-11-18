const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(39.400002, 3.250000)
//     .then(console.log)
//     .catch(console.log)

const getinfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${temp}.`;
    } catch (error) {
        return `No se puede obtener el clima de ${direccion}`;
    }



    //salida
    //El clima de XXXXX es de XX
    // No se pudo determinar el clima de XXXXX
}

getinfo(argv.direccion)
    .then(console.log)
    .catch(console.log)


// const encodedUrl = encodeURI(argv.direccion);
// console.log(encodedUrl);
// //configurar los headers del axios
// axios({
//         "method": "GET",
//         "url": "https://12devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
//         "headers": {
//             "content-type": "application/octet-stream",
//             "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
//             "x-rapidapi-key": "c9cbcba7c9msh4b85c6d2a6ba530p1c931djsnc3a4151e203a"
//         },
//         "params": {
//             "location": argv.direccion
//         }
//     })
//     .then((response) => {
//         console.log(response.data.Results[0])
//     })
//     .catch((error) => {
//         console.log('ERROR' + error)
//     })