console.log("JS")

const hrs = document.querySelector("#hrs")
const min = document.querySelector("#min")
const sec = document.querySelector("#sec")

setInterval(()=>{

    let currenttime = new Date();
    
    
    hrs.innerHTML = (currenttime.getHours()<10?"0":"") + currenttime.getHours();
    min.innerHTML = (currenttime.getMinutes()<10?"0":"") + currenttime.getMinutes();
    sec.innerHTML = (currenttime.getSeconds()<10?"0":"") + currenttime.getSeconds();
},1000)