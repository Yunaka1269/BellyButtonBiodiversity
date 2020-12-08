Plotly.newPlot("plotArea", [{x: [1, 2, 3, 4, 5], y: [10, 20, 30, 40, 50]}]);

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", [trace], layout);

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks"},
    yaxis: { title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);


var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

var trace1 = {
    y: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    mode: 'markers',
    marker: {
      size: 40,
      color: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Scatter Plot with a Color Dimension'
  };
  
  Plotly.newPlot('plotArea', data, layout);

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  };
  
  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
  };
  
  var data = [trace1, trace2, trace3];
  
  Plotly.newPlot('plotArea', data);

var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 6, 3, 6, 1],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Team A',
    text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
    textposition: 'top center',
    textfont: {
      family:  'Raleway, sans-serif'
    },
    marker: { size: 12 }
  };
  
  var trace2 = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5],
    y: [4, 1, 7, 1, 4],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Team B',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    textfont : {
      family:'Times New Roman'
    },
    textposition: 'bottom center',
    marker: { size: 12 }
  };
  
  var data = [ trace1, trace2 ];
  
  var layout = {
    xaxis: {
      range: [ 0.75, 6.25 ]
    },
    yaxis: {
      range: [0, 8]
    },
    legend: {
      y: 0.5,
      yref: 'paper',
      font: {
        family: 'Arial, sans-serif',
        size: 20,
        color: 'grey',
      }
    },
    title:'Data Labels on the Plot'
  };
  
  Plotly.newPlot('plotArea', data, layout);

var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

//Skill Drill 12.2.1
var numbers = [0,2,4,6,8];
var five = numbers.map(function(add){
    return add + 5;
});
console.log(five);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);
//Skill Drill 12.2.1
var cityPopulation = cities.map(function(people){
    return people.population;
})
console.log(cityPopulation);

var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);

//Skill Drill 12.2.1
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sAnimal = words.filter(function(withs){
    return withs[0] === "s";
});
console.log(sAnimal);

var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num * 2);
console.log(doubled);

//Ascending
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);
//descending
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement - anotherElement);
console.log(sortedAge);

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

//Skill Drill
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice2 = words.slice(0,3);
//to slice to end of an array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );

