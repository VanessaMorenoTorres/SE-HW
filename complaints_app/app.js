// DD and PZ HW app 
// const list = document.querySelector(".list"); 
// let buttons = document.querySelectorAll(".boroughs"); //give valies to button and compare values 
// let input = document.querySelector("#numOfComps");

function bSelector(e){
   let boroName = e.target.id
   let limit = document.getElementById('numOfComps').value||10 //short circuit evaluation use conditional opperators (sets default limit to 10)
   console.log(limit)
   fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${limit}&borough=${boroName.toUpperCase()}`)
      .then(response => response.json())
      .then(data => displayData(data))
      .catch(error => console.log(error))

   console.log(e.target.innerHTML)
}

function displayData(d) {
   let reportList = document.getElementById('list')
   reportList.innerHTML = ''
   for(let i=0; i<d.length; i++){
      let descriptor = d[i].descriptor
      let resolution = d[i].resolution_description
      reportList.innerHTML += `<li>${descriptor} : ${resolution}</li>`
   }
   console.log(d)
}
   // console.log(d)
   // for(let i=0; i<d.length; i++){
   //    let report = {
         // borough:d[i].borough, 
         // descriptor:d[i].descriptor, 
         // resolution:d[i].resolution_description
   //   }
   //   reportList.push(report)
   // }
   // return (reportList)
// }




// document.getElementsByClassName("button").addEventListener("click" , displayData());