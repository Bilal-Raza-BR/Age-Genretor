

function Age(){
var dob = document.getElementById('dob').value;
var dobDate = new Date(dob)
var today = new Date()

var age = today.getTime() - dobDate.getTime()
console.log(age)
var seconds = Math.floor(age/1000)
console.log(seconds)
var minutes = Math.floor(seconds/60)
console.log(minutes)
var hours = Math.floor(minutes/60)
console.log(hours)
var days = Math.floor(hours/24)
console.log(days)
var months = Math.floor(days/30)
console.log(months)
var year = Math.floor(months/12)
console.log(year)
if(dobDate > today){
  alert("Please Enter Correct Date Of Birth")
}
else{

document.getElementById('year').innerHTML =`<h1 class="animate__animated animate__flip">${year}</h1> <br> Years`
document.getElementById('month').innerHTML =`<h1 class="animate__animated animate__flip">${months % 12}</h1> <br> Months`
document.getElementById('day').innerHTML =`<h1 class="animate__animated animate__flip">${days %30}</h1> <br> Days`
document.getElementById('clock').innerHTML =`<h1 class="animate__animated animate__flip">${hours%24}:${minutes %60}:${seconds %60}</h1> `
}
}