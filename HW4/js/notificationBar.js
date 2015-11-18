Parse.initialize("rriccses0xkmfyCu8JHUbRB3n4mJW1H3okqs1Sjh", "z8QtkGlujwURiXFdYzi4SV7L9X6BxWdQG6bVecA2");

var currentuser = Parse.User.current();
var username = currentuser.get("username");

var habitCount = 0;

var Habit = Parse.Object.extend("Habit");
var query = new Parse.Query(Habit);
query.equalTo("username", username);
query.count({
   success: function(count) {
       console.log(count);
       habitCount = count;
       console.log("Habit Count: " + habitCount);
       dailyNotification(habitCount);
   },
    error: function(error) {
        console.log("Ooops");
    }

});

// Notifies the user on first login of the day that they have n number of habits to update
function dailyNotification(count) {
    // Get current date
    var date = new Date();
    var currentDate = date.getFullYear()*10000 + (date.getMonth()+1)*100 + date.getDate();

    //notify user only if first login of the day
    if (currentDate > currentuser.get("lastLoginTime")) {
        if (!("Notification" in window)) {
            alert("Update your " + count + " habits!");
        }
        else if (Notification.permission === "granted") {
            var notitificatoin = new Notification("Update your " + count + " habits!");
        }
        else if (Notification.permission !== "denied") {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                    var notitificatoin = new Notification("Update your " + count + " habits!");
                }
            });
        }
    }
}

function logoutButton() {
    Parse.User.logOut();
    window.location.href='login.html';
}

$(function ()
{
    console.log(username);
    console.log(username.length);
    if (username.length > 17) {
        var name = username;
        name = name.substring(0, 17) + "...";
    }
    $("#username").append("<li>" + name + "<ul id='logout' onclick='logoutButton()'>\
     <li>Logout</li>\
     </ul></li>");
});


