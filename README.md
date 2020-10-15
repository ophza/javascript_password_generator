# Password Generator

## Description

![website graphic](https://docs.google.com/drawings/d/e/2PACX-1vTng_8X7_9Hi3Mtgtl4wwA2V0yMwbGXlYqneW-qjjPIFbYbzh74vKIH1aFngMdJDWlKLn5EZ16f9vva/pub?w=960&amp;h=720)

### How It Works
* The user selects the criteria for the password
* The site makes an array based on that criteria
* The site won't generate the password till the user presses the *generate* button
* The site then selects a random index of that array
  * It loops this function until it has reached the selected length
  * Everytime it loops it adds the selected item to a string
* The site will then print the password
* If the user presses the *clear* button 
  * The site will clear the password __along__ with the criteria
* If the user enters a password length that is too short
  * The site will alert the user of this
  * It will also clear the criteria
