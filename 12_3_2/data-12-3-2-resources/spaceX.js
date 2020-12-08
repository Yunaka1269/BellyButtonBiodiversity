//the URL to the SpaceX is defined
const url = "https://api.spacexdata.com/v2/launchpads";
//d3.json() returns a JavaScript promise.
//Once the data is retrieved, it is assigned the arbitrary parameter name receivedData by the arrow function and printed in the console
//d3.json().then() method ensures that the data is received before executing the arrow function
d3.json(url).then(receivedData => console.log(receivedData));

//use indexing to retrieve only the first element in the array returned from the API call.
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));
//code to retrieve the full_nameof the Vandenberg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

//How to access the latitude of the Vandenberg Airforce Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

//Skill13.1
d3.json(url).then(spaceXResults => console.log(spaceXResults.map(function(data){return data.location.latitude + "," + data.location.longitude})));


