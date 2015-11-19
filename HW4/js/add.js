
  Parse.initialize("rriccses0xkmfyCu8JHUbRB3n4mJW1H3okqs1Sjh", "z8QtkGlujwURiXFdYzi4SV7L9X6BxWdQG6bVecA2");

  var currentuser = Parse.User.current();
  var username = currentuser.get("username");
  function init(){
    //var image = document.getElementById("icon1");
    //image.style.border = "5px solid #42A5F5";
  }
  window.onload = init();
  //function handleInput
  var imageName/* = document.getElementById(name)*/;
  function selectImage(name) {
    //Clear all the other effects
    // Test to push
    document.getElementById('icon1').style.border = "none";
    document.getElementById('icon2').style.border = "none";
    document.getElementById('icon3').style.border = "none";
    var image = document.getElementById(name);
    image.style.border = "5px solid #42A5F5";
    imageName = name;
  }
  function saveHabit(){
    var Habit = Parse.Object.extend("Habit");
    var habit = new Habit();
    var daysofweek = [];
    var habitTitle = document.getElementById("title").value;
    // check for title
    if (!habitTitle){
      document.getElementById("habittitleError").innerHTML = '* Habit Title cannot be empty!';
      return;
    }
    else{
      // check if title already exists

      habitTitle = document.getElementById("title").value;
      //document.getElementById("habittitleError").innerHTML = habitTitle;
      var habitQuery = new Parse.Query(Habit);

      habitQuery.equalTo("habitName", habitTitle);
      document.getElementById("habittitleError").value='false';

      habitQuery.first({
        success: function(Habit){
          if (Habit){
            document.getElementById("habittitleError").innerHTML = '* Habit Title already exists!';
            document.getElementById("habittitleError").value='true';
          }
        },
        error: function(Habit){
          document.getElementById("habittitleError").innerHTML = '';
          document.getElementById("habittitleError").value='false';
        }
      });
      if (document.getElementById("habittitleError").value=='true'){
        return;
      }
      document.getElementById("habittitleError").innerHTML = '';
    }
    var habitQuery = new Parse.Query(Habit);
    habitQuery.equalTo("habitName", habitTitle);
    habitQuery.find({
      success: function(number) {
        // Do something with the returned Parse.Object values
        if(number>0){
          document.getElementById("habittitleError").innerHTML = '* Habit Title already exists!';
          return;
        }
      },
      error: function(error) {

      }
    });
    if (!imageName){
      document.getElementById("habiticonError").innerHTML = '* Habit Icon cannot be empty!';
      return;
    }
    else{
      document.getElementById("habiticonError").innerHTML = '';
    }
    $("input:checkbox[name=date]:checked").each(function(){
      daysofweek.push($(this).val());
    });
    if(daysofweek.length==0){
      //daysofweek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
      document.getElementById("weekfreError").innerHTML = '* Weekly Frequency cannot be empty!';
      return;
    }
    else{
      document.getElementById("weekfreError").innerHTML = '';
    }
    var timesPerDay = $('input[name="day"]:checked').val();
    var timesPerDayInt;
    if(typeof timesPerDay === 'undefined'){
      timesPerDay = document.getElementById('others').value;
    };
    switch(timesPerDay){
      case "one":
        timesPerDayInt = 1;
        break;
      case "two":
        timesPerDayInt = 2;
        break;
      case "three":
        timesPerDayInt = 3;
        break;
      default:
        timesPerDayInt = parseInt(timesPerDay);
        if(Number.isNaN(timesPerDayInt)){
          document.getElementById('otherError').innerHTML = '* Daily Frequency is empty or not a valid integer!';
          return;
        }
        else
        {
          document.getElementById('otherError').innerHTML = '';
        }
        break;
    }
    habit.save({
      image: imageName,
      habitName: habitTitle,
      weekFreq: daysofweek,
      dailyFreq: timesPerDayInt,
      username: username,
      thumbscount: 0
    }, {
      success: function(habit) {
        // The object was saved successfully.
        console.log('successfully saved habit');
        document.getElementById('save').value = 'Saved!';
        window.location.assign("list.html");
      },
      error: function(habit, error) {
        // The save failed.
        // error is a Parse.Error with an error code and message.
        console.log('failed to save habit');
        document.getElementById('save').value = 'Error while saving.';
      }
    });
  }
  
  function saveJobApp(objParseFile)
  {
     var jobApplication = new Parse.Object("JobApplication");
     jobApplication.set("applicantName", "Joe Smith");
     jobApplication.set("profileImg", objParseFile);
     jobApplication.save(null, 
     {
        success: function(gameScore) {
          // Execute any logic that should take place after the object is saved.
          var photo = gameScore.get("profileImg");
          $("#profileImg")[0].src = photo.url();
        },
        error: function(gameScore, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and description.
          alert('Failed to create new object, with error code: ' + error.description);
        }
     });
  }

  $('#profilePhotoFileUpload').bind("change", function(e) {
         var fileUploadControl = $("#profilePhotoFileUpload")[0];
         var file = fileUploadControl.files[0];
         var name = file.name; //This does *NOT* need to be a unique name
         var parseFile = new Parse.File(name, file);

         parseFile.save().then
         (
           function() 
           {
               saveJobApp(parseFile);
           }, 
           function(error) 
           {
             alert("error");
           }
         );
  });
