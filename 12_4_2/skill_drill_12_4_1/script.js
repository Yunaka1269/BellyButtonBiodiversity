//d3.selectAll().on("change", ); creates an event listener that triggers the custom function every time a change takes place to the HTML element specified by selectAll().
d3.selectAll("body").on("change", updatePage);
//Whenever there is a change to the HTML body, the updatePage()function is called
function updatePage() {
  //d3.selectAll() to select the dropdown menu, which has an id of selectOption
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  //Whenever a dropdown menu option is selected, its value is assigned the variable selectedOption
  var selectedOption = dropdownMenu.value;
  
  console.log(d3.selectAll("#menu").node().id);
  console.log(dropdownMenuID);
  console.log(selectedOption);
};