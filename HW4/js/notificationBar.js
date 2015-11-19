Parse.initialize("rriccses0xkmfyCu8JHUbRB3n4mJW1H3okqs1Sjh", "z8QtkGlujwURiXFdYzi4SV7L9X6BxWdQG6bVecA2");

var currentuser = Parse.User.current();
var username = currentuser.get("username");

var habitCount = 0;


var Habit = Parse.Object.extend("Habit");
var query = new Parse.Query(Habit);
query.equalTo("username", username);
query.count({
   success: function(count) {
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
    console.log("CurrentDate: " + currentDate);
    console.log("Last login: " + currentuser.get("lastLoginTime"));

    //notify user only if first login of the day
    if (currentDate > currentuser.get("lastLoginTime") && checkNoticiationSettings()) {
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

        currentuser.set("lastLoginTime", currentDate);
        console.log("Time " + currentDate);
        currentuser.save(null, {
            lastLoginTime: currentDate
        }, {
            success: function(currentuser) {
                console.log("save login time successful");
                document.getElementById('save').value = 'Saved!';
            },
            error: function(currentuser, error) {
                console.log("error when saving login time");
                document.getElementById('save').value = 'Error while saving.';
            }
        });
    }
}

function logoutButton() {
    Parse.User.logOut();
    window.location.href='login.html';
}

function goTo(page) {
    window.location.href=page;
}

// Check whether notifications are turned on
function checkNoticiationSettings() {
    var setting = currentuser.get("notificationSetting");
    return setting;
}

// Change notification settings
function changeNotificationSettings(value) {

    currentuser.set("notificationSetting", value);
    currentuser.save(null, {
        notificationSetting: value
    }, {
        success: function(user) {
            console.log("save notification successful");
            document.getElementById('save').value = 'Saved!';
        },
        error: function(user, error) {
            console.log("error when saving notification");
            document.getElementById('save').value = 'Error while saving.';
        }
    });
}

function setCookie() {
    document.cookie = ("notificationStatus=" + currentuser.get("notificationSetting"));
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function notificationSettingClicked() {
    console.log("Current user: " + currentuser.get("username"));

    //var status = checkNoticiationSettings();

    var status = getCookie("notificationStatus");
    console.log("Before: " + status);


    if (status === "on") {
        var result = confirm("Do you want to turn OFF notifications?");
        if (result == true) {
            changeNotificationSettings("off");
            status = "off"
        }
    }
    else if (status === "off"){
        var result = confirm("Do you want to turn ON notifications?");
        if (result == true) {
            changeNotificationSettings("on");
            status = "on";
        }
    }

    console.log("After: " + status);
}

$(function () {

    if(getCookie("notificationStatus") == "") {
        setCookie();
        console.log("cookieSet");
    }
    else {
        console.log("hi");
    }

    $("#username").append("<li>" + username + "<ul id='logout' onclick='logoutButton()'>\
     <li>Logout</li>\
     </ul></li>");

    element1 = document.getElementById("settings");
    if (element1){
        element1.addEventListener("click", notificationSettingClicked, false);
    }

});


