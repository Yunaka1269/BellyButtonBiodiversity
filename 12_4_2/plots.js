//init(), which renders the initial visualization When the user first loads the page, init() is called
function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
    Plotly.newPlot("plot", data);
  };
  
  ////when the user selects a dropdown menu option, the updatePlotly() function is called:
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    //The variable dropdownMenu is assigned to the DOM element with the id of dropdownMenu
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
    
    //The x-axis values, or xData, remain the same. However, the y-axis values, or yData, depend on which dropdown menu option was selected. yData is initially a blank array
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
    
    //dropdown menu option is 'dataset1'
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
    
    //If 'dataset2' is chosen
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
    
    //xData and yData arrays are assembled inside the trace object
    var trace = {
      x: [xData],
      y: [yData],
    };
    //Plotly.restyle() method is used to re-render the page on the browser.
    //The first argument, “plot”, refers to the HTML div, and the second argument, trace, refers to a JavaScript object that contains the data.
    Plotly.restyle("plot", trace);
  };
  
  init();