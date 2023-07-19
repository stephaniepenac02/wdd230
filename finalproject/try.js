fetch(bountiful.json)
  .then(function (response) {
    // The JSON data will arrive here
  })
  .catch(function (err) {
    // If an error occured, you will catch it here
  });






$(document).ready(function() {
    $.getJSON("bountiful.json", function(data){
        console.log(data)

        $("fruits").html(data.fruits);

    })
})



















var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }













// Read operation using this function
function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fname").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["number"] = document.getElementById("number").value;
    formData["fruit"] = document.getElementById("fruit").value;
    return formData;
}



// To Reset the data of fill input
function resetForm(){
    document.getElementById('fname').value = '';
    document.getElementById('empCode').value = '';
    document.getElementById('number').value = '';
    document.getElementById('fruit').value = '';
    selectedRow = null;
}


function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.number;
    selectedRow.cells[3].innerHTML = formData.fruit;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }
}




