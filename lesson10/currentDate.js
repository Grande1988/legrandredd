now= new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
date= now.getDate() + ", "+ now.getMonth() +" "+ now.getFullYear();
document.getElementById("current-date").innerText= now.toLocaleDateString("en-GB", options );