# 5-day-planner-homework
-Added an html and css folders to the 5 day planner.
-Copied code from HTML and CSS over to this VS
HTML
-Added a table called myPlanner, in the table I did the following:
    -Added a row that includes : time, text area so you can type what you need to do and a save button that will save the info to your local storage
    -I added 9 of these rows to represent each hour between 9am-5pm
    -Added the link to the script.js page
    -In each text area, we added an id of the current hour but in military time

Style.css
-Added background color to the body to gray
-Changed the title color to crimson
-Changed the save button colors to crimson
-Made all of the font for the comments, time and save buttons to be white
-The change of colors for current hour, past hour and future hour, I changed to past lime green, current, orange, future hot pink

Script.js
-Added the date and time underneath title
-Created the save button to show when its been clicked and also made it so the comments in the textarea are saved to local storage even when the page refreshes
-function makes it so your info will save on the website even when your refresh it
-program runs through all of the hours and tells the program what color the hour needs to be, we did this by utilizing military time, so the txt id whatever time, we gave the variable i and created an if else statement for what happenes if it passes the current hour, if it is the current hour or if the time is in the future

Link to Deployed app:
https://emilygoeres.github.io/5-day-planner-homework/

Technologies Used:
style.css for format and color
javascript to save info in local storage
Google Fonts
Bootstrap

What does this app do?
This app is a word day daily planner that goes from 9am to 5pm. It has a slot for each hour of the day and when it is past the certain hour, that time slot changes color, if its the current hour the time slot is another color and if it is a future time the time slots are a different color. The color for each time slot changes as the day progresses. It also saves your events in local storage so when you refresh the page, your info is still there.
