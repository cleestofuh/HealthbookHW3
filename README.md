# HealthbookHW
CSE134B

-----------------------------------------------------------------------
Members
- Nan Shu
- Chris Lo
- Cindy Vu
- Allen Lin
- Inchul Park (aboutpsm)

---------------------------------------------------------------------
HW5
- We have one error when validating with an input tag inside of an a tag. Could not find a solution for this at the time.
- Edit.html may not work when you have an uploaded image.
- The HTML files may have a little bit of white space which I am not sure how to fix.
- All the minimized files are in a folder called dist.
- Even if user log out, the app works as it seems. (Rollbar catches that error - After user log out, currentuser will be NULL)
- Using Mixpanel, we put "track function" on every pages so that we can track user's behaviors.
- iOS: All functions work through PhoneGap but UI part needs to be fixed. (Screen Size.. etc)
       We couldn't make the package since we don't have Apple Certification.
       However, it works perfectly except UI part (Sizing matter)
- Android: Compiled the package. The apk file can be installed in Android devices,
           and the interface is exactly the same as what we see in web.
           However, we are not able to sign up or login due to the purpose of our application is for web
           instead of phone. Screenshots of running the application are provided in the screenshots folder.
           The apk file is also included.
- Tried to package the app to desktop App using AppJS. We're still working on it.
  To operate the app, you need to run 'app.sh' on terminal window (/app)
- - Not supported with IE
- Multiple clicks for delete are apparent only on Chrome and Firefox. Works with 1 click on Safari
- To turn on and off notifications you click on gear setting.
- Notifications should be default on when people sign up
- Only appears once a day at first login of the day

---------------------------------------------------------------------
Contribution to HW5

Inchul Park:
- Setup the mixpanel to track users behavior.
- Login.html and Login.js (Required full name when user signs up. So, we can track users by name).
- Setup the rollbar to monitor errors and usage.
- For phone app (iOS) POC (/HW5/HealthBook)
- Checked all functions on various browsers in different environment.
- AppJS for packaging desktop App

Chris Lo:
- Completed functionality of the application including uploading images and the progress bar that was previously not done.
- Checked and fixed validation issues with our HTML files.
- Minimization of the files using Grunt

Nan Shu:
- For phone app (Android) POC (/HW5/HealthBook.apk)
- Compiled an Android apk file and installed it in an Android device to test its functionalities

Cindy Vu:
- Reduced the need to fetch many images from server by creating a sprite sheet of the commonly used icons and images.

---------------------------------------------------------------------
HW4

- When deleting, you may have to press the button multiple times before it deletes.
- When editing a habit, you may have to retry it a couple times before it retrieves the correct habit to be edited.
- When clicking the thumbs up, it may take multiple tries to update.
- To turn off the notifications, just click the gear and an alert box will pop up. As for the notification solution, push notifications would have been hard  for a web app and not everyone would have this application opened all the time. We settled for a notification that on the first login of the day for the user, a notification would appear to remind the user of the habits they have to update. Email notifications is another notification option we are looking into.

---------------------------------------------------------------------
Contribution to HW4

Chris Lo:
- Worked on functionality for thumbs up, login/register, deleting a habit, and dynamically listing out habits
- changed some of the css to a more user friendly UI scheme
- fixing bugs in add/edit javascript files

Cindy Vu:
- Worked on notifications
- Created navigation bar to navigate around the application and to logout

Allen Lin
- Add and edit functionality

Inchul Park
- Worked on image uploading

Nan Shu
- Go back button on the add page
- error checking when the fields weren't filled in
