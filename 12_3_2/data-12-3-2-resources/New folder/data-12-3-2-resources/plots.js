//the URL to the SpaceX is defined
const url = "https://api.spacexdata.com/v2/launchpads";
//in gitbash "python -m http.server" then give port number localhost:8000 on browser 
//read and parse the actual data
d3.json("samples.json").then(function(data){
    console.log(data);
});

//map() method to extract the wfreq property from each “person” in the data.metadata array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// sort the wfreq array in descending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

//delete null values from the sorted wfreq array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

//Skill Drill 12.3.2
//Object.entries() method allows access to both an object's keys and values
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});