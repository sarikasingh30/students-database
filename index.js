document.querySelector("form").addEventListener("submit",student);
var array=JSON.parse(localStorage.getItem("store"))||[];
function data(s,m,a){
    this.name=s;
    this.number=m;
    this.city=a;
}
function student(event){
    event.preventDefault();
var name=document.querySelector("#formGroupExampleInput").value;
var num=document.querySelector("#formGroupExampleInput2").value;
var city=document.querySelector("#formGroupExampleInput3").value;
var student_data=new data(name,num,city);
console.log(student_data)
array.push(student_data);
localStorage.setItem("store",JSON.stringify(array))
console.log(array);
}

