/*
 * Created by arthu on 11/19/2016.
 */

function removeItems() {
    var low = ["TRUMP", "CLINTON", "KILLARY", "NOT MY PRESIDENT"];
    var med = ["PENCE"];
    var high = ["SENATOR", "WASHINGTON D.C.", "POLITICS", "PENCE"];
    var currentSetting = low;
    var found = 0;

    if (document.getElementsByClassName("_5jmm")) {
        var elem = document.getElementsByClassName("_5jmm"); // + has one of the words desire to filter out
        for (var i = 0; i < elem.length; i++) {
            var postText = elem[i].textContent.toUpperCase();
            for (var j = 0; j < currentSetting.length; j++) {
                if (postText.indexOf(currentSetting[j]) !== -1) {
                    if (postText.indexOf(currentSetting[j]) < postText.indexOf("COMMENTS")) {
                        elem[i].parentElement.removeChild(elem[i]);
                        console.log("found: " + found++);
                    }
                }
            }
        }
    }
}

window.onscroll = function() {

    removeItems();
};

window.onload = function () {
    setTimeout(function () {
        removeItems();
    },3000);


    //removeItems();
    //setInterval(,4000);
};
