
document.querySelector('.submit').addEventListener('click', ()=>{
    let data_info
    
    let CITY_NAME = document.querySelector('.input').value;
    getApi();
    if(!CITY_NAME) return

})

function getApi(){
    let API_KEY = 'd7009a0ec2a75fbdc312380c2578e2f7';
    let CITY_NAME = document.querySelector('.input').value;
    let language = 'pt_br'
    if(!CITY_NAME) return console.error('Digite um nome de cidade válido!');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&lang=${language}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => data_info = data)
    .then(data_info => {
        createElement();
        return data_info;
    });
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
    cityT.textContent = data_info.main.temp;
    div.appendChild(cityT);

    let cityW = document.createElement('p');
    cityW.setAttribute('class', 'city-weather');
    cityW.textContent = data_info.weather[0].description;
    div.appendChild(cityW);

    let divMenosInfo = document.createElement('div');
    divMenosInfo.setAttribute('class', 'menos-info');
    div.appendChild(divMenosInfo);

    let minTemp = document.createElement('p');
    minTemp.textContent = `Min. Temp: ${data_info.main.temp_min}`;
    divMenosInfo.appendChild(minTemp);
    
    let maxTemp = document.createElement('p');
    maxTemp.textContent = `max temp: ${data_info.main.temp_max}`;
    divMenosInfo.appendChild(maxTemp);

    let umidade = document.createElement('p');
    umidade.textContent = `úmidade: ${data_info.main.humidity}`;
    divMenosInfo.appendChild(umidade);

    let pressao = document.createElement('p');
    pressao.textContent = `Pressão: ${data_info.main.pressure}`;
    divMenosInfo.appendChild(pressao);

    let divNormal = document.createElement('div');
    divNormal.setAttribute('class', 'normal');
    divNormal.setAttribute('id', 'expandir');
    div.appendChild(divNormal);

    document.getElementById('expandir').addEventListener('click', (e)=> {
        document.querySelector('.cidade').classList.toggle('expandido');
        document.querySelector('.menos-info').classList.toggle('extra-info');
        document.querySelector('.normal').classList.toggle('expandir');
    })

}


/*

*/