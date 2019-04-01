function getStadAPIdata() {
  fetch('https://ckan.dataplatform.nl/api/3/action/datastore_search?resource_id=4cd93a3f-7d2d-4758-af0d-d0aab05fc67a&limit=5')
   

var data = {
    resource_id: '4cd93a3f-7d2d-4758-af0d-d0aab05fc67a', // the resource id
    limit: 5, // get 5 results
    q: 'jones' // query for 'jones'
  };
  $.ajax({
    url: 'https://ckan.dataplatform.nl/api/3/action/datastore_search',
    data: data,
    dataType: 'jsonp',
    success: function(data) {
      alert('Total results found: ' + data.result.total)
    }
  });

  getStadAPIdata();