const submitbtn = document.querySelector('#submit')
const city_name = document.querySelector('#weathername')
const info = document.querySelector('.city_name')
const temp_status=document.querySelector('#temp_status')

const getInfo = async(event) => {
    event.preventDefault();
    var cityname = city_name.value;
    if (cityname == "") {
        
        info.innerText=`plz insert cityname`
    }
    else {

        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=30ea91ed86096dc40cb38c6637c75f08`;
    
            const response = await fetch(url);
            const data = await response.json();
            
            const arrData = [data];

            document.getElementById('temp').innerHTML = `${arrData[0].main.temp}`
            info.innerHTML = `${arrData[0].name}/${arrData[0].sys.country}`  
            var tempmood = `${arrData[0].weather[0].main}`;
            
            
            if (tempmood =="Clear")
            {
                temp_status.innerHTML=`<i class="fas fa-sun" style="color:yellow"></i>`
            }
           else if (tempmood =="Haze")
            {
                temp_status.innerHTML=`<i class="fas fa-smog" style="color:white"></i>`
            }
            else if (tempmood =="Rain")
            {
                temp_status.innerHTML=`<i class="fas fa-cloud-rain" style="color:blue"></i>`
            }
            else
            {
                temp_status.innerHTML=`<i class="fas fa-cloud" style="color:blue"></i>`
            }
            document.getElementById('weatherform').reset();
        }
        catch {
            info.innerText = `plz insert cityname properly`
            document.querySelector('#temp').innerHTML = "";
            document.querySelector('#temp_status').innerHTML = "";
            document.querySelector('#weathername').value = "";
           

        }
        
    
    }

    
}

submitbtn.addEventListener('click', getInfo)

