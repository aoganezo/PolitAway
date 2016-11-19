window.onload = function () {
    var low = ["TRUMP", "DONALD TRUMP", "HILLARY CLINTON", "CLINTON", "KILLARY", "NOT MY PRESIDENT"];
    var med = [""];
    var high = ["SENATOR", "WASHINGTON D.C.", "POLITICS"];
    var currentSetting = low;
    /*
     * Created by arthu on 11/19/2016.
     */
    console.log("ready!");
    if (document.getElementsByClassName("_5jmm")) {
        var elem = document.getElementsByClassName("_5jmm");
        for (var i = 0; i < elem.length; i+2) {
            var postText = elem[i].textContent.toUpperCase();
            for (var j = 0; j < currentSetting.length; j++) {
                if (postText.indexOf(currentSetting[j]) !== -1) {
                    console.log("FOUND: " + postText);
                    elem[i].parentElement.removeChild(elem[i]);
                }
                else {
                    console.log("ACTUALLY FOUND: " + postText);
                }
            }
        }
    }
    /*else if (document.getElementsByClassName("userContentWrapper")) {
     console.log("ready!2");
     var ele = document.getElementsByClassName("userContentWrapper");
     for (var j = 0; j < ele.length; j++) {
     var postText2 = elem[i].textContent;
     if (postText2.indexOf("a") !== -1) {
     console.log("FOUND: " + postText2);
     }
     else {
     console.log("ACTUALLY FOUND: " + postText2);
     }}}*/
}