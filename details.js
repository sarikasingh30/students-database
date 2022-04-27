var array=JSON.parse(localStorage.getItem("store"));
console.log(array);
var tab=document.createElement("table");
tab.style.width="400px";
tab.style.margin="auto";

var theads=document.createElement("thead")
var Row=document.createElement("tr");
var Name=document.createElement("th");
Name.innerHTML="<h4>Name</h4>";
Name.style.padding="5px";
var Mobile_No=document.createElement("th");
Mobile_No.innerHTML="<h4>Mobile_No</h4>";
var City=document.createElement("th");
City.innerHTML="<h4>City</h4>";
Row.append(Name,Mobile_No,City);
theads.append(Row);
let tbody=document.createElement("tbody");
array.forEach(function (elem){
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    td1.textContent=elem.name;
    td2.textContent=elem.number;
    td3.textContent=elem.city;
    tr.append(td1,td2,td3);  
    tbody.append(tr); 
});
tab.append(theads,tbody);

document.querySelector("#formclass").append(tab);



