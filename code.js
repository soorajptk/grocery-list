function load() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let obj = JSON.parse(this.responseText);
      let text =
        "" +
        "<table>" +
        "<caption>" +
        "Grocery List" +
        "</caption>" +
        "<tr>" +
        "<th>" +
        "Serial No" +
        "</th>" +
        "<th>" +
        "Name" +
        "</th>" +
        "<th>" +
        "Quantity" +
        "</th>" +
        "<th>" +
        "Unit" +
        "</th>" +
        "<th>" +
        "Departments" +
        "</th>" +
        "<th>" +
        "Notes" +
        "</th>" +
        "<th>" +
        "status" +
        "</th>" +
        "</tr>";
      for (let x in obj.array) {
        text +=
          "<tr>" +
          "<td>" +
          obj.array[x].serial_no +
          "</td>" +
          "<td>" +
          obj.array[x].name +
          "</td>" +
          "<td>" +
          obj.array[x].quantity +
          "</td>" +
          "<td>" +
          obj.array[x].unit +
          "</td>" +
          "<td>" +
          obj.array[x].department +
          "</td>" +
          "<td>" +
          obj.array[x].Notes +
          "</td>" +
          "<td>" +
          obj.array[x].status +
          "</td>" +
          "</tr>";
      }
      text += "</table>";
      document.getElementById("demo").innerHTML = text;
    }
  };
  xhttp.open("GET", "word.json", true);
  xhttp.send();
}
let count=0;

function edit(obj, label) {
 
  if (obj.checked) {   
     count++;
    label.innerHTML = "<del>" + label.textContent + "</del>";
    label.style.color = "black";
  } else {
    count--;
    label.innerHTML = label.textContent;
    label.style.color = "#fff";
  }

  
  document.getElementById("deo").innerHTML=10-count;
  document.getElementById("remain").innerHTML="Remaining Items";

  
  


}












