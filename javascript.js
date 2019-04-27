let request = new XMLHttpRequest();
let url = "https://data.cityofnewyork.us/resource/gaq9-z3hz.json?$limit=5&$$app_token=4YQuvDqOqYKZI6gJrsRXWxJOB";

request.open("GET", url, true);
request.onload = function(){
    let data = JSON.parse(this.response);
    
    let ratesList = document.getElementById('ratesList');
    let zoneList = document.getElementById('zoneList');
    
    if (request.status >= 200 && request.status < 400){
        zoneList.textContent = data[0]['_zone'] ;
        ratesList.textContent = data[6]['diversion_rate_total_total_recycling_total_waste_'];
    }
    console.log('ratesList' ,ratesList)
};

request.send();