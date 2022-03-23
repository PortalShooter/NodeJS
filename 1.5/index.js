// const http = require('http');

// const url = `http://api.weatherstack.com/current?${process.env.myAPIKey}&New York`
    
// http.get(url, (res) => {
//     console.log(res);
// })

const axios = require('axios');
const rl = require('readline');
const input = rl.createInterface(process.stdin, process.stdout);

console.log('Введите название города');

input.on('line', (line) => {

    const params = {
        access_key: process.env.myAPIKey,
        query: line,
    }

    axios.get('http://api.weatherstack.com/current', {params})
    .then(response => {
        const apiResponse = response.data;
        if(apiResponse.error) throw new Error(apiResponse.error.code) 
        console.log('Температура', apiResponse.current.temperature+'℃');
        console.log('Скорость ветра', apiResponse.current.wind_speed+'м/с');
    })
    .catch(error => {
        console.log('Код ошибки' ,error);
    })
    .finally(() => input.close());
})


