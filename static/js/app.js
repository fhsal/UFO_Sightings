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

function updateTable(){

  // initalize array of inputs
  filtered_inputs = []
  workingTable = tableData

  // populate inputs
  inputs = {"state": d3.select("#state").property("value"),
  "country": d3.select("#country").property("value"),
  "shape": d3.select("#shape").property("value"),
  "datetime": d3.select("#datetime").property("value")}

  // build array of inputs where user has made an entry 
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

// Event listener for change to filter inputs by user
d3.selectAll("input").on("change", updateTable);

// Build the table when the page loads
buildTable(tableData);




