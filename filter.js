/*
 * Created by artur on 11/19/2016.
 */
function removeItems() {
    //Low is the least aggressive setting, that is it removes the WORST posts.
    var low = [/*low*/"TRUMP", "CLINTON", "KILLARY", "NOT MY PRESIDENT"];

    //Med is medium aggressiveness, it includes all low settings, and a few more.
    var med = [/*med:*/"PENCE", "OBAMA", "DEMOCRAT", "REPUBLICAN", "LIBERTARIAN",
        /*low:*/"TRUMP", "CLINTON", "KILLARY", "NOT MY PRESIDENT"];

    //High is the most rigorous. You really want nothing to do with politics.
    var high = [/*high:*/"SENATOR", "WASHINGTON D.C.", "POLITICS",
        /*med:*/"PENCE", "OBAMA", "DEMOCRAT", "REPUBLICAN", "LIBERTARIAN",
        /*low*/"TRUMP", "CLINTON", "KILLARY", "NOT MY PRESIDENT"];

    // function ext("options.js", () {
    //     (currentSetting = "level()");
    //     var currentSetting = low;
    // }
// );
    var found = 0; //Counts how many posts it has removed. Not 100% accurate.
    var currentSetting = low; //Selects the current setting to use.
    localStorage.getItem("aggressiveness");
    console.log(currentSetting);
    
    if (document.getElementsByClassName("_5jmm")) { //Checks if it's a post on a feed. "_5jmm" seems to be on all posts.
        var feed = document.getElementsByClassName("_5jmm"); // Assigns the feed array to a var.
        for (var i = 0; i < feed.length; i++) { //Loops through all posts.
            var postText = feed[i].textContent.toUpperCase(); //Assigns this posts text to a var.
            for (var j = 0; j < currentSetting.length; j++) { //Loops through keywords.
                if (postText.indexOf(currentSetting[j]) !== -1) { //Checks if a word from keywords is in the post.
                    if (postText.indexOf(currentSetting[j]) < postText.indexOf("COMMENTS")) { //Makes sure word isn't in comments.
                        feed[i].parentElement.removeChild(feed[i]); //Removes the post.
                        console.log("found: " + found++);
                    }
                }
            }
        }
    }
}
window.onscroll = function() { //Function keeps going whenever you scroll to continuously delete posts w/o refresh.
    removeItems();
};
window.onload = function () { //Function runs once onLoad in case any posts need to be removed immediately.
    setTimeout(function () { //Makes it wait 3 seconds before executing to make sure page is loaded.
        removeItems();
    },3000);
};
