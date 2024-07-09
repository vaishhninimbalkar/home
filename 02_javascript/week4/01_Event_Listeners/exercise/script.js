function setupListeners(){
    var button = document.getElementById("mybutton");
    button.addEventListener("click",function(){
        alert("button was clicked!");
    });    

}
window.onload = setupListeners;