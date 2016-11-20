function loadOptions() {
    var agressivness = localStorage.getItem("agressivness")
    $("a[role='slider']").css({left: agressivness})
    
    agressivness = parseInt(agressivness);
 document.getElementById("points").value = agressivness;
}
if (agressivness == null){
    var agressivness = 100;
    localStorage.setItem("agressivness", agressivness);
    var agressivness = parseInt(agressivness);
}

function saveOptions(){
    agressivness = document.getElementById("points").value;
    alert(agressivness);
    localStorage.setItem("agressivness", agressivness);
}

function eraseOptions() {
    agressivness = 100;
    document.getElementById("points").value = agressivness;
    localStorage.setItem("agressivness", agressivness);
}