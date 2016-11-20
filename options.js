window.onload = function(){
console.log(localStorage.getItem("agressivness"));
window.level;
    
    var agressivness = localStorage.getItem("agressivness")
    console.log(agressivness);
    $("a[role='slider']").css({left: agressivness + "%"})
    document.getElementById("points").value = (agressivness);
    agressivness = parseInt(agressivness);   

if (agressivness === null){
    console.log("NULL")
    var agressivness = 100;
    localStorage.setItem("agressivness", agressivness);
    var agressivness = parseInt(agressivness);
}    
    //saveOptions 
    document.getElementById("save").addEventListener('click', function(){
    agressivness = document.getElementById("points").value;
    localStorage.setItem("agressivness", agressivness);
    console.log(localStorage.getItem("agressivness"));
});
    //resetOptions
    document.getElementById("reset").addEventListener('click',
function(){
    agressivness = 100;
    document.getElementById("points").value = (agressivness);
    localStorage.setItem("agressivness", agressivness);
    $("a[role='slider']").css({left: "100" + "%"})
});

function level(){
    if (agressivness <= 33){
        level = "low"
    }
    
    else if (agressivness < 66){
        level = "med"
    }
    
    else if (agressivness >= 66){
        level="high"
    }
}
};