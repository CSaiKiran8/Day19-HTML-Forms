let selectedRow = null;

function onFormSubmit() {
   var formData = readFormData();

   let count = 0;
   let boxes = document.getElementsByClassName("checks");
   for (var i=0; i<5; i++) {
      if (boxes[i].checked === true) {
         count++;
      } 
   }
   if(selectedRow == null && count >= 2) 
      insertNewRecord(formData);
   else 
      alert("Please select atleast 2 items in the Food");
      
   resetForm();
}

function readFormData() {
   const formData = {};
   formData["first_name"] = document.getElementById("first_name").value;
   formData["last_name"] = document.getElementById("last_name").value;
   formData["address"] = document.getElementById("address").value;
   formData["pincode"] = document.getElementById("pincode").value;
   formData["gender"] = document.getElementById("gender").value;
   var checks = document.getElementsByClassName("checks");
   var str = "";
   for(var i=0; i<5; i++) {
      if(checks[i].checked === true){
         str += checks[i].value + " ";
      }
   }
   formData["choiceOfFood"] = str;
   formData["state"] = document.getElementById("state").value;
   formData["country"] = document.getElementById("country").value;
   return formData;
   // console.log(formData);
}

function insertNewRecord(data) {
   let table = document.getElementById("customerList").getElementsByTagName("tbody")[0];

    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.first_name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.last_name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pincode;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.gender;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.choiceOfFood;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.state;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.country

}

function resetForm() {
   document.getElementById("first_name").value = "";
   document.getElementById("last_name").value = "";
   document.getElementById("address").value = "";
   document.getElementById("pincode").value = "";
   document.getElementById("gender").value = "";
   document.getElementById("choiceOfFood1").checked = false;
   document.getElementById("choiceOfFood2").checked = false;
   document.getElementById("choiceOfFood3").checked = false;
   document.getElementById("choiceOfFood4").checked = false;
   document.getElementById("choiceOfFood5").checked = false;
   document.getElementById("state").value = ""; 
   document.getElementById("country").value = "";
   selectedRow = null;
}

