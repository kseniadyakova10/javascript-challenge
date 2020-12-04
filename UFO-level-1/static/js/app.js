var tableData = data;

var button = d3.select("#filter-btn");

var form = d3.select(".form-group");

//function for deleting table
function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };

//function for building table
function buildTable (data) {
    var tbody = d3.select("tbody");

    data.forEach(record => {

        //insert row
        var row = tbody.append("tr");

        //insert data
        Object.entries(record).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

//function triggered when button is clicked
function handleClick() {
    //clear table from previous searches
    deleteTbody();

    //input date value
    var inputDate = d3.select("#datetime").property("value");

    //filter data
    var filterData = tableData.filter(ufo =>
        ufo.datetime === inputDate);
    console.log(filterData);
    
    //insert filtered data into table
    buildTable(filterData);
};

button.on("click", handleClick);
form.on("submit", handleClick);



