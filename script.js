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

/*const get_country=(country)=>
{
  //make a ajax call in promise
  get_json(`https://restcountries.eu/rest/v2/name/${country}`,"country not foud")
  .then(data=>{render_country(data[0])
    const neighbour=data[0].borders[0];
    console.log(data[0])
    //whereAmI(data[0].latlng)
    if(!neighbour){
      throw new Error("no neighbour found")
    }
    return get_json(`https://restcountries.eu/rest/v2/alpha/${neighbour}`,"country not found")
  }).then(data=>render_country(data))
  .catch(err=>{
    console.log(`${err}`)
    render_error(`something went wrong ${err.message}`);
  });
}
btn.addEventListener("click",function(){
  get_country("italy")
})
*/
///////////////////////////////////////

//create an ajax call in old way
/*const get_country_data=(country)=>{
const request=new XMLHttpRequest();
request.open("GET",`https://restcountries.eu/rest/v2/name/${country}`)
request.send()//works in background rest of code run

request.addEventListener("load",function(){
    //console.log(this.responseText)    
    //chnage to object from the json
    const [data]=JSON.parse(this.responseText)
    console.log(data);
    const html=`
    <article class="country">
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
})
}

get_country_data("france");
get_country_data("portugal")

*/

/*//246 make a ajax call sequencely not parallely 

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
}*/


/*const get_country_neighbour=(country)=>{
  const request=new XMLHttpRequest();
  request.open("GET",`https://restcountries.eu/rest/v2/name/${country}`)
  request.send()//works in background rest of code run
  
  request.addEventListener("load",function(){
      //console.log(this.responseText)    
      //chnage to object from the json
      const [data]=JSON.parse(this.responseText)
      console.log(data);
      render_country(data);
      //next do next ajax call sequencely
      //we need data about the first api call 
      //b/s compare with fist api call and next one will call automatically or sequencely
      //here we use country code for the each country that data is available in json data
      //so take it take the borders data that will be a another country
      //here some country have many borders so take it 
      const neighbours=data.borders
      //next ajax call
      const request2=new XMLHttpRequest();
      request2.open("GET",`https://restcountries.eu/rest/v2/alpha/${neighbours[0]}`)
      request2.send()//works in background rest of code run
      request2.addEventListener("load",function(){
        const data1=JSON.parse(this.responseText)
        console.log(data1);
        render_country(data1);
      })
  })
  }
get_country_neighbour("germany");*/
/*const get_country=function(country){
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  .then(response=>response.json()).then(data=>{
    render_country(data[0])
    //do another promise in the
    const neighbours=data[0].borders[0];
    console.log(neighbours)
    if(!neighbours) return
    return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbours}`)
  }).then(response=>response.json()).then((data1)=>{render_country(data1) 
    //here in anywhere the error occurs it will catch the err constructor 
  }).catch(err=>{
    render_error(`something went wrong ${err.message}`)
  })
}*/

/*const get_country=(country)=>{
  get_json(`https://restcountries.eu/rest/v2/name/${country}`,"country not found")
  .then(data=>{
    render_country(data[0])
    const neighbour=data[0].borders[0];
    if(!neighbour) throw new Error("no neigbour");
    return get_json(`https://restcountries.eu/rest/v2/alpha/${neighbour}`,"country not found")
  }).then((data1)=>render_country(data1))
  .catch(err=>{
    render_error(`something wennt wrong ${err.message}`);
  })
}

btn.addEventListener("click",function(){
  get_country("portugal")
})*/

/*//user defined throw error
const get_country=function(country){
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  .then(response=>{
    if(!response.ok){
      throw new Error("status")
    }
    console.log(response)
   return  response.json()
  }).then(data=>{
    render_country(data[0])
    //do another promise in the
    const neighbours=data[0].borders[0];
    console.log(neighbours)
    if(!neighbours) return
    return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbours}`)
  }).then(response=>{
    if(!response.ok){
      throw new Error("status")
    }
    response.json()})
    .then((data1)=>{render_country(data1) 
    //here in anywhere the error occurs it will catch the err constructor 
  }).catch(err=>{
    render_error(`something went wrong ${err.message}`)
  })
}
btn.addEventListener("click",function(){
  get_country("portugal")
})
*/


const take_coord=(coords)=>{
  console.log(coords);
}

/*//codinng challenge 1
//create a function where am i
const whereAmI=(lat,lng)=>{
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  .then(response=>{
    if(!response.ok){
      throw new Error(response.status)
    }
    return response.json();
  }).then(data=>{
    console.log(`you are in ${data.country} ${data.city}`);
    return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
  }).then(response=>{
    if(!response.ok){
      throw new Error(response.status)
    }
    return response.json();
  }).then((data1)=>render_country(data1[0])).catch(err=>{
    console.log(`something went ${err.message}`);
  })
}

//whereAmI(52.508, 13.381);
//whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/


//event loop in practice 254 
//check which will first run 
//check in callback queue which event will hold
//check is micro task queue hold any value or not
//check which call back will first run microtask or regular call back queue
//what is the roll of event loop
//what is the roll of call back  
/*console.log("test start")
setTimeout(()=>console.log("set time 0 sec"),0)
Promise.resolve("resolved promise 1").then((res)=>console.log(res))
console.log("test end")*/
//1.here first run two synchronus code that is one by one without any call back
//test start,test end
//2.next the timer will register the callback into the web api
//once the timer is finished after 0 second go to the call back queue to launch
// in console
//3.next promise will take resolve immediately and next call back response will
//go to the micro task queue that is only for promises 
//4.once call back is empty , first run microtask queue that handle event loop first
//take micro task queue 
//next the timer call back will go to the call stack and execute it.
//here micortask and timer will worked in same application the timer have not guarantee
//iff the promise  will have over  work loaded then the timer have not guarantee b/s
//it takes too much times 

/*//255 building a simple promises
const lottery_promise=new Promise(function(resolve,reject)
{
  console.log("lottery draw is happening")
  setTimeout(function(){
    if(Math.random()>0.5){
      resolve("lotery winned")
    }
    else{
      reject("you lost the money")
    }
  },2000);
})

lottery_promise.then((res)=>console.log(res)).catch((err)=>console.log(err))
*/

/*const wait=function(seconds){
  return new Promise(function(resolve){
    setTimeout(resolve,seconds*1000);
  });
}

wait(1).then(()=>{console.log("i waited for 1 seconds")
return wait(1)
}).then(()=>{console.log("i waited for 2 seconds")
return wait(2)
}).then(()=>{
  console.log("i waited for 3 seconds")
  return wait(1)
}).then(()=>console.log("i waited for 4 seconds")).then()*/


/*//sequence calls for so many call backs

setTimeout(()=>{
  console.log("wait 1 seconds")
  setTimeout(()=>{
    console.log("wait 2 seconds")
    setTimeout(()=>{
      console.log("wait 3 seconds")
      setTimeout(()=>{
        console.log("wait 4 seconds")
      },4000)
    },3000)
  },2000)
},1000)
*/

/*Promise.resolve("abc").then((res)=>console.log(res))
Promise.reject(new Error("problem")).catch(err=>{
  console.log(err);
})*/



const get_position=function(){
  return new Promise(function(resolve,reject){
    navigator.geolocation.getCurrentPosition(resolve,reject)
  })
}
//get_position().then((pos)=>console.log(pos));


/*const whereAmI=function(){
  get_position().then((pos)=>{
    console.log(pos.coords)
    const {latitude:lat,longitude:lng}=pos.coords;
    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  })
  .then(response=>{
    if(!response.ok){
      throw new Error(response.status)
    }
    return response.json();
  }).then(data=>{
    console.log(`you are in ${data.country} ${data.city}`);
    return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
  }).then(response=>{
    if(!response.ok){
      throw new Error(response.status)
    }
    return response.json();
  }).then((data1)=>render_country(data1[0])).catch(err=>{
    console.log(`something went ${err.message}`);
  })

}
btn.addEventListener("click",whereAmI);
*/
/*const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/


/*
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


console.log("first started")
//use ii
whereAmI().then((res)=>console.log(res)).catch(err=>console.log(err.message)).finally("ended")

*/
//call async function in immediate function
/*(async function(){
  try{
    const city=await whereAmI();
    console.log(city)
  }
  catch(err){
    console.log(err);
  }
})();

*/

/*//261 running promises in parallel
const get_json2=(url,msg="")=>{
  return fetch(url).then(response=>{
    if(!response.ok){
      new Error(`${msg} ${response.status}`)
    }
    return response.json()
  })
}
*/
//const get3_country=async (c1,c2,c3)=>{
  //try{
  /*const [data1]=await get_json2(`https://restcountries.eu/rest/v2/name/${c1}`)
  const [data2]=await get_json2(`https://restcountries.eu/rest/v2/name/${c2}`)
  const [data3]=await get_json2(`https://restcountries.eu/rest/v2/name/${c3}`)
  console.log([data1.capital,data2.capital,data3.capital])}*/
    //use parrelely call each one in static method
    /*const data=await Promise.all([get_json2(`https://restcountries.eu/rest/v2/name/${c1}`),
    get_json2(`https://restcountries.eu/rest/v2/name/${c1}`),
    get_json2(`https://restcountries.eu/rest/v2/name/${c1}`)])
    console.log(data);
   // return data;
    //loop the array
    const dat1=data.map((d)=>{
      return d[0].capital
    })
    console.log(dat1)
}
catch(err){
  console.log(err);
}
}
//get3_country("portugal","germany","france")//.then((dat)=>console.log(dat))



//promise.race

(async function(){
  const res=await Promise.race([get_json2(`https://restcountries.eu/rest/v2/name/france`),
  get_json2(`https://restcountries.eu/rest/v2/name/germany`),
  get_json2(`https://restcountries.eu/rest/v2/name/italy`)])
  console.log(res[0])
})()


const timeout=function(sec){
  return new Promise(function(_,reject){
    setTimeout(function(){
      reject(new Error("too long to proceed internet"))
    },sec*1000)
  })
}

Promise.race([ get_json2(`https://restcountries.eu/rest/v2/name/italy`)
,timeout(0.17)])
.then((res)=>console.log(res)).catch(err=>console.log(err))
*/



/*const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
//let currentImg;

const loadNpause=async function(){
  try{
  let img=await createImage("img/img-1.jpg")
  console.log("image 1 loaded")
  await wait(2)
  img.style.display="none"

  img=await createImage("img/img-2.jpg")
  console.log("image 2 loaded")
  await wait(2)
  img.style.display="none"
  }
  catch(err){
    console.log(err.message)
  }
}

//loadNpause();
/*createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
  */

/*
  const loadall=async function(imgArr){
    try{
      const imgs=imgArr.map(async img=>await createImage(img));
      const imgel=await Promise.all(imgs)
      console.log(imgel);
      imgel.forEach(img=>img.classList.add("parallel"))

    }
    catch(err){
      console.log(err)
    }
  }

  loadall(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])*/


