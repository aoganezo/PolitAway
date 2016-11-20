var level;

function loadOptions() {
    var agressivness = localStorage.getItem("agressivness")
    console.log(agressivness);
    $("a[role='slider']").css({left: agressivness + "%"})
    
    
    document.getElementById("points").value = (agressivness);
 agressivness = parseInt(agressivness);   
}
if (agressivness === null){
    console.log("NULL")
    var agressivness = 100;
    localStorage.setItem("agressivness", agressivness);
    var agressivness = parseInt(agressivness);
}

function saveOptions(){
    agressivness = document.getElementById("points").value;
    localStorage.setItem("agressivness", agressivness);
    console.log(localStorage.getItem("agressivness"));
}

function eraseOptions() {
    agressivness = 100;
    document.getElementById("points").value = agressivness;
    localStorage.setItem("agressivness", agressivness);
    $("a[role='slider']").css({left: "100" + "%"})
}

function level(){
    if (agressivness <= 33){
        level = "low"
    }
    
    else if (agressivness < 66){
        level = "med"
    }
    
    else (agressivness >= 66){
        level="high"
    }
}