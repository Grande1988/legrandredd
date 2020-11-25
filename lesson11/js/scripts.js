function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");

}
document.getElementById('year').innerHTML = new Date().getFullYear();



  






function getFormattedDate() {
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let theDate = new Date();
    return daysOfWeek[theDate.getDay()] + " " + theDate.getDate() + " " + months[theDate.getMonth()] + " " + theDate.getFullYear(); 
}
document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("currentDate").innerHTML = getFormattedDate(); 
});




 