function showAlert() {
    setTimeout(function(){
        alert("this alert is shown after 3 seconds");
        },3000);

}
function startInterval(){
    setInterval(function() {
        alert("this alert is shown every 5 seconds");
         },5000);
}