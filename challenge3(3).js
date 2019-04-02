function getStadAPIdata() {
    fetch('https://ckan.dataplatform.nl/api/action/datastore_search?resource_id=a90c1897-6c48-455f-a474-98097c43d1a7')
    //haal steden op uit bovenstaande api key url

    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
    	var text = ''; //lege variabele
      console.log(response.result.records);
      for (var i =0; i < response.result.records.length; i++) {
        text ==  (response.result.records[i].STRAAT +'<br>')
      }
      document.getElementById('buurt').innerHTML = text;

     //lege string wordt gevuld met de resultaten uit de for loop
     //met innerhtml wordt text gevuld met de opgehaald data uit de api key

    })

    .catch(function (error) {
     
    });
}
//aanroepen functie

getStadAPIdata();
