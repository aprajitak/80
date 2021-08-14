Array1=[];

function submit() {
for(var i=1; i<=4;i++){ 
  var name1= document.getElementById("student"+i).value; 
  Array1.push(name1);
}
console.log (Array1); 
document.getElementById("output").innerHTML=Array1;
document.getElementById("njck").style.display= "none";
document.getElementById("blablaarrange").style.display= "inline-block";
}
function sort() {
Array1.sort();
document.getElementById("output").innerHTML=Array1;



}