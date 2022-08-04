// import the data from data.js
const tableData = data;
var workingTable = tableData

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }  

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

function sayHello(){console.log('Hello')}


function updateTable(){

  filtered_inputs = []

  inputs = {"state": d3.select("#state").property("value"),
  "country": d3.select("#country").property("value"),
  "shape": d3.select("#shape").property("value"),
  "datetime": d3.select("#datetime").property("value")}

  Object.entries(inputs).forEach(item => {
    if (item[1])
      {filtered_inputs.push(item)}})

    // filter the tableData based upon each filter entered 
  filtered_inputs.forEach((input) => {
    let inputField = input[0]
    let userInput = input[1]
    console.log("field = " + inputField);
    console.log("userInput = " + userInput);
      workingTable = workingTable.filter(row => row[inputField] === userInput);
  
    });

  // rebulid table display 

  buildTable(workingTable)
  

}

// Attach an event to listen for the form button
d3.selectAll("input").on("change", updateTable);

// Build the table when the page loads
buildTable(tableData);




