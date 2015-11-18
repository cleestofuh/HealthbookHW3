Parse.initialize("rriccses0xkmfyCu8JHUbRB3n4mJW1H3okqs1Sjh", "z8QtkGlujwURiXFdYzi4SV7L9X6BxWdQG6bVecA2");

var currentuser = Parse.User.current();
var username = currentuser.get("username");

var Habit = Parse.Object.extend("Habit");
var query = new Parse.Query(Habit);

query.equalTo("username", username);
query.find({
  success:function(results) {
    for(var i = 0; i < results.length; i++) {
      // retrieve habit info
      var object = results[i];
      var name = object.get('habitName');
      var dFreq = object.get('dailyFreq');
      var image = object.get('image');
      var imagesrc;

      if(image == "icon1") {
        imagesrc = "../img/sleep.jpg";
      } else if (image == "icon2") {
        imagesrc = "../img/salad.jpg";
      } else {
        imagesrc = "../img/run.jpg";
      }

      // create elements
      $("#habit-list").append("<li>\
                      <ul class='habit-info'>\
                          <li><div class='habit-name'>"
                          + name + "</div></li>\
                          <li><img class='habit-icon' src='" + imagesrc +  "' alt='habit icon'></li>\
                      </ul>\
                      <div class='message'>\
                          <span class='message-total'>\
                              <strong>2</strong> days in a row! Best Record: <strong>5</strong><br>\
                              <svg height='25' width='150'>\
                                  <line x1='0' y1='0' x2='60' y2='0' style='stroke:rgba(65, 131, 215, 0.8);stroke-width:25' />\
                                  <line x1='60' y1='0' x2='150' y2='0' style='stroke:rgba(171,171,171,0.6);stroke-width:25' />\
                              </svg>\
                          </span><br>\
                          <span class='message-today'>Completed <strong>1/"+ dFreq + "</strong> for today!</span>\
                      </div>\
                      <div class='habit-op'>\
                          <button type='button' class='op op-done' onclick='showMsg(this);'' title='done'>\
                              <img src='../img/done.svg' alt='Done'>\
                          </button>\
                          <button type='button' class='op op-edit' onclick='lastHabit(/" + name + "/);' title='edit habit'>\
                              <img src='../img/edit.svg' alt='Edit'>\
                          </button>\
                          <button type='button' class='op op-del' onclick='deleteHabit(/" + name + "/);' title='delete habit'>\
                              <img src='../img/delete.svg' alt='Del'>\
                          </button>\
                      </div>\
                  </li>");
    }

  },
  error:function(error) {
    alert("Error when getting objects!");
  }
});

function lastHabit(name){
    currentuser.set("lastehabit", name);
    currentuser.save(null, {
      success: function(saved) {
        currentuser.set("lastehabit", name);
      },
      error: function(saved, error) {
      }
    });
    location.href = 'edit.html';
}

function showMsg(element){
    var msgElement = (element.parentNode.parentNode.getElementsByClassName("message"))[0];
    // alert(msgElement.innerHTML);
    msgElement.style.visibility="visible";
}

function deleteHabit(name){
  query.equalTo("habitName", name);
  query.first({
    success: function(object) {
      object.destroy({});
      console.log("deleted");
      location.reload();
    },
    error: function(error) {
      console.log("error");
    }

  });

  /*  var child = element.parentNode.parentNode;
    var parent = child.parentNode;
    parent.removeChild(child);*/
}
