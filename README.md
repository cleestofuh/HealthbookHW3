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
  To operate the app, you need to run 'app.sh' on terminal window

---------------------------------------------------------------------
Contribution to HW5

Inchul Park:
- Setup the mixpanel to track users behavior.
- Login.html and Login.js (Required full name when user signs up. So, we can track users by name).
- Setup the rollbar to monitor errors and usage.
- For phone app (iOS) POC (/HW5/HealthBook)
- Checked all functions on various browsers in different environment.

Chris Lo:
- Completed functionality of the application including uploading images and the progress bar that was previously not done.
- Checked and fixed validation issues with our HTML files.
- Minimization of the files using Grunt.

Nan Shu:
- For phone app (Android) POC (/HW5/HealthBook.apk)
- Compiled an Android apk file and installed it in an Android device to test its functionalities

Cindy Vu:
- Reduced the need to fetch many images from server by creating a sprite sheet of the commonly used icons and images.

---------------------------------------------------------------------
