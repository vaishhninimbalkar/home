function showError() {
    try{
        var result = y / 10;
    }catch (error){
        alert("Error: "+ error.message);
    }
}