let data_info

document.querySelector('.submit').addEventListener('click', (e)=>{
    e.preventDefault();

    let CITY_NAME = document.querySelector('#input').value;
   
    getApi();
    if(!CITY_NAME) return
    createElement();

    console.log(data_info)


    //criação dos elementos HTML



    
})

function getApi(){
    let API_KEY = 'd7009a0ec2a75fbdc312380c2578e2f7';
    let CITY_NAME = document.querySelector('#input').value;
    if(!CITY_NAME) return console.error('Digite um nome de cidade válido!');;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => data_info = data)
    .catch(error => console.log(error));
    return data_info, CITY_NAME
}
function createElement(){
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
    cityT.textContent = data_info.main.temp;
    div.appendChild(cityT);

    let cityW = document.createElement('p');
    cityW.setAttribute('class', 'city-weather');
    cityW.textContent = data_info.weather[0].main;
    div.appendChild(cityW);
}