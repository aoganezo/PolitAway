levelglobal = "";

function saveLevel(agressivness){
        level = ""
        if (agressivness == 0){
            level = "none";
        }
        if (agressivness <= 33){
            level = "low";
        }

        else if (agressivness < 66){
            level = "med";
        }

        else if (agressivness >= 66){
            level="high";
        }
         chrome.storage.sync.set({"agressivness": agressivness, "level" : level},()=>{});
    }

window.onload = function(){
    console.log(chrome.storage.sync.get("agressivness",()=>{}));
    var level = "";
    
    var agressivness;
    chrome.storage.sync.get("agressivness",(items)=>{
        agressivness = items.agressivness;
        console.log(agressivness);
        $("a[role='slider']").css({left: agressivness + "%"});
        agressivness = parseInt(agressivness);
        console.log(agressivness);
        document.getElementById("points").value = (agressivness);

        if (agressivness === null){
            console.log("NULL");
            agressivness = 100;
            chrome.storage.sync.set({"agressivness": agressivness},()=>{});
            agressivness = parseInt(agressivness);
        }
        //saveOptions
        document.getElementById("save").addEventListener('click', function(){
            agressivness = document.getElementById("points").value;
            chrome.storage.sync.set({"agressivness": agressivness},()=>{});
            chrome.storage.sync.get("agressivness", (items)=>{console.log(items.agressivness)});
            saveLevel(agressivness);
        });
        //resetOptions
        document.getElementById("reset").addEventListener('click',
            function(){
                agressivness = 100;
                document.getElementById("points").value = (agressivness);
                chrome.storage.sync.set({"agressivness": agressivness},()=>{});
                $("a[role='slider']").css({left: "100" + "%"})
        });
    });


};


