// from data.js
const tableData = data;

// get table references
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
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.

filter_inputs = {}


// 3. Use this function to update the filters. 
function updateFilters() {

  inputs = {"state": d3.select("#state").property("value"),
         "country": d3.select("#country").property("value"),
         "shape": d3.select("#shape").property("value"),
         "datetime": d3.select("#datetime").property("value")}
    // 4a. Save the element that was changed as a variable.

    // 4b. Save the value that was changed as a variable.

    // 4c. Save the id of the filter that was changed as a variable.

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    
    Object.entries(inputs).forEach(item => {
      if (item[1])
        {filtered_inputs.push(item)}})

    Object.entries(inputs).forEach(item => {
      if (!item[1])
        {inputs.delete(item[0])}})

    filtered_inputs.forEach(item =>{

    })
  
    let workingTable = tableData;

    Object.keys(filtered_inputs).forEach((key) => {
      fieldInput = key[1]
      workingTable = workingTable.filter(row => row[key] === fieldInput)})

      Object.values(filtered_inputs).forEach(() => {
      fieldInput = key[1]
        workingTable = workingTable.filter(row => row[key] === fieldInput)})


    newTable= filtered_inputs.forEach(updateTable)

  }

// *******************************************

Object.keys(filters).forEach((key) => {
console.log(key)

  let userInput = newDog.key;

  console.log(userInput)

  workingTable = workingTable.filter(row => row[key] === userInput);})


  var res = workingTable.filter(task => !(task.key == userInput))


const keysToKeep = Object.keys(developer).filter(
  (key)=> {
    return !Number.isInteger(developer[key])
});

const newDog = Object.keys(inputs).reduce((accumulator, key) => {
  // Copy all except emoji
  if(key !== ""){
      accumulator[key] = inputs[key]
  }
  return accumulator
}, {})




var newDog = Object.keys(inputs).reduce((accumulator, key) => {
  // Copy all except emoji
  if(!key){
      accumulator[key] = dog[key]
  }
  return accumulator
}, {})



const updatedTable = Object.keys(inputs).reduce((accumulator, key) => {
  // Copy all except emoji
  if(key !== ""){
      accumulator[key] = inputs[key]
  }
  return accumulator
}, {})


   function updateTable(item) {
    let input_field = item[0]
    let input_value = item[1],

    workingTable = workingTable.filter(row => row[input_field] === input_value)
  }
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

    working.filter(row => row["country"] === "us")


    filtered_inputs.forEach((input) => {
    inputField = input[0]
    userInput = input[1]
    console.log("field = " + inputField);
    console.log("userInput = " + userInput);
      working = working.filter(row => row[inputField] === userInput);
 
    });


   filtered_inputs.forEach((key) => {
      let userInput = d3.select("#"+key).property("value");
      if (userInput){
      working = working.filter(row => row[key] === userInput)};
  })

  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  }
  
  // 2. Attach an event to listen for changes to each filter
  
  
  // Build the table when the page loads
  buildTable(tableData);

// +++++++++++++++++++++++++++  Keeper code ++++++++++++++++++++++++++++

// initialize variables

filtered_inputs = []

workingTable = tableData

// get inputs and create 'filtered_inputs' by removing those fields with no entries

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


// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change",updateFilters)



