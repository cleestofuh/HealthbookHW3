Parse.initialize("rriccses0xkmfyCu8JHUbRB3n4mJW1H3okqs1Sjh", "z8QtkGlujwURiXFdYzi4SV7L9X6BxWdQG6bVecA2");

var Habit = Parse.Object.extend("Habit");
var query = new Parse.Query(Habit);

query.find({
  success:function(results) {
    for(var i = 0; i < results.length; i++) {
      var object = results[i];
      var name = object.get('habitName');
      var dFreq = object.get('dailyFreq');
      var wFreq = object.get('weekFreq');
      var image = object.get('image');

/*      (function($) {
        $('habit-info').append()
      })*/
      console.log(name);
    }
  },
  error:function(error) {
    alert("Error when getting objects!");
  }
});
