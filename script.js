'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//render error show in ui

const render_error=(message)=>{
  countriesContainer.insertAdjacentText("beforeend",message);
  countriesContainer.style.opacity=1;
}

//rendercountry
const render_country=(data)=>{
  const html=`
      <article class="country">
            <p class="pin"></p>
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${data.population}</p>
              <p class="country__row"><span>🗣️</span>${data.languages[0].name}
              <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
          </article>` 
  
          //insert into ui
          countriesContainer.insertAdjacentHTML("beforeend",html)
          countriesContainer.style.opacity=1;
}

const get_json=(url,err_msg="something went ")=>{

  return fetch(url)
  .then(response=>{
    if(!response.ok){
      throw new Error(`${err_msg} ${response.status}`)
    }
    return response.json()
  })
}

const get_position=function(){
  return new Promise(function(resolve,reject){
    navigator.geolocation.getCurrentPosition(resolve,reject)
  })
}

const whereAmI=async function(){
  try{
  const pos=await get_position()
  console.log(pos)
  const {latitude:lat,longitufe:lng}=pos.coords;
  const res_geo=await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  if(!res_geo.ok){
    throw new Error("problem not getting location")
  }
  const data1=res_geo.json()
  const res=await fetch(`https://restcountries.eu/rest/v2/name/${data1.country}`)
  if(!res){
    throw new Error("problem in getting country")
  }
  const data=await res.json()
  render_country(data[0])
  return `you are in ${data.city} ${data.country}`}
  catch(err){
    console.log(err)
    render_error(err);
  }
}

btn.addEventListener("click",function(){
  whereAmI().then((res)=>console.log(res)).catch(err=>console.log(err.message)).finally("ended")
})
