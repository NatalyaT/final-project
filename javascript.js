let request = new XMLHttpRequest();
let url = "https://data.cityofnewyork.us/resource/gaq9-z3hz.json?$limit=10&$$app_token=4YQuvDqOqYKZI6gJrsRXWxJOB&fiscal_year=2018";

request.open("GET", url, true);
request.onload = function(){
    let data = JSON.parse(this.response);
    
    let ratesList = document.getElementById('ratesList');
    let zoneList = document.getElementById('zoneList');
    
    if (request.status >= 200 && request.status < 400) {
        data.forEach(_zone =>{
            console.log(_zone)
    	})
        zoneList.textContent = data[0]['_zone'] ;
         ratesList.textContent = data[6]['capture_rate_mgp_total_mgp_max_mgp_'];
    }
    console.log('ratesList' ,ratesList)
};

request.send();