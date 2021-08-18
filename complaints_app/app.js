// DD and PZ HW app 
// const list = document.querySelector(".list");
// let buttons = document.querySelectorAll(".boroughs");
// let input = document.querySelector("#numOfComps");

// buttons.forEach((boroughs) =>{
//    boroughs.addEventListener('click',)
// }
// const fetch = require('node-fetch')

// const fetch = require('node-fetch') ----(only works in terminal soes not show up in browser)
   fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=5')
      .then(response => response.json())
      .then(data => displayData(data))
      .catch(error => console.log(error))

// let reportList = []
// document.body.addEventListener('click', function(onclick){
//    if( event.target.id == 'brooklyn'){
//       displayData();
//    };
// });

function displayData(d) {
   for(let i=0; i<d.length; i++){
   
      let report = {
         borough:d[i].borough, 
         descriptor:d[i].descriptor, 
         resolution:d[i].resolution_description
     }
     reportList.push(report)
   }
   return (reportList)
}

// document.getElementsByClassName("button").addEventListener("click" , displayData());
