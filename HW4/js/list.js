Parse.initialize("rriccses0xkmfyCu8JHUbRB3n4mJW1H3okqs1Sjh", "z8QtkGlujwURiXFdYzi4SV7L9X6BxWdQG6bVecA2");

var Habit = Parse.Object.extend("Habit");
var query = new Parse.Query(Habit);

query.find({
  success:function(results) {
    for(var i = 0; i < results.length; i++) {
      var object = results[i];
      var name = object.get('habitName');
      var dFreq = object.get('dailyFreq');
      var image = object.get('image');

      $(function () {
        // Grab the template script
        var theTemplateScript = $("#habit-template").html();

        // Compile the template
        var theTemplate = Handlebars.compile(theTemplateScript);

        // Define our data object
        var context={
          "habitName": name,
          "dailyFreq": dFreq,
        };

        // Pass our data to the template
        var theCompiledHtml = theTemplate(context);

        // Add the compiled html to the page
        $('.habit-content').html(theCompiledHtml);
      });

  },
  error:function(error) {
    alert("Error when getting objects!");
  }
});

$(function () {
  // Grab the template script
  var theTemplateScript = $("#address-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    "city": "London",
    "street": "Baker Street",
    "number": "221B"
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
