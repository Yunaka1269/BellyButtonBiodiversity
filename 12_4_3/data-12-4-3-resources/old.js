//Insideinit(), the d3.select() method is used to select the dropdown menu, which has an id of #selDataset. The dropdown menu is assigned to the variable selector
function init() {
    var selector = d3.select("#selDataset");
    
    //The d3.json() method is used to read the data from samples.json. The data from the entire JSON file is assigned the (arbitrary) argument name data.
    d3.json("samples.json").then((data) => {
      console.log(data);
      //Inside the data object, the names array, as seen from console.log(data), contains the ID numbers of all the study participants. The variable sampleNames is assigned to this array.
      var sampleNames = data.names;
      //forEach() method is called on the sampleNames array. 
      sampleNames.forEach((sample) => {
        selector
          //For each element in the array, a dropdown menu option is appended.
          .append("option")
          //text of each dropdown menu option is the ID. Its value property is also assigned the ID
          .text(sample)
          .property("value", sample);
      });
  })}

  function optionChanged(newSample) {
    buildMetadata(newSample);
    // buildCharts(newSample);
  }
    // function buildMetadata(sample) {
    //     d3.json("samples.json").then((data) => {
    //     var metadata = data.metadata;
    //     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    //     var result = resultArray[0];
    //     var PANEL = d3.select("#sample-metadata");
    //     //PANEL.html("") ensures that the contents of the panel are cleared when another ID number is chosen from the dropdown menu.
    //     PANEL.html("");
    //     PANEL.append("h6").text(result.location);
    //     });
    // }

    function buildMetadata(sample) {
        d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = Object.entries(metadata).forEach(([key, value]) =>
        console.log(JSON.stringify(value)));
        //var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");
        PANEL.html("");
        PANEL.append("h6").text(resultArray);
        });
    }
  init();