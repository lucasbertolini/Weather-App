
let CITY_NAME = document.querySelector('.input');
CITY_NAME.focus()
document.querySelector('.submit').addEventListener('click', (e)=>{
    e.preventDefault();
    let data_info
    if(!CITY_NAME.value) return console.error('Digite um nome de cidade válido!');
    getApi();
    CITY_NAME.value = '';
    CITY_NAME.focus()

})

function getApi(){
    let API_KEY = 'd7009a0ec2a75fbdc312380c2578e2f7';
    let CITY_NAME = document.querySelector('.input').value;
    let language = 'pt_br'
   

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&lang=${language}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => data_info = data)
    .then(data_info => {
        if(data_info.cod == '404')return console.error('Digite um nome válido!!!')
        createElement();
        return data_info
    })
    .catch(err => console.error(err))

}
function createElement(){
    console.log(data_info)
    let div_tempo = document.querySelector('.tempo');
    let div = document.createElement('div');
    div.setAttribute('class','cidade');
    div_tempo.appendChild(div);
  
    //elementos da div
    let cityP = document.createElement('p');
    cityP.setAttribute('id', 'city-name');
    cityP.textContent = data_info.name;
    div.appendChild(cityP);

    let cityT = document.createElement('p');
    cityT.setAttribute('id', 'city-temperature');
    cityT.setAttribute('class', 'city-temp')
    cityT.textContent = parseInt(data_info.main.temp);
    div.appendChild(cityT);

    let cityW = document.createElement('p');
    cityW.setAttribute('class', 'city-weather');
    cityW.textContent = data_info.weather[0].description;
    div.appendChild(cityW);

    let minTemp = document.createElement('p');
    minTemp.textContent = `Min. Temp: ${parseInt(data_info.main.temp_min)}`;
    div.appendChild(minTemp);
    
    let maxTemp = document.createElement('p');
    maxTemp.textContent = `max temp: ${parseInt(data_info.main.temp_max)}`;
    div.appendChild(maxTemp);



}

