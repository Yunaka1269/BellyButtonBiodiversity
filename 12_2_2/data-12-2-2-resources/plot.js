console.log(cityGrowths);

//sort() the cities by population growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

//select only the top five cities by population growth
var topFiveCities = sortedCities.slice(0,5);

//Create Arrays of City Names and Growth Figures
var topFiveCityNames = topFiveCities.map(city => city.City);
//parseInt()method to converts strings into integers
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

//Create a Bar Chart with the Arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);


//Skill Drill 12.2.2
//sort() the cities by population growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

//select only the top seven cities by population growth
var topSevenCities = sortedCities.slice(0,7);

//Create Arrays of City Names and Growth Figures
var topSevenCityNames = topSevenCities.map(city => city.City);
//parseInt()method to converts strings into integers
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));

//Create a Bar Chart with the Arrays
var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);