$(function(){ 
    $('.searchName').autocomplete({ 
       source: function(req, res){ 
          $.ajax({ 
             url:"airportSearch/", 
              dataType: "json", 
              type:"GET", 
              data:req, 
              success: function (data){ 
                res($.map(data, function(el){ 
                   return { 
                     label: el.address.cityName + (' + el.iataCode +'), 
                     value: el.iataCode 
                   } 
                })); 
              }, 
              error: function(err){ 
                console.log(err.status); 
              } 
          }); 
       }         
    }); 
  }); 


  app.get('/airportSearch/', function(req,res,next){ 
    amadeus.referenceData.locations.get({ 
      keyword: req.query.term, 
      subType: 'AIRPORT,CITY' 
    }).then(function(response){ 
      res.json(response.data); 
      console.log(response.data.iataCode); 
    }).catch(function(error){ 
      console.log("error"); 
      console.log(error.response); 
    }); 
    }); 


    success.function(data);{ 
        res($.map(data, function(el){ 
            return { 
              label: el.address.cityName + (' + el.iataCode +'), 
              value: el.iataCode 
             } 
             }));                        
    }  
    error.function(err);{ 
              console.log(err.status); 
             }