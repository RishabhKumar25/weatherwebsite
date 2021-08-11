const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name')
const cityName = document.getElementById('cityName')
const temp_status = document.getElementById('temp_status')
const temp_rel_val = document.getElementById('temp_rel_val')

const dataHide = document.querySelector('.middle_layer')


const getInfo = async(event)=>{
    event.preventDefault();
    let cityval = cityName.value;

   
    
    if(cityval===""){
        city_name.innerText = "Plz write the city name";
        dataHide.classList.add('data_hide');
        
    }else{

        try{

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=2649fbe8a64c0e24a2d577d7779c9db8`;
            const respone = await fetch(url);
            const data = await respone.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_rel_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            

        //     const tempMood = arrData[0].weather[0].main;
            
        //     if(tempMood == "Clear"){
        //         temp_status.innerHtml = "<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>";
        //     }

        //    else if(tempMood == "Clouds"){
        //         temp_status.innerHtml = "<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'></i>";
        //     }

        //     if(tempMood == "Rain"){
        //         temp_status.innerHtml = "<i class = 'fas fa-cloud-rain' style = 'color:#a4b0be;'></i>";
        //     }

        //  else{
        //         temp_status.innerHtml = "<i class = 'fas fa-sun' style = 'color:#f1f2f6;'></i>"
        //     }

            dataHide.classList.remove('data_hide');


        }catch{
            city_name.innerText = "Plz write the city name";
            dataHide.classList.add('data_hide');
        
        }

      


    }
}


submitBtn.addEventListener('click',getInfo);



const curDate = document.getElementById("date");
const curDay = document.getElementById("day");


var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var day = days[d.getDay()];
var hr = d.getHours();
var min = d.getMinutes();
if (min < 10) {
min = "0" + min;
}
var ampm = "am";
if( hr > 12 ) {
hr -= 12;
ampm = "pm";
}
var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();

curDate.innerHTML =  date + " " + month ;

curDay.innerHTML =day ;